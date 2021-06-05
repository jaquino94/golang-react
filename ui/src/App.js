import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

import Header from './components/header'
import JobList from './components/Joblist/joblist-component';

function App() {
    let [state, setState] = useState({});

    useEffect(() => {
        fetch('http://localhost:8000/hello')
          .then(res => res.json())
          .then(data => setState(data))
          .catch(err => console.log(err))
    },[]);

    return (
        <div className="App">
          <Header header={state.Message} />
          <div>
            <JobList/>
          </div>
        </div>
    );
}

export default App;
