"use client";
import Image from "next/image";
import products from "@/data/products.json";
import { IMAGE_PATHS } from "@/utils/constants";
import StockStatus from "@/components/StockStatus";
import ProductPrice from "@/components/ProductPrice";
import CartSummary from "@/components/CartSummary";
import { useState, use } from "react";
import { Cart } from "@/types/cart";
import { Product } from "@/types/product";
import ProductQuantity from "@/components/ProductQuantitySelector";

export default function ProductDetail({
  params,
}: {
  params: Promise<{ productID: string }>;
}) {

  const [cart, setCart] = useState<Cart>({
    id: "cart1",
    items: [],
    createdAt: new Date(),
  });

  const actualParams = use(params);
  const productID = actualParams.productID;
  const product = products.find((p) => p.id.toString() === productID) as Product;

  const addToCart = (product: Product, quantity: number) => {
    if (product.stock < quantity) {
      console.error(`Stock insuficiente para el producto: ${product.title}`);
      return;
    }
    
    if(quantity > 0){
        setCart((prevCart) => {
          const existingProductIndex = prevCart.items.findIndex(
            (item) => item.product.id === product.id
          );
          
          if (existingProductIndex >= 0) {
            const updatedItems = [...prevCart.items];
            updatedItems[existingProductIndex].quantity = quantity;
            return { ...prevCart, items: updatedItems };
          } else {
            return {
              ...prevCart,
              items: [...prevCart.items, { product, quantity }],
            };
          }
        });
    }
  };
  

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.filter((item) => item.product.id !== productId),
    }));
  };

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

              <ProductQuantity
                product={product}
                cart={cart}
                AddToCartModifier={(quantity) => addToCart(product, quantity)}
                removeFromCartModifier={(productID) => removeFromCart(productID)}
              />

            </div>
          </div>

          <CartSummary cart={cart} />
        </div>
      )}
    </>
  );
}
