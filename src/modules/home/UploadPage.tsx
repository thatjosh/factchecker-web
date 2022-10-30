import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import image_one from "../../common/assets/example.png";
import image_two from "../../common/assets/example2.png";
import image_three from "../../common/assets/example3.png";
import { useGoogleCloudVision } from "../../common/data/post/useGoogleCloudVision";
// @ts-ignore
import imageToBase64 from "image-to-base64/browser";

const UploadPage: React.FC = () => {
  function getText(text_input: string) {
    const data = text_input.split("\n");
    let new_data: string[] = [];

    data.forEach((each) => {
      if (each.length > 15) {
        new_data.push(each);
      }
    });

    console.log("2. Cloud Formatted Data: \n" + new_data);

    return new_data[0];
  }

  const [ocrTextState, setOcrTextState] = useState<string>("");
  // console.log("3. Facecheck API: \n" + JSON.stringify(factCheck?.claims));

  // useEffect(() => {
  //   const data = useFactChecker("ocrTextState");
  //   console.log(data);
  // }, [ocrTextState]);

  // useEffect(() => {
  //   const personnelQuery = ref(db, "personnel");
  //   onValue(personnelQuery, (snapshot) => {
  //     setPersonnelData(() => snapshot.val());
  //   });

  //   const eventQuery = ref(db, "event");
  //   onValue(eventQuery, (snapshot) => {
  //     setEventData(() => snapshot.val());
  //   });
  // }, []);

  const { mutateAsync: mutateData } = useGoogleCloudVision();
  const images = [
    image_one,
    image_two,
    image_three,
    image_one,
    image_two,
    image_three,
    image_one,
    image_two,
    image_three,
  ];

  let base64data = "";
  const [base64, setBase64] = useState<any>();

  return (
    <>
      <Flex flexDir={"row"} py={5} bgColor={"white"}>
        <Flex justifyContent={"center"} flexWrap={"wrap"} gap={1}>
          {images.map((image) => {
            return (
              <Image
                width={"32%"}
                height={"200px"}
                objectFit={"contain"}
                src={image}
                boxShadow={"2xl"}
                bgColor={"#2a2a2a"}
                onClick={() => {
                  imageToBase64(image).then((response: any) => {
                    mutateData({
                      requests: [
                        {
                          image: {
                            content: response,
                          },
                          features: [
                            {
                              type: "TEXT_DETECTION",
                            },
                          ],
                        },
                      ],
                    }).then((data) => {
                      const OCRText =
                        data?.responses[0]?.fullTextAnnotation?.text;
                      // console.log("1. Cloud vision Data: \n" + OCRText);
                      // setOcrTextState(OCRText);
                      // console.log(getText(OCRText));
                      // console.log(data?.responses[0]?.fullTextAnnotation?.text);
                      // const OCRFilteredText = getText(OCRText);
                      // navigate(`/detection-result/${getText(OCRText)}`);
                      window.location.href = `https://toolbox.google.com/factcheck/explorer/search/${getText(
                        OCRText
                      )}`;
                    });
                  });
                }}
              />
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};

export default UploadPage;
