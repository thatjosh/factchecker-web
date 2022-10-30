import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useFactChecker } from "../../common/data/get/useFactChecker";

const DetectionResults: React.FC = () => {
  let { query_string } = useParams();
  if (!query_string) {
    return <>HAHA</>;
  }
  const { data: factCheck } = useFactChecker(query_string);

  return (
    <>
      <Flex flexDir={"row"} bgColor={"white"}>
        <Flex
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={1}
          alignItems={"center"}
          justifyItems={"center"}
        >
          {factCheck &&
            factCheck.claims.map((fact: any) => {
              return (
                <>
                  <Flex flexDir={"column"} px={5} py={5} gap={2}>
                    <Flex
                      flexDir={"column"}
                      rounded={"md"}
                      // width={200}
                      height={"100px"}
                      transition={"transform 0.8s"}
                      _hover={{
                        transform: "scale(1.1)",
                        cursor: "pointer",
                      }}
                      // onClick={onOpen}
                      color={"black"}
                      gap={2}
                    >
                      {/* <Image
                        rounded={"full"}
                        width={"100%"}
                        height={"100px"}
                        objectFit={"cover"}
                        bgColor={"#FaFaFa"}
                      /> */}

                      <Text fontSize={"12px"}>{`${fact?.text}`}</Text>

                      <Text
                        fontSize={"12px"}
                      >{`Rating: ${fact?.claimReview[0].textualRating}`}</Text>
                    </Flex>
                    <iframe
                      width={"100%"}
                      height={"300px"}
                      src={fact?.claimReview[0].url}
                    ></iframe>
                  </Flex>
                </>
              );
            })}
        </Flex>
      </Flex>
    </>
  );
};

export default DetectionResults;
