import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import BuyCrypto from "../components/BuyCrypto";

const Crypto = () => {
  const [open, setOpen] = useState(false);
  const [buy, setBuy] = useState(false);
  const [cryptoCoin, setCryptoCoin] = useState({});
  const columns = [
    {
      field: "id",
      headerName: "Id",
      width: 100,
      renderCell: (params) => {
        return <div className="">{params.row.id}</div>;
      },
    },
    {
      field: "currency",
      headerName: "Currency",
      width: 600,
      renderCell: (params) => {
        return (
          <div className="currencyContainer">
            <div className="imgContainer">
              <img className="img" src={params.row.img} alt="" />
            </div>
            <div className="currencyInfo">
              <span className="symbol">{params.row.symbol}</span>
              <span className="title">{params.row.title}</span>
            </div>
          </div>
        );
      },
    },
    { field: "price", headerName: "Price", width: 400 },

    {
      field: "action",
      headerName: "",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <button
              onClick={() => {
                setBuy((prev) => !prev);
                setCryptoCoin(params.row);
                setOpen(true);
              }}
              className="btn"
            >
              Buy
            </button>
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=018",
      symbol: "BTC",
      title: "Bitcoin",
      price: "10",
    },
    {
      id: 2,
      img: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=018",
      symbol: "ETH",
      title: "Ethereum",
      price: "10",
    },
    {
      id: 3,
      img: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=018",
      symbol: "BNB",
      title: "Binance Coin",
      price: "10",
    },
    {
      id: 4,
      img: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=018",
      symbol: "USDT",
      title: "Tether",
      price: "10",
    },
    {
      id: 5,
      img: "https://cryptologos.cc/logos/uniswap-uni-logo.png?v=018",
      symbol: "UNI",
      title: "Uniswap",
      price: "10",
    },
    {
      id: 6,
      img: "https://cryptologos.cc/logos/crypto-com-coin-cro-logo.png?v=018",
      symbol: "CRO",
      title: "Crypto.com",
      price: "10",
    },
    {
      id: 7,
      img: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=018",
      symbol: "SHIB",
      title: "Shiba Inu",
      price: "10",
    },
    {
      id: 8,
      img: "https://cryptologos.cc/logos/avalanche-avax-logo.png?v=018",
      symbol: "AVAX",
      title: "Avalanche",
      price: "10",
    },
    {
      id: 9,
      img: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=018",
      symbol: "ADA",
      title: "Cardano",
      price: "10",
    },
    {
      id: 10,
      img: "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=018",
      symbol: "DOGE",
      title: "Dogecoin",
      price: "10",
    },
  ];

  return (
    <div style={{ position: "relative" }}>
      <div className="crypto">
        <h2>Top cryptocurrencies</h2>
        <DataGrid
          className="dataGrid"
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>

      {buy && <BuyCrypto open={open} close={setOpen} cryptoCoin={cryptoCoin} />}
    </div>
  );
};

export default Crypto;
