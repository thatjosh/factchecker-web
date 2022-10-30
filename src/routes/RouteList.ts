import DetectionResults from "../modules/home/DetectionResults";
import HomePage from "../modules/home/UploadPage";

export interface IRoute {
  path: string;
  name: string;
  component: React.FC;
}

export const RouteList: IRoute[] = [
  {
    path: "/",
    name: "upload",
    component: HomePage,
  },
  {
    path: "/detection-result/:query_string",
    name: "detection result",
    component: DetectionResults,
  },
];
