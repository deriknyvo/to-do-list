import React from 'react';
import './App.css';
import List from './components/List/index';
import Form from './components/Form/index';

const App = () => {
  const [item, setItem] = React.useState('');
  const [list, setList] = React.useState([]);

  function addItemList(item) {
    if (item.match(/\w/)) {
      item = item.trim();
      const newList = list.concat(item);
      setList(newList);
      setItem('');
    }
  }

  return (
    <div className="todo">
      <Form item={item} addItemList={addItemList} setItem={setItem} />
      <List list={list} />
    </div>
  );
}

export default App;
