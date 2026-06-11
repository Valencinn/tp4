import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/products";
import { Check } from "lucide-react";

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
        <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl text-center">Build your own
          <span className="bg-green-600 px-2 text-white">Custom</span> Mousepad</h1>
        <p className="mt-8 text-lg max-w-prose mx-auto text-center">
          Design your own, <span className="font-semibold"> one-of-one</span> mousepad.
        </p>

        <ul className="mt-8 space-y-2 font-medium flex flex-col items-center">
          <div className="space-y-2">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 shrink-0 text-green-600" />
              High quality, durable material
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 shrink-0 text-green-600" />
              90 days guarantee
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 shrink-0 text-green-600" />
              Best tech up to date
            </li>
          </div>
        </ul>

        <div className="mt-12 flex justify-center items-center -space-x-4">
          <img className="h-10 w-10 rounded-full ring-2 ring-slate-100" src="/images/users/user-1.png" alt="" />
          <img className="h-10 w-10 rounded-full ring-2 ring-slate-100" src="/images/users/user-2.png" alt="" />
          <img className="h-10 w-10 rounded-full ring-2 ring-slate-100" src="/images/users/user-3.png" alt="" />
          <img className="h-10 w-10 rounded-full ring-2 ring-slate-100" src="/images/users/user-4.jpg" alt="" />
          <img className="h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover" src="/images/users/user-5.jpg" alt="" />
        </div>
        {/* <ProductGrid products={products} /> */}
      </div>
    </main>
  );
}
