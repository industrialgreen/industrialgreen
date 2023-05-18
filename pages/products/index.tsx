import { ChangeEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import ProductTile from "@/components/ProductTile";
import useTranslation from "next-translate/useTranslation";

export type IProduct = {
  id: string;
  cathegory: "indoor" | "outdoor";
  title: string;
  description: string;
  material: string;
  totalDimensions: string;
  potterDimensions: string;
  inside: string;
  orderTime: string;
  img: string;
  imgList: string[];
};

export const products: IProduct[] = [
  {
    id: "101",
    cathegory: "indoor",
    title: "kwietnik wewnętrzny 01",
    description: "Kwietnik wewnętrzny wykonany z metalu. Posiada trzy doniczki zamocowane na sześciu metalowych lamelach. Doskonale sprawdza się w organizacji roślin pnących, które swobodnie zwisając tworzą zielone kaskady. Produkt wykonywany na indywidualne zamówienie, istnieje możliwość dostosowania wymiarów pod konkreny wymiar klienta. Długość donczek wewnętrznych dostępna co 10cm",
    material: "lamele 6 szt - profil stalowy 20mm x 30mm, osłony 3szt - blacha stalowa, malowane proszkowo",
    totalDimensions: "160cm x 65cm x 20cm (wys x dł x gł)",
    potterDimensions: "14cm x 50cm x 18cm, 14cm x 40cm x 18cm, 14cm x 30cm x 18cm (wys x dł x gł)",
    inside: "doniczka z podstawką z tworzywa sztucznego, kolor: czarny, szary lub zielony",
    orderTime: "7-14 dni",
    img: "/products/kwietnik001/kwietnik-1-min.png",
    imgList: ["/products/kwietnik001/kwietnik-1001.png"],
  },
  {
    id: "102",
    cathegory: "outdoor",
    title: "kwietnik balkonowy 01",
    description: "Kwietnik balkonowy wykonany z metalu. Posiada cztery doniczki i ławkę. Wyposażony w żyłki ułatwiające prowadzenie roślin pnących, tworząc z czasem zieloną ścianę na Twoim balkonie. Produkt wykonywany na indywidualne zamówienie, pod konkretny wymiar klienta. Długość doniczek wewnętrznych dostępna co 10cm",
    material: "profil stalowy 20mm x 30mm, blacha stalowa, malowane proszkowo",
    totalDimensions: "265cm x 132cm x 20cm (wys x dł x gł)",
    potterDimensions: "2 szt: 14cm x 70cm x 18cm, 2szt: 14cm x 60cm x 18cm (wys x dł x gł)",
    inside: "doniczka z podstawką z tworzywa sztucznego, kolor: czarny, szary lub zielony",
    orderTime: "7-14 dni",
    img: "/products/balkon001/balkon-1-min.png",
    imgList: ["/products/balkon001/balkon-1001.png", "/products/balkon001/balkon-1002.png", "/products/balkon001/balkon-1003.png", "/products/balkon001/balkon-1004.png"],
  },
  {
    id: "103",
    cathegory: "outdoor",
    title: "kwietnik balkonowy 02",
    description: "Kwietnik balkonowy wykonany z metalu. Posiada cztery doniczki i ławkę z oparciem. Wyposażony w żyłki ułatwiające prowadzenie roślin pnących, tworząc z czasem zieloną ścianę na Twoim balkonie. Produkt wykonywany na indywidualne zamówienie, pod konkretny wymiar klienta. Długość doniczek wewnętrznych dostępna co 10cm",
    material: "profil stalowy 20mm x 30mm, blacha stalowa, malowane proszkowo",
    totalDimensions: "265cm x 132cm x 20cm (wys x dł x gł)",
    potterDimensions: "2 szt: 14cm x 70cm x 18cm, 2szt: 14cm x 60cm x 18cm (wys x dł x gł)",
    inside: "doniczka z podstawką z tworzywa sztucznego, kolor: czarny, szary lub zielony",
    orderTime: "7-14 dni",
    img: "/products/balkon002/balkon-2-min.png",
    imgList: ["/products/balkon002/balkon-2001.png", "/products/balkon002/balkon-2002.png"],
  },
  {
    id: "104",
    cathegory: "outdoor",
    title: "kwietnik balkonowy 03",
    description: "Kwietnik balkonowy wykonany z metalu. Posiada cztery doniczki. Wyposażony w żyłki ułatwiające prowadzenie roślin pnących, tworząc z czasem zieloną ścianę na Twoim balkonie. Produkt wykonywany na indywidualne zamówienie, pod konkretny wymiar klienta. Długość doniczek wewnętrznych dostępna co 10cm",
    material: "profil stalowy 20mm x 30mm, blacha stalowa, malowane proszkowo",
    totalDimensions: "265cm x 132cm x 20cm (wys x dł x gł)",
    potterDimensions: "2 szt: 14cm x 70cm x 18cm, 2szt: 14cm x 60cm x 18cm (wys x dł x gł)",
    inside: "doniczka z podstawką z tworzywa sztucznego, kolor: czarny, szary lub zielony",
    orderTime: "7-14 dni",
    img: "/products/balkon003/balkon-3-min.png",
    imgList: ["/products/balkon003/balkon-3001.png", "/products/balkon003/balkon-3002.png", "/products/balkon003/balkon-3003.png", "/products/balkon003/balkon-3004.png"],
  },
  {
    id: "105",
    cathegory: "outdoor",
    title: "donica tarasowa",
    description: "opis 3",
    material: "profil stalowy 20mm x 30mm, blacha stalowa, malowane proszkowo",
    totalDimensions: "",
    potterDimensions: "",
    inside: "doniczka z podstawką z tworzywa sztucznego, kolor: czarny, szary lub zielony",
    orderTime: "7-14 dni",
    img: "/products/taras001/taras-donice1-min.png",
    imgList: ["/products/taras001/taras-donice1-001.png", "/products/taras001/taras-donice1-002.png"],
  },
  {
    id: "106",
    cathegory: "indoor",
    title: "produkt 4",
    description: "opis 4",
    material: "profil stalowy 20mm x 30mm, blacha stalowa, malowane proszkowo",
    totalDimensions: "",
    potterDimensions: "",
    inside: "doniczka z podstawką z tworzywa sztucznego, kolor: czarny, szary lub zielony",
    orderTime: "7-14 dni",
    img: "/products/kwietnik001/kwietnik-1-min.png",
    imgList: ["/products/kwietnik001/kwietnik-1001.png"],
  },
  {
    id: "107",
    cathegory: "indoor",
    title: "produkt 4",
    description: "opis 4",
    material: "profil stalowy 20mm x 30mm, blacha stalowa, malowane proszkowo",
    totalDimensions: "",
    potterDimensions: "",
    inside: "doniczka z podstawką z tworzywa sztucznego, kolor: czarny, szary lub zielony",
    orderTime: "7-14 dni",
    img: "/products/kwietnik001/kwietnik-1-min.png",
    imgList: ["/products/kwietnik001/kwietnik-1001.png"],
  },
  {
    id: "108",
    cathegory: "indoor",
    title: "produkt 4",
    description: "opis 4",
    material: "profil stalowy 20mm x 30mm, blacha stalowa, malowane proszkowo",
    totalDimensions: "",
    potterDimensions: "",
    inside: "doniczka z podstawką z tworzywa sztucznego, kolor: czarny, szary lub zielony",
    orderTime: "7-14 dni",
    img: "/products/kwietnik001/kwietnik-1-min.png",
    imgList: ["/products/kwietnik001/kwietnik-1001.png"],
  },
];

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};
const tile = {
  hidden: { opacity: 1, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Products = () => {
  const { t } = useTranslation("common");
  const [type, setType] = useState("all");
  const [productList, setProductList] = useState(products);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedType = e.target.value;
    setType(selectedType);
    if (selectedType === "all") {
      setProductList(products);
    } else {
      setProductList(
        products.filter((product) => product.cathegory === selectedType)
      );
    }
  };

  return (
    <PageWrapper>
      <div className="products-filters">
        <p>{t("show")}</p>
        <form>
          <input
            type="radio"
            name="filters"
            value="all"
            id="all"
            onChange={handleChange}
            checked={type === "all"}
          />
          <label htmlFor="all">{t("all")}</label>
          <input
            type="radio"
            name="filters"
            value="indoor"
            id="indoor"
            onChange={handleChange}
            checked={type === "indoor"}
          />
          <label htmlFor="indoor">{t("indoor")}</label>
          <input
            type="radio"
            name="filters"
            value="outdoor"
            id="outdoor"
            onChange={handleChange}
            checked={type === "outdoor"}
          />
          <label htmlFor="outdoor">{t("outdoor")}</label>
        </form>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="products-container"
      >
        {productList.map((item) => (
          <motion.div key={item.id} variants={tile}>
            <ProductTile product={item} />
          </motion.div>
        ))}
      </motion.div>
    </PageWrapper>
  );
};

export default Products;
