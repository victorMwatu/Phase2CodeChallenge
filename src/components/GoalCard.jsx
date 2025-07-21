import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import AddAmount from "./AddAmount";

function GoalCard({ goal }) {
  const deadline = new Date(goal.deadline);
  const createdAt = new Date(goal.createdAt);
  const navigate = useNavigate();
  const diffInMs = deadline - new Date();
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  const [showAddForm, setShowAddForm] = useState(false);
  const { handleDelete } = useOutletContext();

  const status = (goal) => {
    const now = new Date();
    const deadline = new Date(goal.deadline);
    const daysLeft = (deadline - now) / (1000 * 60 * 60 * 24);

    if (goal.savedAmount >= goal.targetAmount) return "Completed";
    if (deadline < now) return "Overdue";
    if (daysLeft < 31) return "Warning: Less Than 30 Days Left.";
    return "";
  };

 function handleAddAmountForm(val) {
    setShowAddForm(showAddForm => showAddForm = val)
  }
 function handleDeleteGoal() {
    fetch(`http://localhost:4000/goals/${goal.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDelete(goal));
  }

  return (
    <li>
      <div>
          {showAddForm ? <AddAmount onHandle={handleAddAmountForm} goal={goal}/> : null }
      </div>
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
        <button onClick={() => navigate(`/editGoal/${goal.id}`)}>Edit Goal</button>
        <button onClick={handleAddAmountForm}>Add Amount</button>
        <button onClick={handleDeleteGoal}>Delete</button>
      </div>
      
    </li>
  );
}

export default GoalCard;
