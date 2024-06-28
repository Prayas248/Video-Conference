import React from "react";
import { v1 as uuid } from "uuid";
import { useNavigate } from "react-router-dom"; // Use useNavigate hook

const CreateRoom = () => {
  const navigate = useNavigate(); // Access history

  function create() {
    const id = uuid();
    navigate(`/room/${id}`); // Use navigate to push route
  }

  return (
    <button onClick={create}>Create room</button>
  );
};

export default CreateRoom;
