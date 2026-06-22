import {createBrowserRouter  , RouterProvider} from 'react-router-dom'
 import DashboardPage from './pages/Dashboard'
import AnalyticsPage from './pages/Analytics'
import AddExpensePage from './pages/AddExpense'
import RootLayout from './pages/Root';


const router = createBrowserRouter([
 {path: '/' , element:<RootLayout /> , children:[
   {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: '/analytics',
    element: <AnalyticsPage />
  },
  {
    path: '/addExpense',
    element: <AddExpensePage />
  }
 ]
 }
]);

function App() {

  return (
    <>
   
      <RouterProvider router={router} />
    </>
  )
}

export default App
