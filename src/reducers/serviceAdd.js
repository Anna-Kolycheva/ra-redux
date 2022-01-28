/* eslint-disable no-case-declarations */
import {
   CHANGE_SERVICE_FIELD,
   CLEAR_SERVICE_FIELD,
   EDIT_SERVICE,
} from '../actions/actionType';

const initialstate = {
   name: '',
   price: '',
};

export default function serviceAddReducer(state = initialstate, action) {
   switch (action.type) {
      case CHANGE_SERVICE_FIELD:
         const { name, value } = action.payload;
         return {
            ...state,
            [name]: value,
         };
      case CLEAR_SERVICE_FIELD:
         return {
            name: '',
            price: '',
         };
      case EDIT_SERVICE:
         const { id, title, price } = action.payload;
         return { id, name: title, price };

      default:
         return state;
   }
}
