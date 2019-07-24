import React, { useState } from "react";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [user, setUser] = useState(""); // will add key value pairs

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
