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
};

const products: IProduct[] = [
  {
    id: 101,
    cathegory: "indoor",
    title: "kwietnik 1",
    description: "opis 1",
    img: "/products/kwietnik001/kwietnik001.png",
  },
  {
    id: 102,
    cathegory: "outdoor",
    title: "lawka 1",
    description: "opis 2",
    img: "/products/kwietnik001/kwietnik001.png",
  },
  {
    id: 103,
    cathegory: "outdoor",
    title: "lawka 2",
    description: "opis 3",
    img: "/products/kwietnik001/kwietnik001.png",
  },
  {
    id: 104,
    cathegory: "indoor",
    title: "produkt 3",
    description: "opis 3",
    img: "/products/kwietnik001/kwietnik001.png",
  },
  {
    id: 105,
    cathegory: "indoor",
    title: "produkt 4",
    description: "opis 4",
    img: "/products/kwietnik001/kwietnik001.png",
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
