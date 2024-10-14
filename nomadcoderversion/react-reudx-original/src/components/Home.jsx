import React, { useState } from 'react'
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import ToDo from './ToDo';

const Home = ({ toDos, addToDo }) => {

  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  } 
  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input 
          type='text'
          value={text}
          onChange={onChange}
        />
      </form>
      {/* render to do */}
      <ul>
        {toDos.map(toDo => <ToDo key={toDo.id} {...toDo}/>)}
      </ul>
    </div>
  )
}

// store.state => Home (props 확인 가능)
function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);

// export default Home;