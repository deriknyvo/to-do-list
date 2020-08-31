import React from 'react';
import './App.css';

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
        <label htmlFor="input">Digite aqui...</label>
        <input 
          value={item} 
          onChange={onChangeValue}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              addItem(item);
            }
          }}
          type="text" 
          id="input" 
        />
        <button type="button" onClick={() => addItem(item)}>Salvar</button>
      </div>

      <div>
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
