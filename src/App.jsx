import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import MyAccount from "./pages/MyAccount";

let router = createBrowserRouter(
  createRoutesFromElements(
   <>
     <Route path="/" element={<RootLayout />}>
     <Route index element={<Home/>}></Route>
     <Route path="/product" element={<Shop/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/contacts" element={<Contact/>}></Route>
     <Route path="/signup" element={<SignUp/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/cart" element={<Cart/>}></Route>
     <Route path="/checkout" element={<Checkout/>}></Route>
     <Route path="/account" element={<MyAccount/>}></Route>
    </Route>
     <Route path="*" element={<NotFoundPage />} />
   </>
  )
);

function App() {
  return (<RouterProvider router={router} />);
}

export default App;
