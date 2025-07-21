import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function AddAmount({onHandle, goal}) {
  const { URL } = useOutletContext();
  const [form, setForm] = useState({
    id: goal.id,
    savedAmount: "",
  });
  const { handleEdit } = useOutletContext();
  console.log

  function handleChange(e) {
    const {name, value} = e.target;
    const amountToHandle = Number(value);
    setForm({ ...form, [name]: amountToHandle });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newAmount = goal.savedAmount + form.savedAmount;
  

    fetch(`${URL}/${goal.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({savedAmount: newAmount})
    })
    .then(r => r.json())
    .then(data => {
        handleEdit(data);
        onHandle(false);
  })
    ;
   }

  return (
    <div>
      <p>
        Add amount:
      </p>

      <form onSubmit={handleSubmit}>
        <label>Amount:</label>
        <input type="number"
                name="savedAmount"
                value={form.savedAmount}
                onChange={handleChange}
        />

        <button type="submit">
          Add Amount
        </button>
        <button onClick={() => onHandle(false)}>
            Cancel
        </button>
      </form>
    </div>
  );
}

export default AddAmount;
