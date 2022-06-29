import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";



function ItemForm({onItemFormSubmit}) {
  const [form, setForm] = useState(
    {name: '', category: 'Produce'}
  )
  
  function handleChange(event) {
        setForm({
          ...form,
          [event.target.name]: event.target.value,
        });
      }

  function handleSubmit(e){
    e.preventDefault()
    onItemFormSubmit({id: uuid(), ...form})
  }

  return (
    <form className="NewItem" value={form.name} onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
