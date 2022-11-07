import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './layouts';
import Category from './views/category';
import Home from './views/home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:id' element={<Category />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
