import React, { createContext, useState } from 'react';

export const DeleteContext = createContext("");

function ContextProvider({children}) {
  const [deleteTask, setDeleteTask] = useState(false);
  return (
    <>
      <DeleteContext.Provider value={{deleteTask,setDeleteTask}}>
        {children}
      </DeleteContext.Provider>
    </>
  )
}

export default ContextProvider