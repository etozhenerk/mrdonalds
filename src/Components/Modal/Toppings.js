import React from "react";
import styled from "styled-components";

const ToppingWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
  column-count: 2;
  column-gap: 15px;
`;

const ToppingLabel = styled.label`
  cursor: pointer;
  display: block;
`;

const ToppingCheckbox = styled.input`
  cursor: pointer;
  margin-right: 5px;
`;

export const Toppings = ({ toppings, checkToppings }) => {
  return (
    <>
      <h3>Добавки</h3>
      <ToppingWrap>
        {toppings.map((item, i) => (
          <ToppingLabel key={i}>
            <ToppingCheckbox onChange={() => checkToppings(i)} checked={item.checked} type="checkbox" />
            {item.name}
          </ToppingLabel>
        ))}
      </ToppingWrap>
    </>
  );
};
