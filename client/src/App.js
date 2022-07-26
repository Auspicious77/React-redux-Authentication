import React, { useEffect } from 'react';
import './App.css';
import Auth from './components/Auth';
import Todo from './components/Todo';
import { useSelector, useDispatch } from 'react-redux';
import { addToken } from './Reducers/AuthReducer'



function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addToken())
  }, [])
 

  const Token = useSelector(state => state.user.token)
  return (

    <div className="App">
      {
        Token ? <Todo /> : <Auth />
      }



    </div>
  );
}

export default App;
