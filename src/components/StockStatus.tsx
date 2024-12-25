import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

interface StockStatusProps {
  stock: number;
}

const StockStatus: React.FC<StockStatusProps> = ({ stock }) => {

  return (
    <div className="flex row align-center gap-1 items-center">
      {stock > 0 ? (
        <>
          <FaRegCheckCircle className="text-green-400" />
          <span>Stock disponible</span>
        </>
      ) : (
        <>
          <MdOutlineCancel className="text-red-400" />
          <span>Sin stock</span>
        </>
      )}
    </div>
  );
};

export default StockStatus;
