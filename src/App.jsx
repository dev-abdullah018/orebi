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

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
     <Route index element={<Home/>}></Route>
     <Route path="/product" element={<Shop/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/contacts" element={<Contact/>}></Route>
    </Route>
  )
);

function App() {
  return (<RouterProvider router={router} />);
}

export default App;
