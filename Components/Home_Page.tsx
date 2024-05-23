import { PRODUCT_CATEGORY } from "@/Interface/Interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home_Page = () => {
  const productArray: PRODUCT_CATEGORY[] = [
    {
      title: "Women's Cloth",
      subtitile: "Women's Wear",
      startPrice: 100,
      redirectURL: "/Product/women's clothing",
      image:
        "https://img.freepik.com/free-photo/women-posing-with-paper-bags_23-2147688781.jpg?t=st=1716434511~exp=1716438111~hmac=d9b0cf35d3bbcf05d4e39bc33d934fa5742805541c4204eed7b52d577c41dc99&w=740",
    },
    {
      title: "Men's Cloth",
      subtitile: "Men's Wear",
      redirectURL: "/Product/men's clothing",
      startPrice: 100,
      image:
        "https://img.freepik.com/free-photo/front-view-male-denim-holding-bags_23-2148316208.jpg?t=st=1716434566~exp=1716438166~hmac=63c4c539a89305257a0e546bb669b22e26f297c52154768f56dfd595a62dd29b&w=740",
    },
    {
      title: "Electronics",
      subtitile: "Electronics items",
      redirectURL: "/Product/electronics",
      startPrice: 100,
      image:
        "https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?t=st=1716434703~exp=1716438303~hmac=c93fdb92df20cd00e0a6dbd717cd9377b78158ce2cb5c34c75a3bb0446075355&w=740",
    },
    {
      title: "Jwellery ",
      subtitile: "Jwellery",
      redirectURL: "/Product/jewelery",
      startPrice: 100,
      image:
        "https://img.freepik.com/free-photo/beautiful-engagement-ring-with-diamonds_23-2149509236.jpg?t=st=1716434633~exp=1716438233~hmac=23e8a2b2f7cd6ddee0278e6d4c15fe0833a39c30f89c6cec0072a264aa10d091&w=740",
    },
  ];
  return (
    <>
      <section
        className="bg-cover bg-center h-screen bg-opacity-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511733897353-5b04f82435a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="container mx-auto px-6 py-32 text-center text-white">
          <h1 className="text-3xl md:text-8xl font-extrabold">
            Welcome to ShopiFy
          </h1>
          <p className="mt-4 text-xl">
            Find the best products at unbeatable prices
          </p>
          <Link
            href={"/Product"}
            className=" mt-20 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope font-bold text-4xl text-black mb-8 max-xl:text-center">
            New Arrivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {productArray.map((e: PRODUCT_CATEGORY, ind: number) => {
              return (
                <Link
                  href={e.redirectURL}
                  className="relative bg-cover group rounded-3xl bg-center w-64 overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer"
                  key={ind}
                >
                  <Image
                    width={200}
                    height={200}
                    src={e.image}
                    alt="printed top image"
                    className="w-full"
                  />
                  <div className="absolute z-10  bottom-2 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                    <div className="flex items-center justify-between mb-2">
                      <h6 className="font-semibold text-base leading-7 text-black ">
                        {e.title}
                      </h6>
                      <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                        $100
                      </h6>
                    </div>
                    <p className="text-xs leading-5 text-gray-500">
                      {e.subtitile}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home_Page;
