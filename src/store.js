import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { persistStore } from "redux-persist";

import reducer from "./reducers";

const middleware = [];

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

export const store = createStore(reducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);

export default { store, persistor };
