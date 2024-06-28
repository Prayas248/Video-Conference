import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateRoom from "./routes/CreateRoom"; // Assuming components folder
import Room from "./routes/Room";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CreateRoom />} />  {/* Provide element for root */}
          <Route path="/room/:roomID" element={<Room />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
