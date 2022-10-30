import { Routes, Route, Navigate } from "react-router-dom";
import { RouteList } from "./RouteList";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 1. Main routes */}
      {RouteList.map((route, index) => {
        return (
          <Route key={index} element={<route.component />} path={route.path} />
        );
      })}

      {/* 2. Replaces random routes with '/' */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
