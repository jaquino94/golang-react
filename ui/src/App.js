import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import Header from './components/header'
import JobList from './components/Joblist/joblist-component';

function App() {
  let [message, setMessage] = useState('');

    fetch('http://localhost:8000/hello')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err)) 

  return (
    <div className="App">
      <Header header="Applied Jobs" />
      <div>
        <JobList/>
      </div>
    </div>
  );
}

export default App;
