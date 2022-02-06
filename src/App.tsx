import React, { useState } from 'react';
import Inputfield from './components/Inputfield';

const App: React.FC = () => {
  const [todos, settodos] = useState<string | number>('')
  return <div>
    <h1>
      Taskify
    </h1>
    <Inputfield todos={todos} settodos={settodos} />
  </div>;
};

export default App;
