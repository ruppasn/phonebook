import { applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
//import promise from "redux-promise-middleware";
import rootSaga from "./rootSagas";
import reducers from "../reducers/index";

const sagaMiddleware = createSagaMiddleware();
const middleware = [ sagaMiddleware ];

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export default store;
