import Formulario from "./components/Formulario"
import Header from "./components/Header"
import Home from "./components/Home"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/formulario',
    element:<Formulario/>
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
