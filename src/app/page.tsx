import products from "@/data/products.json"
import Image from "next/image"
import Link from "next/link"

export default function ProductMenu() {
  const calculateDiscountedPrice = (price: number, discount: number) => {
    return price - (price * discount / 100)
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header with search and filters */}
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold">Nuestros Productos</h1>
      </div>

      {/* Products grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="relative">
              {product.listingPrice && (
                // <span className="absolute left-2 top-2 z-10 bg-black text-white hover:bg-black/90">
                //   BLACK AL COSTO
                // </span>
                  <Image
                  src="/images/alCosto.png"
                  alt="backAlCosto"
                  width={500}
                  height={500}
                  // className="h-full w-full object-cover"
                  className="absolute left-2 top-2 z-10 w-20"
                />
              )}
              <div className="aspect-square">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-3 p-4">
              <h2 className="line-clamp-2 text-lg font-semibold">{product.title}</h2>
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">
                    {/* ${calculateDiscountedPrice(product.listingPrice, product.price).toLocaleString()} */}
                    ${product.price.toLocaleString()}
                  </span>
                  {/* <Badge className="bg-blue-600">{product.discountPercentage}% OFF</Badge> */}
                </div>
                {product.listingPrice && (
                  <div className="text-sm text-muted-foreground">
                    <span className="line-through">${product.listingPrice.toLocaleString()}</span>
                  </div>
                )}
              </div>
              {product.stock > 0 ? (
                <span className="bg-green-100 text-green-800">
                  Stock disponible
                </span>
              ) : (
                <span className="bg-red-100 text-red-800">
                  Sin stock
                </span>
              )}
            </div>
            <div className="p-4 pt-0">
              <Link href={`/product/${product.id}`} className="w-full">
                <button className="w-full bg-black text-white py-2 rounded-md">
                  Ver detalle
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

