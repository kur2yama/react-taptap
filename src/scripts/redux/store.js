import { createStore, applyMiddleware } from "redux";

import { reducers } from "./reducers";



import thunk from "redux-thunk";
import promise from "redux-promise"



const store = createStore(reducers, applyMiddleware(thunk, promise));

// const state = store.getState();   // 就要对 Store 生成快照。这种时点的数据集合

// console.log(state);
// Store对象包含所有数据

export default store;    // 暴露store