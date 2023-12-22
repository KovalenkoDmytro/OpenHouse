import {Route, Routes} from "react-router-dom";
import React from "react";
import NotFound from "./pages/NotFound";
import Loading from "./components/Loading";

const LazyHomesPage = React.lazy(() => import('./pages/Homes'))
const LazyCommunitiesPage = React.lazy(() => import('./pages/Communities'))
const LazyHomePage = React.lazy(() => import('./pages/Home'))
export default function RoutesList() {
    return (
        <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/" element={
                <React.Suspense fallback={<Loading/>}>
                    <LazyCommunitiesPage/>
                </React.Suspense>
            }/>
            <Route path="/communities" element={
                <React.Suspense fallback={<Loading/>}>
                    <LazyCommunitiesPage/>
                </React.Suspense>
            }/>

            <Route path="/communities/:id" element={
                <React.Suspense fallback={<Loading/>}>
                    <LazyHomesPage/>
                </React.Suspense>
            }/>
            <Route path="/home/:id" element={
                <React.Suspense fallback={<Loading/>}>
                    <LazyHomePage/>
                </React.Suspense>
            }/>
        </Routes>
    )
}