import './App.css';
import Layout from './layout/Layout';

import * as colors from './common/colors';
import styled from 'styled-components';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home></Home>
      </Layout>
    </div>
  );
}

export default App;
