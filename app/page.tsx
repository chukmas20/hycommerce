import CategoryTab from "@/components/CategoryTab";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductsGrid from "@/components/ProductsGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
        <Navbar  />
        <Hero  />
        <div className="pt-6 px-4">
           <CategoryTab  />
        </div>
        <Footer  />
    </div>
  );
}
