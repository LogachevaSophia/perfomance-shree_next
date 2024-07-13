import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import Image from "next/image";
import "../styles/reset.css"
import "../styles/styles.css"

export default function Home() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
