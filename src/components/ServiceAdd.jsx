/* eslint-disable react/button-has-type */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
   addService,
   changeServiceField,
   clearServiceFiled,
   updateService,
} from '../actions/actionCreators';

export default function ServiceAdd() {
   const item = useSelector((state) => state.serviceAdd);
   const dispatch = useDispatch();

   const handleCange = (e) => {
      const { name, value } = e.target;
      dispatch(changeServiceField(name, value));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const { name, price } = item;

      if (item.id) {
         dispatch(updateService(item.id, name, price));
         dispatch(clearServiceFiled());
      } else if (name && price) {
         dispatch(addService(name, price));
         dispatch(clearServiceFiled());
      }
   };

   const handleReset = () => {
      dispatch(clearServiceFiled());
   };

   return (
      <form onSubmit={handleSubmit} onReset={handleReset}>
         <input name="name" onChange={handleCange} value={item.name} />
         <input name="price" onChange={handleCange} value={item.price} />
         <button type="submit">Save</button>
         <button type="reset">Cancel</button>
      </form>
   );
}
