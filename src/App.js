import React from 'react';
import './App.css';
import Input from './components/Input/index';
import List from './components/List/index';

const App = () => {
  const [item, setItem] = React.useState('');
  const [list, setList] = React.useState([]);

  function addItem(item) {
    if (item.match(/\w/)) {
      item = item.trim();
      const newList = list.concat(item);
      setList(newList);
      setItem('');
    }
  }

  function onChangeValue(event) {
    setItem(event.target.value);
  }

  return (
    <div className="todo">
      <div> 
        <Input 
          item={item}
          addItem={addItem}
          onChangeValue={onChangeValue}
        />
      </div>

      <List list={list} />
    </div>
  );
}

export default App;
