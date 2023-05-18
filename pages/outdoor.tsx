import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import ProductGalery from "@/components/ProductGalery";
import { products } from "./products";

const Outdoor = () => {
  const { t } = useTranslation("common");
  const outdoorProducts = products.filter(
    (product) => product.cathegory === "outdoor"
  );
  return (
    <PageWrapper>
      <h4 className="underline">{t("outdoorProducts")}</h4>
      <section className="section-container">
        <Image src="/outdoor.png" width={200} height={100} alt="" />
        <div>
          <p>{t("outdoorText1")}</p>
          <p>{t("outdoorText2")}</p>
        </div>
      </section>
      <section className="section-container">
        <div>
          <p>{t("outdoorText3")}</p>
          <p>{t("outdoorText4")}</p>
        </div>
        <Image src="/outdoor.png" width={200} height={100} alt="" />
      </section>
      <h5 className="underline subtitle">Zobacz nasze produkty zewnętrzne</h5>
      <ProductGalery products={outdoorProducts} />
    </PageWrapper>
  );
};

export default Outdoor;
