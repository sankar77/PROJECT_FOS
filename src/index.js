import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter, Route, Switch
} from 'react-router-dom';
import Intro from './components/Intro';

class MainModule extends React.Component{
  constructor(props){
    super(props);
    }
  render(){
    return (
      <div>
        <HashRouter>
        <Switch>
          <Route exact path = "/" component = {Intro}/>
        </Switch>
        </HashRouter>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <MainModule />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
