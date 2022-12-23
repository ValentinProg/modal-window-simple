import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Fotter from "./components/Fotter/Fotter";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      {openModal && <Modal closeModal={closeModal} />}
      <Header openModal={showModal} />
      <Main />
      <Fotter />
    </div>
  );
}

export default App;
