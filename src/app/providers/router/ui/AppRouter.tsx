import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import Layout from "widgets/Layout/ui/Layout";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {Object.values(routeConfig).map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
