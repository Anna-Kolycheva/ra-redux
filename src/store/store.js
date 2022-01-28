import { combineReducers, createStore } from 'redux';
import serviceAddReducer from '../reducers/serviceAdd';
import serviceListReducer from '../reducers/serviceList';
import serviceFilterReducer from '../reducers/serviceFilter';

const reducer = combineReducers({
   serviceList: serviceListReducer,
   serviceAdd: serviceAddReducer,
   serviceFilter: serviceFilterReducer,
});

const store = createStore(reducer);

export default store;
