import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Feed from "./Feed"; // First App.js renamed to Feed
import Forum from "./Forum";
import CreateTopic from "./Forum/CreateTopic"; // Second App.js renamed to Forum

const App = () => {
  return (
      <Router>


        <Routes>
          {/* Route for Feed */}
          <Route path="/feed" element={<Feed />} />

          {/* Route for Forum */}
          <Route path="/forum/*" element={<Forum />} />
            <Route path="/create-topic" element={<CreateTopic />} />

        </Routes>
      </Router>
  );
};

export default App;