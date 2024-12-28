"use client";
import Image from "next/image";
import products from "@/data/products.json";
import { IMAGE_PATHS } from "@/utils/constants";
import StockStatus from "@/components/StockStatus";
import ProductPrice from "@/components/ProductPrice";
import CartSummary from "@/components/CartSummary";
import { useState, use, useEffect } from "react";
import { Cart } from "@/types/cart";
import { Product } from "@/types/product";
import ProductQuantitySelector from "@/components/ProductQuantitySelector";

export default function ProductDetail({
  params,
}: {
  params: Promise<{ productID: string }>;
}) {

  // Inicio el estado del carrito.
  const [cart, setCart] = useState<Cart>({
    id: "cart1",
    items: [],
    createdAt: new Date(),
  });

  // Recupero el carrito almacenado en localStorage.
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    } else {
      setCart({
        id: "cart1",
        items: [],
        createdAt: new Date(),
      });
    }
  }, []);
  
  // Guardo el carrito en localStorage cada vez que cambia.
  useEffect(() => {
    if (cart.items.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  

  // Recupero el producto a partir del ID recibido en los parámetros de la URL.
  const actualParams = use(params);
  const productID = actualParams.productID;
  const product = products.find(
    (p) => p.id.toString() === productID
  ) as Product;

  return (
    <>
      {!product ? (
        <div>Producto no encontrado</div>
      ) : (
        <div className="max-w-screen-lg mx-auto h-full flex flex-col gap-8 md:gap-20 items-center">
          <div className="container flex flex-col md:flex-row gap-10 justify-center items-center border border-gray-200 shadow-md rounded-md md:mt-7 px-4 py-3">
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
                  src={product.image.toString()}
                  alt={product.title}
                  width={450}
                  height={450}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-5 w-full max-w-md">
              <div>
                <div className="text-sm text-gray-500 ">SKU: {product.id}</div>
                <h1 className="text-xl font-bold">{product.title}</h1>
                <StockStatus stock={product.stock} />
              </div>

              <ProductPrice
                price={product.price}
                listingPrice={product.listingPrice}
              />

              <ProductQuantitySelector
                product={product}
                cart={cart}
                setCart={setCart}
              />
            </div>
          </div>

          <CartSummary cart={cart} />
        </div>
      )}
    </>
  );
}
