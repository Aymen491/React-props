import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Component from "E:/react-props/props/r-props/src/profile/component.js"
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Component fullName="BELGUESMI Aymen" bio="Date of birth : 30 january 1996" profession="Student Fullstack JS" />
      </header>
    </div>
  );
}

export default App;
