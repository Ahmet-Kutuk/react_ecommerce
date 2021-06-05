import React from 'react';
import {ContextProvider} from './Context';
import Header from './componets/Header';
function App() {
  return (
    <ContextProvider>
        <Header />
    </ContextProvider>
  );
}

export default App;
