import { useOutletContext, useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateGoal() {
  const { handleAdd } = useOutletContext();
  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];
  const { URL } = useOutletContext();

  const [form, setForm] = useState({
    name: "",
    category: "",
    targetAmount: "",
    savedAmount: "",
    deadline: "",
    createdAt: today
  });

  const handleChange = (e) => {
    const { name, value } = e.target;


    const newValue =
    name === "targetAmount" || name === "savedAmount"
        ? Number(value)
        : value;

  setForm({ ...form, [name]: newValue });
  };

  function handleSubmit(e) {
       e.preventDefault();
    fetch(`${URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    })
    .then(r => r.json())
    .then(data => {
        handleAdd(data);
        navigate("/");
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

        <label>Category:</label>
        <input type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
        />

        <label>Target Amount:</label>
        <input type="number"
                name="targetAmount"
                value={form.targetAmount}
                onChange={handleChange}
        />

        <label>Saved Amount:</label>
        <input type="number"
                name="savedAmount"
                value={form.savedAmount}
                onChange={handleChange}
        />

        <label>Deadline:</label>
        <input type="date"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
        />

        <button type="submit">
          Create Goal
        </button>
      </form>
    </div>
  );
}

export default CreateGoal;
