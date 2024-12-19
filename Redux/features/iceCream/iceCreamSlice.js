const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIceCreams: 10,
};

const iceCreamsSlice = createSlice({
  name: "iceCreams",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("cake/ordered", (state) => {
      state.numOfIceCreams--;
    });
  },
});

module.exports = iceCreamsSlice.reducer;
module.exports.iceCreamActions = iceCreamsSlice.actions;
