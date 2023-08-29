import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  products: [],
};

//* created productsSlice reducer
const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    setBasket: (state, action) => {
      if (state.products.some((p) => p.id == action.payload.id)) {
        return {
          count: state.count + 1,
          products: state.products.map((item) =>
            item.id == payload.id
              ? {
                  ...item,
                  itemQantity: item.itemQantity + 1,
                  itemPrice: item.itemPrice * itemQantity,
                }
              : item
          ),
        };
      } else {
        {
          count: state.count + 1,
            products.state.products.map((item) =>
              item.id == payload.id
                ? {
                    ...item,
                    itemQantity: item.itemQantity + 1,
                    itemPrice: item.itemPrice * itemQantity,
                  }
                : item
            );
        }
      }
    },
  },
});

export const { setBasket } = productsSlice.actions;

export default productsSlice.reducer;
