import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import Layout from 'widgets/Layout/ui/Layout';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => (
    <Routes>
        <Route
            path="/"
            element={(
                <Suspense fallback={<PageLoader />}>
                    <Layout />
                </Suspense>
            )}
        >
            {Object.values(routeConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            {element}
                        </Suspense>
                    )}
                />
            ))}
        </Route>
    </Routes>
);

export default AppRouter;
