import React, { useState, useEffect } from "react";
import ItemsList from "./ItemsList";
import AddItem from "./AddItem";
import styled from 'styled-components';

const AddItemSign = styled.p`
  margin: 10px;
`

export default function Shop() {

  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items")
    const itemsValue = JSON.parse(saved)
    return itemsValue || []
  })

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  },
    [items])

  useEffect(() => {
    if (items.length === 0) {
      document.title = `Товары отсутствуют`
    } else {
      document.title = `${items.length} товаров`
    }
  })

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!name) {
      setValid("Введите название");
      return;
    }
    if (!desc) {
      setValid("Введите описание ");
      return;
    }
    setItems([
      ...items,
      {
        id: items.length + 1,
        name: name,
        desc: desc
      }
    ]);
    setName("");
    setDesc("");
    setValid("");
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescChange(event) {
    setDesc(event.target.value);
  }

  function handleDeleteClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <>
      <AddItem
        name={name}
        desc={desc}
        valid={valid}
        onNameChange={handleNameChange}
        onDescChange={handleDescChange}
        onFormSubmit={handleFormSubmit}
      />
      <div>{items.length === 0 && <AddItemSign>Добавьте первый товар</AddItemSign>}</div>
      <ItemsList items={items} onDeleteClick={handleDeleteClick} />
    </>
  );
}
