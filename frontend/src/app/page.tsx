import Image from "next/image";
import styles from './index.module.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Form from "./components/Form";



export default function Home() {
  return (
    <>
      <NavBar />

      <Form />

      <Footer />
    </>
  );
}
