import React from "react";
import firebase from 'firebase/app';
import 'firebase/auth';
import { NavBar } from "./Components/NavBar/NavBar";
import { Menu } from "./Components/Menu/Menu";
import { GlobalStyle } from "./Components/Styled/GlobalStyle";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Order/Order";
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";
import { useAuth } from "./Components/Hooks/useAuth";

const firebaseConfig = {
  apiKey: "AIzaSyB0Hf4Ox0tdUnTL3v3fOkI-B1Ph2oVo6ds",
  authDomain: "mrdonalds-5ac65.firebaseapp.com",
  databaseURL: "https://mrdonalds-5ac65-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonalds-5ac65",
  storageBucket: "mrdonalds-5ac65.appspot.com",
  messagingSenderId: "642866889181",
  appId: "1:642866889181:web:c3cdf73476192c5c8b7634"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const authFirebase = firebase.auth;
  const auth = useAuth(authFirebase);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth}/>
      <Order {...orders} {...openItem} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
