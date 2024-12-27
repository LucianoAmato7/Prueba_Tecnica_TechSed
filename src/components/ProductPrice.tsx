import { ProductPriceProps } from "@/types/interfaces/interfaces";
import { formatPrice } from "@/utils/formatPrice";

export default function ProductPrice({ price, listingPrice }: ProductPriceProps) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className={`text-2xl font-bold ${!listingPrice && "mb-7"}`}>
          {formatPrice(price)}
        </span>
        {listingPrice && (
          <>
            <span className="text-sm text-white bg-blue-500 py-1 px-2 rounded-xl">
              {Math.round(((listingPrice - price) / listingPrice) * 100)}% OFF
            </span>
          </>
        )}
      </div>
      {listingPrice && (
        <div className="text-base text-gray-500">
          <span className="line-through">{formatPrice(listingPrice)}</span>
        </div>
      )}
    </div>
  );
};
