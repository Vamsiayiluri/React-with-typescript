const { configureStore } = require("@reduxjs/toolkit");
const { produce } = require("immer");
const { createLogger } = require("redux-logger");
const logger = createLogger();
const initialState = {
  name: "vamsi",
  address: {
    street: "123 main st",
    city: "Hyderabad",
    state: "Telangana",
  },
};

const STREET_UPDATED = "STREET_UPDATED";
const update_street = (street = "") => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    //   state.address.street = action.payload;
    //   return state;
  }
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

const unsubscribe = store.subscribe(() => {});

store.dispatch(update_street("143 side st"));
store.dispatch(update_street("144 side st"));

store.dispatch(update_street("145 side st"));

store.dispatch(update_street("143 side st"));

store.dispatch(update_street("133 side st"));

unsubscribe();
