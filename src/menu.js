import React, { useState } from "react";
import styled from "styled-components";
import { MenuItem } from "./menu-item";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 30%;
  height: 80%;
  z-index: 4000000;

  background: rgba(100, 100, 100, 0.2);
  /* border-radius: 20px 0px 0px 0px; */
  /* border: 5px solid rgba(100, 100, 100, 0.2); */
`;

const MenuItemContainer = styled.div`
  flex-basis: 94%;
  width: 100%;
  overflow-y: scroll;
`;

const BottomButtonContainer = styled.div`
  flex-basis: 5%;
  width: 100%;
`;

const AddButton = styled.button`
  position: relative;
  background: #111;
  width: 95%;
  height: 95%;
  text-align: center;
  margin: auto;

  color: #fff;
  border: none;
  margin: 0 auto;
  display: block;
`;

const ButtonText = styled.span``;

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const Menu = (props) => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 0,
      title: "Title 0",
      priority: 6,
      setPriority: (priority) =>
        setMenuItems((menuItems) => [
          { ...menuItems[0], priority },
          menuItems[1],
          menuItems[2],
        ]),
    },
    {
      id: 1,
      title: "Title 1",
      priority: 3,
      setPriority: (priority) =>
        setMenuItems((menuItems) => [
          menuItems[0],
          { ...menuItems[1], priority },
          menuItems[2],
        ]),
    },
    {
      id: 2,
      title: "Title 2",
      priority: 10,
      setPriority: (priority) =>
        setMenuItems((menuItems) => [
          menuItems[0],
          menuItems[1],
          { ...menuItems[2], priority },
        ]),
    },
  ]);
  return (
    <Container>
      <DragDropContext
        onDragEnd={(result) => {
          // dropped outside the list
          if (!result.destination) return;
          setMenuItems((menuItems) =>
            reorder(menuItems, result.source.index, result.destination.index)
          );
        }}
      >
        <Droppable droppableId="menu">
          {(dropProvided) => (
            <MenuItemContainer
              ref={dropProvided.innerRef}
              {...dropProvided.droppableProps}
            >
              {menuItems.map((item, index) => (
                <Draggable key={item.id} draggableId={item.title} index={index}>
                  {(dragProvided) => (
                    <MenuItem
                      key={item.id}
                      title={item.title}
                      priority={item.priority}
                      setPriority={item.setPriority}
                      {...dragProvided.draggableProps}
                      {...dragProvided.dragHandleProps}
                      ref={dragProvided.innerRef}
                    />
                  )}
                </Draggable>
              ))}
              {dropProvided.placeholder}
            </MenuItemContainer>
          )}
        </Droppable>
      </DragDropContext>
      <BottomButtonContainer>
        <AddButton>
          <ButtonText>Add</ButtonText>
        </AddButton>
      </BottomButtonContainer>
    </Container>
  );
};
