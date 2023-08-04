import {Route,Routes} from 'react-router-dom'
import { Navigations } from './components/navigations';
import { AboutPage } from './pages/aboutPage';
import { ProductPage } from './pages/productPage';

function App() {
  return(

    <>
      <Navigations/>
      <Routes>
        <Route path="/" element={<ProductPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </>
  )
}
export default App;
