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
    <div className="container mx-auto px-4 py-6">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative overflow-hidden bg-gray-100">

          {product.listingPrice && (
            <Image
            src={IMAGE_PATHS.BLACK_AL_COSTO.url}
            alt={IMAGE_PATHS.BLACK_AL_COSTO.alt}
            width={500}
            height={500}
            className="absolute left-3 top-3 z-10 w-36"
            />
          )}

          <div className="aspect-square">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="text-sm text-gray-500 ">SKU: 0000</div>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <StockStatus stock={product.stock} />
          </div>

          <ProductPrice 
            price={product.price} 
            listingPrice={product.listingPrice} 
          />

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Cantidad de unidades</label>
              <div className="mt-1 flex items-center gap-4">
                <div className="w-32 rounded-md border px-3 py-2">
                  unidades
                </div>
                <span className="text-sm text-gray-500">unidades</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Cantidad de pallets</label>
              <div className="mt-1 flex items-center gap-4">
                <button
                  // onClick={() => handlePalletChange(-1)}
                  // disabled={pallets <= 1}
                >
                    -
                </button>
                <div className="w-16 text-center">pallets</div>
                <button
                  // onClick={() => handlePalletChange(1)}
                >
                    +
                </button>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            {product.description}
          </div>

          <div className="space-y-4 text-xl font-bold">
            <button className="w-2/3 bg-blue-900 hover:bg-blue-700 text-white py-4 rounded-e-full rounded-s-full shadow-lg">
              Comprar ahora
            </button>
            <button className="w-2/3 text-blue-900 border-2 border-blue-900 py-4 shadow-lg flex items-center rounded-e-full rounded-s-full justify-center gap-2">
              Agregar
              <IoCartOutline className="text-2xl"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

