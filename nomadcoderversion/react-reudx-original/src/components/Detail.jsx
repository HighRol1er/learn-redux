import React from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'

const Detail = ({ toDos }) => {
  console.log(toDos);
  const {id} = useParams();

  const toDo = toDos.find(toDo => toDo.id === parseInt(id));
  console.log(toDo);
  return (
    <>
      <h1>To do: {toDo.text}</h1>
      <h1>Created at: {toDo.id}</h1>
    </>
  )
}

function mapStateToProps(state) {
  return {toDos: state}
}

export default connect(mapStateToProps) (Detail)