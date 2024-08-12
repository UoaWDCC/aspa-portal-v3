'use client'

import Modal from "@/ui/Modal"
import Button from "@/ui/TestButton"
import { useState } from "react"

export default function App() {

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
    console.log(showModal);
  };

  async function onDeny() {
    console.log("Deny was clicked")
    setShowModal(false)
  }

  async function onConfirm() {
    console.log("Confirm was clicked")
    setShowModal(false)
  }

  return (
    <div>
      <Button handleClick={toggleModal}/>
      <Modal showModal={showModal} onConfirm={onConfirm} onDeny={onDeny}>
        <p>
          You have added a new Member!
        </p>
      </Modal>
    </div>
  );
}
