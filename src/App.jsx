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
  }, [goals]);

  function handleAdd(newGoal) {
    setGoals([...goals, newGoal])
  }
  function handeleDelete(deletedGoal) {
    const updatedGoals = goals.filter(goal => goal.id != deletedGoal.id);
    setGoals(updatedGoals);
  }

  function handleEdit(editedGoal) {
    const updatedGoals = goals.map(goal => {
      if(goal.id === editedGoal.id) {
        return editedGoal;
      } else {
        return goal;
      }
    });
  }
  return (
    <div className="min-h-screen font-sans">
      <header className="">
        <NavBar />
      </header>
      <main className="">
        <Outlet context={ { goals, handleAdd, handeleDelete, handleEdit } } />
      </main>
    </div>
  );
}

export default App;
