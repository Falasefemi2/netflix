import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/Root"
import Main from "./components/Main"
import Rows from "./components/Rows"
import requests from "./Request"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Main />
            <Rows rowID="1" title='Up Coming' fetchURL={requests.requestUpcoming} />
            <Rows rowID="2" title='Popular' fetchURL={requests.requestPopular} />
            <Rows rowID="3" title='Trending' fetchURL={requests.requestTrending} />
            <Rows rowID="4" title='Top Rated' fetchURL={requests.requestTopRated} />
            <Rows rowID="5" title='Horror' fetchURL={requests.requestHorror} />
          </>
        )
      },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App