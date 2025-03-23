import CategoryTab from "@/components/CategoryTab";
import Hero from "@/components/Hero";

import Image from "next/image";

export default function Home() {
  return (
    <div className="">
        <Hero  />
        <div className="pt-6 px-4">
           <CategoryTab  />
        </div>
    </div>
  );
}
