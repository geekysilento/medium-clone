import { Head } from "next/document"
import Header from "@/components/Header"
import Mainbox from "@/components/Mainbox"

export default function Home() {
  return (
    <div className="header">
      <Header />
      <Mainbox />

      
    </div>
  )
}
