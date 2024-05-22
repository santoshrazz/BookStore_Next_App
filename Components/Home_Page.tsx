import Link from "next/link";
import React from "react";

const Home_Page = () => {
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
          <h1 className="text-8xl font-extrabold">Welcome to ShopiFy</h1>
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
            <Link
              href={`/Product/electronics`}
              className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1501&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Jacket image"
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-black ">
                    Electronics
                  </h6>
                  <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                    $100
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">
                  Women's Winter Wear
                </p>
              </div>
            </Link>
            <Link
              href={`/Product/jewelery`}
              className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer"
            >
              <img
                src="	https://images.unsplash.com/photo-1586104237516-5b7075e00d45?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blazer image"
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-black ">
                    jewelery
                  </h6>
                  <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                    $100
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">Men’s Suits</p>
              </div>
            </Link>
            <Link
              href={`/Product/women's clothing`}
              className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer"
            >
              <img
                src="	https://pagedone.io/asset/uploads/1700732011.png"
                alt="printed top image"
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-black ">
                    Women's Cloths
                  </h6>
                  <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                    $100
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">Womenswear</p>
              </div>
            </Link>

            <Link
              href={`/Product/men's clothing`}
              className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer"
            >
              <img
                src="https://pagedone.io/asset/uploads/1700732027.png"
                alt="Denim jacket image"
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-black ">
                    Men's Cloth
                  </h6>
                  <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                    $100
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">
                  Trending Men's Wear
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home_Page;
