import Modal from "@/ui/Modal"

export default function App() {
  async function onClose() {
    'use server'
    console.log("Modal has closed")
  }

  async function onOk() {
    'use server'
    console.log("Ok was clicked")
  }

  return (
    <div>
      <Modal title="Example Modal" onClose={onClose} onOk={onOk}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Modal>
    </div>
  );
}
