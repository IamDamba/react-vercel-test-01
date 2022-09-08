import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [val, setVal] = useState("");

  const getHello = async () => {
    await axios.get("/hello").then((res) => {
      setVal(res.data.msg);
    });
  };

  useEffect(() => {
    getHello();
  });
  return (
    <div className="App">
      <p className="read-the-docs">val</p>
    </div>
  );
}

export default App;
