import React from 'react';
import ReactDOM from 'react-dom';


/*const li = React.createElement('li', null, 'item1')
const ul = React.createElement('ul', null, li);
const div = React.createElement('div', null, ul)*/
const TodoLIst = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App </li>
        </ul>
    )
}
const AppHeader = () => {
    return <h1>My Todo List</h1>

}
const SearchPanel = () => <input placeholder="search"/>

const App = () =>{
 return (
     <div>
         <AppHeader />
         <SearchPanel />
         <TodoLIst />
     </div>
 )
}


ReactDOM.render(<App />, document.getElementById('root'));
