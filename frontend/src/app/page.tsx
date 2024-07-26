import Modal from "@/ui/Modal"

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
      <Modal onConfirm={onConfirm} onDeny={onDeny}>
        <p>
          Are you sure you want to withdraw from the event?
        </p>
      </Modal>
    </div>
  );
}
