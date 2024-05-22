import Image from "next/image";
import Navbar from "./components/Header/Navbar";
import "./styles/tailwind.css";
import Top from "./components/Main/Top";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Top />
    </div>
  );
}
