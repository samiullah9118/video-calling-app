import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const Meeting = () => {
  const { roomid } = useParams();
  const meetingRef = useRef();

  useEffect(() => {
    let zp;
    const initMeeting = () => {
      const userId = `UserId-${Math.round(Math.random() * 100000)}`;
      const username = `Username-${Math.round(Math.random() * 100000)}`;
      const appID = 759448289;
      const serverSecret = import.meta.env.VITE_ZEGOCLOUD_SECRET_KEY;
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomid,
        userId,
        username,
      );
      // Create instance object from Kit Token.
      zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
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
    };

    initMeeting();
    return () => {
      if (zp) {
        zp.destroy();
      }
    };
  }, [roomid]);

  return (
    <div className="h-screen w-sreen flex justify-center items-center">
      <div className="size-full" ref={meetingRef}></div>
    </div>
  );
};

export default Meeting;
