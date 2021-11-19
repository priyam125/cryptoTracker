import './App.css';
import './index.css'
import React from 'react';
import Dashboard from './components/Dashboard';

const App = () => {



  return (
    <div className="flex justify-center pt-8 h-screen w-screen bg-white">
      <div className="bg-white h-5/6 w-11/12 p-2 px-6">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
