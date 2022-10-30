export interface IPersonnel {
  id: number;
  first_name: string;
  last_name_initial: string;
  status: string;
  area: string;
  region: string;
  rank: string;
  coordinate: GMapsCoordinates;
}

export interface GMapsCoordinates {
  lat: number;
  lng: number;
}

export interface IEvent {
  id: number;
  details: string;
  severity_level: string;
  status: string;
  coordinate: GMapsCoordinates;
  personnels_notified: number[];
  region: string;
}
