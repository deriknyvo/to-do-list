import React from 'react';
import './App.css';

import Input from './components/Input/index';
import List from './components/List/index';

function App() {
  const [itemsList = [], setItemList] = React.useState();

  return (
    <div className="container">
      <Input setItemList={setItemList} />
      <List itemsList={itemsList} />
    </div>
  );
}

export default App;
