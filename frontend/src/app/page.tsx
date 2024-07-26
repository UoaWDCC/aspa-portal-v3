import Modal from "@/ui/Modal"
import Button from "@/ui/TestButton"

export default function App() {
  async function onDeny() {
    'use server'
    console.log("Deny was clicked")
  }

  async function onConfirm() {
    'use server'
    console.log("Confirm was clicked")
  }

  return (
    <div>
      <Button />
      <Modal onConfirm={onConfirm} onDeny={null}>
        <p>
          You have added a new Member!
        </p>
      </Modal>
    </div>
  );
}
