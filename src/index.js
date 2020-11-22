import React from 'react';
import ReactDOM from 'react-dom';
import TodoLIst from "./components/TodoList";
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";



const App = () =>{
    const todoData = [
        { label: 'Drink Coffee', important: false },
        { label: 'Make Awesome App', important: true },
        { label: 'Have a lunch', important: false },
    ]
    const isLoggedIn = false;
    const loginBox = <span>Log in please</span>
 return (
     <div>
         {isLoggedIn ? null : loginBox}
         <AppHeader />
         <SearchPanel />
         <TodoLIst todos={ todoData }/>
     </div>
 )
}


ReactDOM.render(<App />, document.getElementById('root'));
