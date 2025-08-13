import React from 'react'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Portofolio from './components/Portofolio/Portofolio'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import StartFramework from './components/startFramework/Startframework'

export default function App() {

  const router = createHashRouter([
  {
      path:"", element:<Layout/> ,children:[
    { path: "", element: <StartFramework/> },
    { path: "Home", element: <Home/> },
    { path: "contact", element: <Contact/> },
    { path: "about", element: <About/> },  
    { path: "portofolio", element: <Portofolio/> },
    { path: "footer", element: <Footer/> },
    ]}
  ])
  return (
    <>
  <RouterProvider router={router}/>
    </>
  )
}
