import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";
import { IMAGE_PATHS } from "@/utils/constants";
import StockStatus from "@/components/StockStatus";
import ProductPrice from "@/components/ProductPrice";

export default function ProductMenu() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold">Nuestros Productos</h1>
      </div>

      {/* Recorre y una grilla de productos a partir de un archivo JSON */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white shadow-md rounded-md"
          >
            <div className="relative">
              {product.listingPrice && (
                <Image
                  src={IMAGE_PATHS.BLACK_AL_COSTO.url}
                  alt={IMAGE_PATHS.BLACK_AL_COSTO.alt}
                  width={120}
                  height={120}
                  className="absolute left-2 top-2 z-10"
                />
              )}
              <div className="aspect-square">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="object-cover rounded-t-md"
                />
              </div>
            </div>
            <div className="flex flex-col p-4 justify-between flex-1 space-y-3">
              <h2 className="line-clamp-2 text-lg font-semibold">
                {product.title}
              </h2>
              <ProductPrice
                price={product.price}
                listingPrice={product.listingPrice}
              />
              <StockStatus stock={product.stock} />
            </div>
            <div className="p-4 pt-0">
              {/* Renderiza un botón que redirige a la página de detalle del producto */}
              <Link href={`/${product.id}`} className="w-full">
                <button className="w-full bg-black text-white py-2 rounded-md shadow-lg">
                  Ver detalle
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
