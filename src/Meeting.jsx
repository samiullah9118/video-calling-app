import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const Meeting = () => {
  const { roomid } = useParams();
  const meetingRef = useRef();
  const [error, setError] = useState("");

  useEffect(() => {
    let zp;
    const initMeeting = () => {
      const userId = `UserId-${Math.round(Math.random() * 100000)}`;
      const username = `Username-${Math.round(Math.random() * 100000)}`;
      const appID = 759448289;
      const serverSecret = import.meta.env.VITE_ZEGOCLOUD_SECRET_KEY;

      if (!roomid) {
        setError("Meeting ID is missing.");
        return;
      }

      if (!serverSecret) {
        setError(
          "Meeting service is not configured. Please add VITE_ZEGOCLOUD_SECRET_KEY in Vercel.",
        );
        return;
      }

      try {
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID,
          serverSecret,
          roomid,
          userId,
          username,
        );

        zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
          container: meetingRef.current,
          scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall,
          },
          sharedLinks: [
            {
              name: "Share Meeting link",
              url: window.location.href,
            },
          ],
        });
      } catch (err) {
        console.error("Failed to initialize Zego meeting:", err);
        setError("The meeting could not be started. Please try again.");
      }
    };

    initMeeting();
    return () => {
      if (zp) {
        zp.destroy();
      }
    };
  }, [roomid]);

  return (
    <div className="h-screen w-screen flex justify-center items-center px-4">
      {error ? (
        <div className="max-w-md rounded-lg border border-red-300 bg-red-50 p-6 text-center text-red-700 shadow-sm">
          <h2 className="mb-2 text-lg font-semibold">Meeting unavailable</h2>
          <p>{error}</p>
        </div>
      ) : (
        <div className="size-full" ref={meetingRef}></div>
      )}
    </div>
  );
};

export default Meeting;
