import { StockStatusProps } from "@/types/interfaces/interfaces";
import Icons from "@/utils/icons";

export default function StockStatus({ stock }: StockStatusProps)  {
  return (
    <div className="flex row align-center gap-1 items-center">
      {stock > 0 ? (
        <>
          <Icons.CheckCircle className="text-green-400" />
          <span>Stock disponible</span>
        </>
      ) : (
        <>
          <Icons.Cancel className="text-red-400" />
          <span>Sin stock</span>
        </>
      )}
    </div>
  );
};
