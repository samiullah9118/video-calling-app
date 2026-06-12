import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateMeetingRoom from "./CreateMeetingRoom";
import Meeting from "./Meeting";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<CreateMeetingRoom />} />
        <Route path="/Meeting/:roomid" element={<Meeting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
