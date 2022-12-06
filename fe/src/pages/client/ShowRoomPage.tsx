import ContactBox from "components/client/home/ContactBox";
import FirstUsing from "components/client/home/FirstUsing";
import React from "react";
import ShowRoom from "../../components/client/showcase/ShowRoom";

export default function ShowRoomPage() {
  return (
    <div>
      <ShowRoom />
      <ContactBox />
    </div>
  );
}
