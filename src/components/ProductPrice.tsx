interface ProductPriceProps {
  price: number;
  listingPrice?: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ price, listingPrice }) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">${price.toLocaleString()}</span>
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
          <span className="line-through">${listingPrice.toLocaleString()}</span>
        </div>
      )}
    </div>
  );
};

export default ProductPrice;
