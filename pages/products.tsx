import { ChangeEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import ProductTile from "@/components/ProductTile";
import useTranslation from "next-translate/useTranslation";

export type IProduct = {
  id: number;
  cathegory: "indoor" | "outdoor";
  title: string;
  description: string;
  img: string;
  imgList: string[];
};

const products: IProduct[] = [
  {
    id: 101,
    cathegory: "indoor",
    title: "kwietnik 1",
    description: "opis 1",
    img: "/products/kwietnik001/kwietnik001.png",
    imgList: [],
  },
  {
    id: 102,
    cathegory: "outdoor",
    title: "kwietnik balkonowy 01",
    description: "opis 2",
    img: "/products/balkon001/balkon-1-001.png",
    imgList: ["/products/balkon001/balkon-1-001.png",],
  },
  {
    id: 103,
    cathegory: "outdoor",
    title: "kwietnik balkonowy 02",
    description: "opis 3",
    img: "/products/balkon002/balkon-2-mini.png",
    imgList: ["/products/balkon002/balkon-2-001.png", "/products/balkon002/balkon-2-002.png"],
  },
  {
    id: 104,
    cathegory: "outdoor",
    title: "donica tarasowa",
    description: "opis 3",
    img: "/products/taras001/taras-donice1-mini.png",
    imgList: ["/products/taras001/taras-donice1-001.png", "/products/taras001/taras-donice1-002.png"],
  },
  {
    id: 105,
    cathegory: "indoor",
    title: "produkt 4",
    description: "opis 4",
    img: "/products/kwietnik001/kwietnik001.png",
    imgList: [],
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
