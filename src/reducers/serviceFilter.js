/* eslint-disable no-case-declarations */
import { FILTER_SERVICES } from '../actions/actionType';

const initialState = {
   filteredItems: [],
   filterText: false,
};

export default function serviceFilterReducer(state = initialState, action) {
   switch (action.type) {
      case FILTER_SERVICES:
         const { items, value } = action.payload;
         if (!value) {
            return {
               filteredItems: items,
               filterText: false,
            };
         }
         const data = items.filter((service) =>
            service.name.match(value) ? service : null
         );
         return {
            filteredItems: data,
            filterText: value,
         };
      default:
         return state;
   }
}
