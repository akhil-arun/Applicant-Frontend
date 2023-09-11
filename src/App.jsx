import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom"

import Edit from "./Pages/Edit"
import Home from "./Pages/Home"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Outlet/>}>
      <Route index element= {<Home />} />
      <Route path = 'edit' element= {<Edit/>}/>
    </Route>
  )
)


function App() {

  return (
    <div>
      <RouterProvider router = {router} />
    </div>
  )

}

export default App
