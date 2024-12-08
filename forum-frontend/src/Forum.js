import React from "react";
import { Routes, Route } from "react-router-dom";
import TopicList from "./Forum/TopicList";
import CreateTopic from "./Forum/CreateTopic";
import TopicDetail from "./Forum/TopicDetail";
import './styles/index.css';
import Navbar from "./components/Navbar";
import NavbarForum from "./components/NavbarForum";

const Forum = () => {
    return (
        <div>
            <NavbarForum/>
            <Routes>
                <Route path="/" element={<TopicList />} />
                <Route path="/create-topic" element={<CreateTopic />} />
                <Route path="/topics/:topicId" element={<TopicDetail />} />
            </Routes>
        </div>
    );
};

export default Forum;
