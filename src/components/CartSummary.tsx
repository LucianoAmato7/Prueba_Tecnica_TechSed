import { CartSummaryProps } from "@/interfaces/interfaces";
import { formatPrice } from "@/utils/formatPrice";
import Image from 'next/image'
import { IoCartOutline } from "react-icons/io5";

export default function CartSummary({ cart }: CartSummaryProps) {

  const total = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    
    <div className="w-full border border-gray-200 shadow-md rounded-md md:mb-6">
      <div className="p-4 flex items-center justify-between ">
        <h2 className="text-xl font-semibold">Carrito</h2>
        <IoCartOutline className="text-3xl" />
      </div>
      {cart && cart.items && cart.items.length > 0 ? (
        <div className="overflow-hidden">
          <div className="divide-y">
            {cart.items.map((item) => (
              <div key={item.product.id} className="p-4 flex items-center space-x-4">
                <div className="flex-shrink-0 w-16 h-16 relative">
                  <Image
                    src={item.product.image as string}
                    alt={item.product.title}
                    width={64}
                    height={64}
                    className="rounded-md aspect-square object-cover" 
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm font-medium">{item.product.title}</h3>
                  <p className="text-sm text-gray-500">
                  </p>
                  <p className="text-sm font-semibold mt-1">
                    {formatPrice(item.product.price)} x {item.quantity}
                  </p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className="text-sm font-semibold">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                  {item.product.listingPrice && (
                    <p className="text-xs text-gray-500 line-through">
                      {formatPrice(item.product.listingPrice * item.quantity)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-bold">{formatPrice(total)}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 text-center pb-12">
          <h2 className="text-lg font-semibold text-gray-400">El carrito está vacío</h2>
        </div>
      )}
    </div>
  );
};