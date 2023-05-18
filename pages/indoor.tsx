import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import ProductGalery from "@/components/ProductGalery";
import { products } from "./products";

const Indoor = () => {
  const { t } = useTranslation("common");
  const indoorProducts = products.filter(
    (product) => product.cathegory === "indoor"
  );
  return (
    <PageWrapper>
      <h4 className="underline">{t("indoorProducts")}</h4>
      <section className="section-container">
        <Image src="/indoor.png" width={200} height={100} alt="" />
        <div>
          <p>{t("indoorText1")}</p>
          <p>{t("indoorText2")}</p>
          <p>{t("indoorText3")}</p>
        </div>
      </section>
      <h5 className="underline subtitle">Zobacz nasze produkty wewnętrzne</h5>
      <ProductGalery products={indoorProducts} />
    </PageWrapper>
  );
};

export default Indoor;
