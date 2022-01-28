import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
   removeService,
   clearServiceFiled,
   editService,
} from '../actions/actionCreators';

export default function ServiceList() {
   const storedItems = useSelector((state) => state.serviceList);
   const filteredItems = useSelector((state) => state.serviceFilter);
   const [items, setItems] = useState(storedItems);

   const dispatch = useDispatch();

   useEffect(() => {
      const itemsToSet = filteredItems.filterText
         ? filteredItems.filteredItems
         : storedItems;
      setItems(itemsToSet);
   }, [filteredItems, storedItems]);

   const handleEdit = (item) => {
      const { id, name, price } = item;
      dispatch(editService(id, name, price));
   };

   const handleRemove = (id) => {
      dispatch(removeService(id));
      dispatch(clearServiceFiled());
   };

   return (
      <ul>
         {items.map((item) => (
            <li key={item.id}>
               {item.name} - {item.price}
               <button
                  className="button"
                  type="button"
                  onClick={() => handleEdit(item)}
               >
                  Edit
               </button>
               <button
                  className="button"
                  type="button"
                  onClick={() => handleRemove(item.id)}
               >
                  Remove
               </button>
            </li>
         ))}
      </ul>
   );
}
