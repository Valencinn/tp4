import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProductById, getProductsByCategory } from "@/lib/products";
import ProductGrid from "@/components/ProductGrid";

export const dynamic = "force-dynamic";

function getImageSrc(image) {
    if (!image) return null;
    if (image.startsWith("/")) return image;
    return `/images/products/${image}`;
}

export default async function ProductPage({ params }) {
    const { id } = await params;
    const product = await getProductById(id);

    if (!product) {
        notFound();
    }

    //productos relacionados x categoria
    const relatedProducts =
        product.categories?.length > 0
            ? (
                await getProductsByCategory(product.categories[0]._id ?? product.categories[0])
            ).filter((p) => p._id !== product._id).slice(0, 3)
            : [];

    const imageSrc = getImageSrc(product.image);

    return (
        <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
            <div className="mx-auto max-w-6xl">
                <Link
                    className="text-sm font-medium text-emerald-700 hover:text-emerald-900"
                    href="/"
                >
                    ← Volver al catálogo
                </Link>

                {/*producto en detalle*/}
                <div className="mt-6 grid gap-8 lg:grid-cols-2">
                    {/* imagen */}
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-100">
                        {imageSrc ? (
                            <Image
                                alt={product.name}
                                className="object-cover"
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                src={imageSrc}
                            />
                        ) : (
                            <div className="flex h-full items-center justify-center text-slate-400">
                                Sin imagen
                            </div>
                        )}
                    </div>

                    {/* informacion */}
                    <div className="flex flex-col">
                        {/*categorias */}
                        {product.categories?.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {product.categories.map((cat) => {
                                    const catId = cat._id ?? cat;
                                    const catName = cat.name ?? cat;
                                    return (
                                        <Link
                                            key={catId}
                                            href={`/category/${catId}`}
                                            className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 hover:bg-emerald-100"
                                        >
                                            {catName}
                                        </Link>
                                    );
                                })}
                            </div>
                        )}

                        <h1 className="mt-3 text-3xl font-bold text-slate-900">
                            {product.name}
                        </h1>

                        <p className="mt-4 text-2xl font-semibold text-emerald-700">
                            ${product.price.toFixed(2)}
                        </p>

                        <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                            {product.description || "Sin descripción."}
                        </p>

                        <p className="mt-4 text-sm text-slate-500">
                            Stock disponible:{" "}
                            <span
                                className={
                                    product.stock > 0 ? "text-emerald-700 font-medium" : "text-red-500 font-medium"
                                }
                            >
                                {product.stock > 0 ? product.stock : "Sin stock"}
                            </span>
                        </p>

                        {/* Acciones */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <button
                                disabled={product.stock === 0}
                                className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors"
                            >
                                Agregar al carrito
                            </button>
                            <button className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
                                ♡ Agregar a favoritos
                            </button>
                        </div>
                    </div>
                </div>

                {/*productos de la misma categroria*/}
                {relatedProducts.length > 0 && (
                    <section className="mt-16">
                        <h2 className="mb-6 text-xl font-semibold text-slate-900">
                            Productos relacionados
                        </h2>
                        <ProductGrid products={relatedProducts} />
                    </section>
                )}
            </div>
        </main>
    );
}