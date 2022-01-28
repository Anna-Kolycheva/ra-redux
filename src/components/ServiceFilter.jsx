import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterService } from '../actions/actionCreators';

export default function ServiceFilter() {
   const dispatch = useDispatch();
   const items = useSelector((state) => state.serviceList);

   const [filterText, setFilterText] = useState('');

   const handleCange = (e) => {
      const { value } = e.target;
      dispatch(filterService(items, value));
      setFilterText(value);
   };

   return (
      <div>
         <input
            type="text"
            onChange={handleCange}
            value={filterText}
            placeholder="Поиск"
         />
      </div>
   );
}
