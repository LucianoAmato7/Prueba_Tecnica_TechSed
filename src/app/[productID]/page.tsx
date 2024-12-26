import Image from "next/image"
import products from "@/data/products.json";
import { IMAGE_PATHS } from "@/utils/constants";
import StockStatus from "@/components/StockStatus";
import ProductPrice from "@/components/ProductPrice";
import { IoCartOutline } from "react-icons/io5";

export default function ProductDetail({ params }: { params: { productID: string } }) {

  const productID = params.productID;
  const product = products.find((p) => p.id.toString() === productID);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-screen-md border border-gray-200 rounded-md shadow-md mt-12">
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="relative overflow-hidden">

          {product.listingPrice && (
            <Image
            src={IMAGE_PATHS.BLACK_AL_COSTO.url}
            alt={IMAGE_PATHS.BLACK_AL_COSTO.alt}
            width={150}
            height={150}
            className="absolute left-3 top-3 z-10"
            />
          )}

          <div className="aspect-square">
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={600}
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-6 w-full max-w-md">
          <div>
            <div className="text-sm text-gray-500 ">SKU: 0000</div>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <StockStatus stock={product.stock} />
          </div>

          <ProductPrice 
            price={product.price} 
            listingPrice={product.listingPrice} 
          />

          {/* ACA IRIA EL COMPONENTE DE CANTIDADES */}

          <div className="text-base text-gray-400 font-bold">
            {product.description}
          </div>

          <div className="space-y-4 text-xl font-bold flex flex-col items-center">
            <button className="w-full bg-blue-900 hover:bg-blue-700 text-white py-4 rounded-e-full rounded-s-full shadow-lg">
              Comprar ahora
            </button>
            <button className="w-full text-blue-900 border-2 border-blue-900 py-4 shadow-lg flex items-center rounded-e-full rounded-s-full justify-center gap-2">
              Agregar
              <IoCartOutline className="text-2xl"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

