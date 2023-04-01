import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import Layout from 'widgets/Layout/ui/Layout';

const AppRouter = () => (
    // eslint-disable-next-line i18next/no-literal-string
    <Suspense fallback={<div>...loader</div>}>
        <Routes>
            <Route path="/" element={<Layout />}>
                {Object.values(routeConfig).map((route) => (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <Route key={route.path} {...route} />
                ))}
            </Route>
        </Routes>
    </Suspense>
);

export default AppRouter;
