import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Error from './Components/Error';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {

  const appRouter = createBrowserRouter ([
    {
      path: "/",
      element: <Body/>,
      errorElement: <Error/>,
    },
    {
      path: "/about",
      element: <About/>,
      errorElement: <Error/>,
    },
    {
      path: "/projects",
      element: <Projects/>,
      errorElement: <Error/>,
    },
    {
      path: "/skills",
      element: <Skills/>,
      errorElement: <Error/>,
    },
  ])

  return(
    <RouterProvider router = {appRouter}/>
  )

}

export default App;
