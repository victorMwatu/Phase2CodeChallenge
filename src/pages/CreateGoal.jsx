import { useOutletContext, useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateGoal() {
  const { handleAdd } = useOutletContext();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    targetAmount: "",
    savedAmount: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
       e.preventDefault();
    fetch("http://localhost:4000/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    })
    .then(r => r.json())
    .then(data => {
        handleAdd(data);
        navigate("/home");
  });
   }

  return (
    <div>
      <h2>
        Create New Goal:
      </h2>

      <form onSubmit={handleSubmit}>
        <label>Goal Name:</label>
        <input type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
        />

        <label>Goal Description:</label>
        <input type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
        />

        <label>Category:</label>
        <input type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
        />

        <label>Target Amount:</label>
        <input type="text"
                name="targetAmount"
                value={form.targetAmount}
                onChange={handleChange}
        />

        <label>Saved Amount:</label>
        <input type="text"
                name="savedAmount"
                value={form.savedAmount}
                onChange={handleChange}
        />

        <label>Deadline:</label>
        <input type="text"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
        />

        <button type="submit" onSubmit={() => handleSubmit()}>
          Create Goal
        </button>
      </form>
    </div>
  );
}

export default CreateGoal;
