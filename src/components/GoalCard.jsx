import { useNavigate } from "react-router-dom";

function GoalCard({ goal }) {
  const deadline = new Date(goal.deadline);
  const createdAt = new Date(goal.createdAt);
  const navigate = useNavigate();
  const diffInMs = deadline - new Date();
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  const status = (goal) => {
    const now = new Date();
    const deadline = new Date(goal.deadline);
    const daysLeft = (deadline - now) / (1000 * 60 * 60 * 24);

    if (goal.savedAmount >= goal.targetAmount) return "Completed";
    if (deadline < now) return "Overdue";
    if (daysLeft <= 30) return "Warning: Less Than 30 Days Left.";
    return "";
  };

  return (
    <li>
      <h3>{goal.name}</h3>

      <div>
        <span>Description:</span>
        <span>{goal.description}</span>

        <span>Category:</span>
        <span>{goal.category}</span>

        <span>Created:</span>
        <span>{createdAt.toLocaleDateString()}</span>

        <span>Deadline:</span>
        <span>{deadline.toLocaleDateString()}</span>

        <span>Time Left:</span>
        <span>{diffInDays} days</span>

        <span >
          {status(goal)}
        </span>

        <span>Saved/Target:</span>
        <span>{goal.savedAmount} / {goal.targetAmount}</span>
      </div>

      <div>
        <button onClick={() => navigate("/editGoal")}>Edit Goal</button>
      </div>
    </li>
  );
}

export default GoalCard;
