import { useOutletContext, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

function Edit() {
  const { goals } = useOutletContext();
  const { handleEdit } = useOutletContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedGoal = goals.find((g) => g.id.toString() === id);
  const { URL } = useOutletContext();

  const [form, setForm] = useState({
    id: selectedGoal.id,
    name: selectedGoal.name,
    category: selectedGoal.category,
    targetAmount: selectedGoal.targetAmount,
    deadline: selectedGoal.deadline,
  });
  console.log(id);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newValue =
    name === "targetAmount"
        ? Number(value)
        : value;

  setForm({ ...form, [name]: newValue });
  };

  function handleSubmit(e) {
       e.preventDefault();
    fetch(`${URL}/${selectedGoal.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    })
    .then(r => r.json())
    .then(data => {
        handleEdit(data);
        navigate("/");
  })
    ;
   }

  return (
    <div>
      <h2>
        Create New Goal:
      </h2>

      <form onSubmit={handleSubmit} class="form">
        <div class="form-group">
        <label>Goal Name:</label>
        <input type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
        />
        </div>

        <div class="form-group">
        <label>Category:</label>
        <input type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
        />
        </div>

        <div class="form-group">
        <label>Target Amount:</label>
        <input type="number"
                name="targetAmount"
                value={form.targetAmount}
                onChange={handleChange}
        />
        </div>

        <div class="form-group">
        <label>Deadline:</label>
        <input type="date"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
        />
        </div>

        <button type="submit">
          Create Goal
        </button>
      </form>
    </div>
  );
}

export default Edit;
