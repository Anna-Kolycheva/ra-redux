import React from 'react';
import ServiceList from './components/ServiceList';
import ServiceAdd from './components/ServiceAdd';
import ServiceFilter from './components/ServiceFilter';

function App() {
   return (
      <div className="App">
         <ServiceFilter />
         <ServiceAdd />
         <ServiceList />
      </div>
   );
}

export default App;
