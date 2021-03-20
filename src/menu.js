import React from "react";
import styled from "styled-components";

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

const MenuItem = styled.div`
  background: #222;
  width: 100%;
  height: 5em;
  border: 1px solid #000;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  margin-top: 5px;
  margin-bottom: 5px;
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

const ButtonText = styled.span`
`;

export const Menu = (props) => {
  return (
    <Container>
      <MenuItemContainer>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </MenuItemContainer>
      <BottomButtonContainer>
        <AddButton>
          <ButtonText>Add</ButtonText>
        </AddButton>
      </BottomButtonContainer>
    </Container>
  );
};
