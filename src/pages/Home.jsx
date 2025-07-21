import { useOutletContext } from "react-router-dom";
import GoalCard from "../components/GoalCard";

function Home() {
  const { goals } = useOutletContext();

  const totalSaved = goals.reduce((sum, goal) => sum + Number(goal.savedAmount), 0);


  return (
    <div>
      <div>
        <h2>Summary</h2>
        <p>Total Goals: {goals.length}</p>
        <p>Total Saved: ${totalSaved.toFixed(2)}</p>
      </div>

      <ul>
        {goals.map((goal) => (
          <div key={goal.id}>
            <GoalCard goal={goal} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Home;
