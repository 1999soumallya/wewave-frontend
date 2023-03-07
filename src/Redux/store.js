import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { bannercontentReducer } from "./Reducers/reducer";

const reducer = combineReducers({
    bannercontain: bannercontentReducer
})

const intialState = {}

const middleware = [thunk]

const store = createStore(reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store