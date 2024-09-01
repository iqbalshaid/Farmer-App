import {applyMiddleware,compose,createSore } from "redux";
import rootReduce from "./src/FarmerApp/Reduxs/redux";
import thunk from "redux-thunk";
import { persistCombineReducers, persistStore } from 'redux-persist';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import AsyncStorage from '@react-native-async-storage/async-storage';
const middleware = [thunk];
const authPersistConfig = {
    key: 'root',
    storage:AsyncStorage,
    whitelist: ['auth', 'profile', 'single']
  };
  

const store = createSore(
    persistCombineReducers(authPersistConfig,rootReduce);
    composeEnhancer(applyMiddleware(middleware))

);
const pers = persistStore(store);
export default pers;