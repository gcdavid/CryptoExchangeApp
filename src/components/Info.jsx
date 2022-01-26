import { useSelector } from "react-redux";
import "../App.css";

const Info = () => {
  const coinWallet = useSelector((state) => state.crypto.coins);
  const total = useSelector((state) => state.crypto.total);

  return (
    <div className="info">
      <div className="infoWrapper">
        <div className="infoContainer">
          <h5 className="infoTitle">Number of Cryptpo Coins Type</h5>
          <div className="infoQuantity">{coinWallet.length}</div>
        </div>

        <div className="infoContainer">
          <h5 className="infoTitle">Total Number of Crypto Coins</h5>
          <div className="infoQuantity">{total}</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
