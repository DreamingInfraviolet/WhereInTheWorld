import React from "react";
import styled from "styled-components";

const MAX_PRIORITY = 10;

const range = (n) => [...Array(n + 1).keys()];

const lerp = (x, y, a) => x * (1 - a) + y * a;

const DraggableItemContainer = styled.div``;

const MenuItemDiv = styled.div`
  position: relative;
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

const Title = styled.p`
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

const CloseButton = styled.button`
  top: 2px;
  left: 2px;
  position: absolute;
  color: #fff;
  background: #111;
  border: none;
  margin: 0 auto;
  display: block;
`;

const PrioritySliderContainer = styled.div``;

const PrioritySliderDot = styled.button`
  background: ${({ priority, index }) => {
    const active = index <= priority;
    const percentage = index / MAX_PRIORITY;

    return `hsl(${lerp(0, 120, percentage)}, ${active ? "80%" : "0%"}, ${active ? "70%" : "50%"})`;
  }};
`;

const PrioritySlider = ({ priority, setPriority }) => {
  if (priority > MAX_PRIORITY) console.warn(`Priority "${priority}" exceed maximum value "${MAX_PRIORITY}"`);

  return (
    <PrioritySliderContainer>
      {range(MAX_PRIORITY).map((index) => (
        <PrioritySliderDot key={index} index={index} priority={priority} onClick={() => setPriority(index)}>
          {index}
        </PrioritySliderDot>
      ))}
    </PrioritySliderContainer>
  );
};

export const MenuItem = React.forwardRef(({ title, onClose, priority, setPriority, ...rest }, ref) => {
  return (
    <DraggableItemContainer {...rest} ref={ref}>
      <MenuItemDiv>
        <CloseButton onClick={onClose}>x</CloseButton>
        <Title>{title}</Title>
        <PrioritySlider priority={priority} setPriority={setPriority} />
      </MenuItemDiv>
    </DraggableItemContainer>
  );
});
