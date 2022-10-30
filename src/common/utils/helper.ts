import { IPersonnel } from "../interface/interface";

export function getPersonnelsNotifiedString(personnels: number[] | undefined) {
  let txt_str = "Personnel ";

  if (!personnels) {
    return "No personnels notified yet";
  }
  const len = personnels.length;

  personnels.map((personnel_id, key) => {
    let txt_tmp = "#" + personnel_id;
    if (len != key + 1) {
      txt_tmp += ", ";
    }
    txt_str += txt_tmp;
  });
  return txt_str;
}

export function getPersonnelStatusColour(status: string) {
  switch (status) {
    case "on duty":
      return "green";
    case "off duty":
      return "#4f4f4f";
    case "standby":
      return "orange";
    default:
      return "#4f4f4f";
  }
}

export function getSeverityLevelColour(severity: string) {
  switch (severity) {
    case "high":
      return "red";
    case "mid":
      return "orange";
    case "low	":
      return "#4f4f4f";
    default:
      return "#4f4f4f";
  }
}
export function getEventStatusColour(status: string) {
  switch (status) {
    case "open":
      return "red";
    case "resolved":
      return "#366b48";
    case "personnels dispatched":
      return "#4f4f4f";
    default:
      return "white";
  }
}

export function capitaliseFirstChar(input_string: string) {
  return input_string.charAt(0).toUpperCase() + input_string.slice(1);
}

export function nearbyPersonnels(personnels: IPersonnel[], region: string) {
  return personnels.filter((personnel) => personnel.region === region);
}

export function findPersonnelKey(
  personnel_id: number,
  personnels: IPersonnel[]
) {
  for (let i = 0; i < personnels.length; i++) {
    if (personnels[i].id === personnel_id) {
      return i;
    }
  }
  return -1;
}
