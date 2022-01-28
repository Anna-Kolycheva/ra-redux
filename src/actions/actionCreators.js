import {
   ADD_SERVICE,
   REMOVE_SERVICE,
   UPDATE_SERVICE,
   CLEAR_SERVICE_FIELD,
   EDIT_SERVICE,
   CHANGE_SERVICE_FIELD,
   FILTER_SERVICES,
} from './actionType';

export function addService(name, price) {
   return {
      type: ADD_SERVICE,
      payload: {
         name,
         price,
      },
   };
}

export function removeService(id) {
   return {
      type: REMOVE_SERVICE,
      payload: {
         id,
      },
   };
}

export function clearServiceFiled() {
   return {
      type: CLEAR_SERVICE_FIELD,
   };
}

export function updateService(id, name, price) {
   return {
      type: UPDATE_SERVICE,
      payload: {
         id,
         name,
         price,
      },
   };
}

export function editService(id, title, price) {
   return {
      type: EDIT_SERVICE,
      payload: {
         id,
         title,
         price,
      },
   };
}

export function changeServiceField(name, value) {
   return {
      type: CHANGE_SERVICE_FIELD,
      payload: {
         name,
         value,
      },
   };
}

export function filterService(items, value) {
   return {
      type: FILTER_SERVICES,
      payload: {
         items,
         value,
      },
   };
}
