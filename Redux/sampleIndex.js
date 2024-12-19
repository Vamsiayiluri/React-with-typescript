const store = require("./app/store");
// const { cakeActions } = require("./features/cake/cakeSlice");
// const { iceCreamActions } = require("./features/iceCream/iceCreamSlice");
const { fetchUsers } = require("./features/user/userSlice");

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(fetchUsers());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restocked(3));

// unsubscribe();
