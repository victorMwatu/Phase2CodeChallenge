// components/Goal.jsx
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import GoalCard from "../components/GoalCard";

function Goal() {
  const { id } = useParams();
  const { goals } = useOutletContext();
  const goal = goals.find((g) => g.id === id);

  if (!goal) {
    return <p>Goal not found.</p>;
  }

  return (
    <div>
      <GoalCard goal={goal} />
    </div>
  );
}

export default Goal;