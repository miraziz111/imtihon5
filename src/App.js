import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { SingleProduct } from "./Pages/SingleProduct";
import { Layout } from "./Components/Layout";
import { AddProduct } from "./Components/AddProduct/AddProduct";
import { NewAddProduct } from "./Pages/NewAddProduct";
import { UserLogin } from "./Components/UserLogin";
import { Autorizition } from "./Pages/Autorizition";
import { FormaProduct } from "./Components/FormaProduct/FormaProduct";



function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
     <Route index element={<Home/>} />
     <Route path='/product/:id' element={<SingleProduct/>}/>
     <Route path='/products' element={<NewAddProduct/>}/>
     <Route path='/add' element={<FormaProduct/>}/>
     <Route path='/profle' element={<UserLogin/>}/>
     <Route path='/login' element={<Autorizition/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
