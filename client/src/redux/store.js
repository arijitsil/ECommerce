import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import loginReducer from './login/loginReducers'

const persistConfig = {
    key: 'root',
    storage,
  }
   

const rootReducer = combineReducers({
    loginReducer,
  })
  
const persistedReducer = persistReducer(persistConfig, rootReducer)


//const store = createStore(rootReducer,applyMiddleware(thunk))

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

// export default store