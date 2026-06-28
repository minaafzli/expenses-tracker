import {createBrowserRouter  , RouterProvider} from 'react-router-dom'
 import DashboardPage from './pages/Dashboard'
import AnalyticsPage from './pages/Analytics'
import RootLayout from './pages/Root';
import AddTransactionsPage from './pages/AddTransactions';


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
    path: '/add-transactions',
    element: <AddTransactionsPage />
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
