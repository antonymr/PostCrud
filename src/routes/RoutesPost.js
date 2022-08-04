import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import NotFound from "../Components/NotFound/NotFound";
import Post from "../Components/Admin/Post";
import PostList from "../Components/Post/PostList";

function RoutesPost() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<PostList />}></Route>
                    <Route path="admin-post" element={<Post />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default RoutesPost;