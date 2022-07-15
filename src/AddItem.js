import React from "react";
import styled from 'styled-components';

const ItemName = styled.input`
  padding: 12px 10px;
  border-radius: 3px;
  border: 1px solid #cccccc;
  font-size: 16px;
  margin: 10px;
`

const Button = styled.button`
  background-color: #0000ff;
  color: white;
  border: 0;
  padding: 15px 20px;
  min-width: 150px;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 200ms ease-out;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  margin: 10px;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.4;
    cursor: disabled;
  }
  &:active {
    box-shadow: 0 0px rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }
`

const LabelItemName = styled.label`
  display: none
`

const Validation = styled.div`
  margin: 10px;
`

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div>
        <LabelItemName htmlFor="item-name">Название:</LabelItemName>
        <ItemName
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
        />
      </div>
      <div>
        <LabelItemName htmlFor="item-description">Описание:</LabelItemName>
        <ItemName
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"

        />
      </div>
      <div className="form-footer">
        <Validation>{props.valid}</Validation>
        <Button type="submit">Добавить</Button>
      </div>
    </form>
  );
}
