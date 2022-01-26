import { createSlice } from "@reduxjs/toolkit";

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    coins: [],
    total: 0,
  },
  reducers: {
    buy: (state, action) => {
      state.total += +action.payload.input;
      state.coins.length > 0
        ? state.coins.map((coin) => {
            if (coin.cryptoCoin.id === action.payload.cryptoCoin.id) {
              coin.input = +action.payload.input + +coin.input;
            } else {
              state.coins.push(action.payload);
            }
          })
        : state.coins.push(action.payload);
    },
    exchange: (state, action) => {
      state.coins = state.coins.filter(
        (coin) => +coin.cryptoCoin.id !== +action.payload.changeCoin
      );
      state.coins.push({
        cryptoCoin: action.payload.exchangeItem,
        input: action.payload.input,
      });
    },
  },
});

export const { buy } = cryptoSlice.actions;
export const { exchange } = cryptoSlice.actions;

export default cryptoSlice.reducer;
