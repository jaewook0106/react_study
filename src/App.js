// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  //Switch
import Info from './pages/Info';
import Main from './pages/Main';
import TodoList from './pages/todolist/TodoList';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Route path="/" exact component={Main} />
        <Route path="/info" component={Info} />
        <Route path="/sub" component={Sub} />
      </Router> */}
      <Router>
        <Switch>
          <Route path="/info" component={Info} />
          <Route path="/todolist" component={TodoList} />
          <Route path="/" exact component={Main} />
          <Route render={() => <p>404 페이지가 없습니다.</p>} />
        </Switch>  
      </Router>
    </div>
  );
}

export default App;
