import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

const Home = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div>
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        alt="Até 55% de deseconto esse mês!"
      />
      <div className="mt-8">
        <Categories />
      </div>

      <div className="mt-8">
        <p className="mb-2 pl-5 font-bold uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>

      <Image
        src="/banner-home-02.png"
        height={0}
        width={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        alt="Até 50% de desconto esse mês!"
      />
    </div>
  );
};

export default Home;
