"use client";

import Image from "next/image";

const Home = () => {
  return (
    <div className="p-5">
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="Até 55% de deseconto esse mês!"
      />
    </div>
  );
};

export default Home;
