import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateMeetingRoom = () => {
  const [roomid, setRoomid] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!roomid.trim()) return;
    navigate(`/Meeting/${roomid}`);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-[400px] p-5 shadow rounded">
        <h1 className="text-center text-2xl font-bold mb-4">
          Create Instant Meeting
        </h1>
        <div className="mb-5">
          <label
            htmlFor="roomid"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Room Id
          </label>
          <input
            id="roomid"
            type="number"
            value={roomid}
            onChange={(e) => setRoomid(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateMeetingRoom;
