import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ProductsGrid from "./ProductsGrid"
import ClothesCategory from "./ClothesCategory"
import ShoesCategory from "./ShoesCategory"
import BagsCategory from "./BagsCategory"

export default function CategoryTab() {
  return (
    <Tabs defaultValue="all" className="w-full ">
      <TabsList className="grid w-full grid-cols-4 bg-red-200">
        <TabsTrigger value="all" className="cursor-pointer text-xs md:text-md">All Products</TabsTrigger>
        <TabsTrigger value="shoes" className="cursor-pointer text-xs md:text-md">Shoes</TabsTrigger>
        <TabsTrigger value="clothes" className="cursor-pointer text-xs md:text-md">Clothes</TabsTrigger>
        <TabsTrigger value="bags" className="cursor-pointer text-xs md:text-md">Bags</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
          <ProductsGrid  />
      </TabsContent>
      <TabsContent value="shoes">
           <ShoesCategory  />
      </TabsContent>
      <TabsContent value="clothes">
            <ClothesCategory />
      </TabsContent>
      <TabsContent value="bags">
            <BagsCategory />
      </TabsContent>
    </Tabs>
  )
}
