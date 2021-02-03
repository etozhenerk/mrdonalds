import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Modal = styled.div`
  text-align: center;
  background-color: #ffffff;
  width: 600px;
  height: 600px;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  margin-bottom: 20px;
`;

const ModalDescr = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {
  const closeModal = (e) => {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  };

  if (!openItem) return null;
  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <ModalDescr>
          <h2>{openItem.name}</h2>
          <h2>
            {openItem.price.toLocaleString("ru-Ru", {
              style: "currency",
              currency: "RUB",
            })}
          </h2>
        </ModalDescr>
        <Button>Добавить</Button>
      </Modal>
    </Overlay>
  );
};
