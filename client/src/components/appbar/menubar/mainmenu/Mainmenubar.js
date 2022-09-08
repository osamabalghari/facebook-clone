import React, { useContext } from "react";
import Chatmenu from "../chatmenu/Chatmenu";
import Menumodal from "../menumodal/Menumodal";
import Notification from "../notification/Notification";
import Secondary from "../secondarymenu/Secondary";
import postContext from "../../../../context/postContext/postContext";

const Mainmenubar = () => {
  const context = useContext(postContext);
  const { data } = context;
  return (
    <div class="col d-flex align-items-center justify-content-end">
      {data.map((value) => {
        return (
          <div class="align-items-center justify-content-center d-none d-xl-flex">
            <img
              src={`http://localhost:3002/backend/uploads/${value.owner.avatar}`}
              class="rounded-circle me-2"
              alt="avatar"
              style={{ width: "38px", height: "38px", objectFit: "cover" }}
            />
            <p class="m-0">{value.owner.name}</p>
          </div>
        );
      })}
      <Menumodal />
      <Chatmenu />
      <Notification />
      <Secondary />
    </div>
  );
};

export default Mainmenubar;
