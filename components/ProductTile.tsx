import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import { IProduct } from "@/pages/products";

type IProps = {
    product: IProduct
}

const ProductTile = ({product} : IProps) => {
    const {title, img} = product

  return (
    <div className="product-tile">
        <img src={img}  alt="kwietnik"/>
        <p>{title}</p>
    </div>
  );
};

export default ProductTile;
