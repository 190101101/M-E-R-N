import React from 'react';
import { Button } from 'antd';

const App = () => {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-red-200">
        hello react
      </h1>
      <Button type="primary">Primary Button</Button>
      <Button type="primary" danger>danger Button</Button>
    </div>
  );
}

export default App;
