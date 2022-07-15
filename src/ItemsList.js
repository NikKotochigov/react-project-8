import React from "react";
import Item from "./Item";
import styled from 'styled-components';
import { ItemButton } from "./Item";

const Shop = styled.ul`
  list-style: none;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
`

const ItemList = styled.li`
  margin-bottom: 80px;
`
const DelButton = styled.button`
  background-color: white;
  color: black;
  border: 1px solid var(--light-gray);
  padding: 5px 20px;
  min-width: 50px;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 200ms ease-out;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  margin-left: 10px;
  &:active {
    box-shadow: 0 0px rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.4;
    cursor: disabled;
  }
`
export default function ItemsList(props) {
  return (
    <Shop>
      {props.items.map((item) => (
        <ItemList key={item.id}>
          <Item info={item} />
          <DelButton
            className="btn-delete"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </DelButton>
        </ItemList>
      ))}
    </Shop>
  );
}
