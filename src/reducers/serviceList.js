/* eslint-disable no-case-declarations */
import { nanoid } from 'nanoid';
import {
   ADD_SERVICE,
   REMOVE_SERVICE,
   UPDATE_SERVICE,
} from '../actions/actionType';

const initialstate = [
   {
      id: nanoid(),
      name: 'замена стекла',
      price: 21000,
   },
   {
      id: nanoid(),
      name: 'замена дисплея',
      price: 25000,
   },
];

export default function serviceListReducer(state = initialstate, action) {
   switch (action.type) {
      case ADD_SERVICE:
         const { name, price } = action.payload;
         return [
            ...state,
            {
               id: nanoid(),
               name,
               price: Number(price),
            },
         ];

      case REMOVE_SERVICE:
         const { id } = action.payload;
         return state.filter((item) => item.id !== id);

      case UPDATE_SERVICE:
         const service = action.payload;
         const filteredState = state.filter((item) => item.id !== service.id);
         return [...filteredState, service];

      default:
         return state;
   }
}
