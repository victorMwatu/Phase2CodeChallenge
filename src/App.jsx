import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/goals")
      .then((response) => response.json())
      .then((data) => setGoals(data))
      .catch((error) => console.error("Failed to fetch goals:", error));
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <header className="">
        <NavBar />
      </header>
      <main className="">
        <Outlet context={{ goals }} />
      </main>
    </div>
  );
}

export default App;
