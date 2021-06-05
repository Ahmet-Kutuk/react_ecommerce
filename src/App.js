import React from 'react';
import {ContextProvider} from './Context';
import Header from './componets/Header';
import CardCompoment from './componets/Card';
function App() {
  return (
    <ContextProvider>
        <Header />
        <CardCompoment />
    </ContextProvider>
  );
}

export default App;
