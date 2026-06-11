import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4"></div>
        <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start"></div>
        <div className="absolute w-28 left-0 -top-20 hidden lg:block">
          <img src="/snake-1.png" alt="Snake 1" className="w-full" />
        </div>
        <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">Build your own
          <span className="bg-green-600 px-2 text-white">Custom</span> keyboard</h1>
        <p className="mt-8 text-lg lg:pr-20 max-w-prose text-center lg:text-center text-balance md:text-wrap">
          Based on your preferences create your own, <span className="font-semibold"> one-of-one</span> keyboard.
        </p>
        <ProductGrid products={products} />
      </div>
    </main>
  );
}
