import SingleCryptoList from "./SingleCryptoList";
import { useSelector } from "react-redux";

const CryptoList = () => {
  const coins = useSelector((state) => state.crypto.coins);
  return (
    <div className="list">
      <h3 className="listTitle">Crypto Coins</h3>
      {coins.map((item, index) => (
        <SingleCryptoList item={item} key={index} />
      ))}
    </div>
  );
};

export default CryptoList;
