// import { createSlice } from "@reduxjs/toolkit";

// export const cryptoSlice = createSlice({
//   name: "crypto",
//   initialState: {
//     coins: [],
//     total: 0,
//     quantity: 0,
//   },
//   reducers: {
//     buy: (state, action) => {
//       state.total += +action.payload.input;
//       state.coins.length > 0
//         ? state.coins.map((coin) => {
//             if (+coin.cryptoCoin.id === +action.payload.cryptoCoin.id) {
//               coin.input = +action.payload.input + +coin.input;
//             } else {
//               return state.coins.push({
//                 cryptoCoin: action.payload.cryptoCoin,
//                 input: +action.payload.input,
//               });
//             }
//           })
//         : state.coins.push(action.payload);
//     },
//     exchange: (state, action) => {
//       state.coins.filter((coin) => +coin.cryptoCoin.id !== +action.payload.changeCoin)
//       state.coins.map((coin) => {
//         if (+coin.input >= +action.payload.input) {
//           coin.input = +coin.input - +action.payload.input;
//           return (
//             {
//               ...state,
//               input: coin.input,
//             },
//             state.coins.push({
//               cryptoCoin: action.payload.exchangeItem,
//               input: action.payload.input,
//             })
//           );
//         }     
//       });
//     },
//   },
// });

// export const { buy, exchange } = cryptoSlice.actions;
// export default cryptoSlice.reducer;











import { createSlice, current } from "@reduxjs/toolkit";

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    coins: [],
    total: 0,
    quantity: 0,
  },
  reducers: {
    buy: (state, action) => {
      state.total += +action.payload.input;
      state.coins.length > 0
        ? state.coins.map((coin) => {
            if (+coin.cryptoCoin.id === +action.payload.cryptoCoin.id) {
              coin.input = +action.payload.input + +coin.input;
              return {...state, input:coin.input}
            } else {
              return  state.coins.push({
                cryptoCoin: action.payload.cryptoCoin,
                input: +action.payload.input,
              });
            }
          })
        : state.coins.push(action.payload);
    },
    exchange: (state, action) => {
      state.coins.filter((coin) => +coin.cryptoCoin.id !== +action.payload.changeCoin)
      state.coins.map((coin) => {
        if (+coin.input >= +action.payload.input) {
          coin.input = +coin.input - +action.payload.input;
          return (
            {
              ...state,
              input: coin.input,
            },
            state.coins.push({
              cryptoCoin: action.payload.exchangeItem,
              input: action.payload.input,
            })
          );
        }     
      });
    },
  },
});

export const { buy, exchange } = cryptoSlice.actions;
export default cryptoSlice.reducer;
