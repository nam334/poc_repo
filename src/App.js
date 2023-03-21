import logo from './logo.svg';
import './App.css';
import OtpPage from './components/pages/OtpPage';
import { Provider } from 'react-redux';
import { store } from './store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SuccessPage from './components/pages/SuccessPage';
import Login from './components/pages/Login';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Login />,
  },
  {
    path: "/otp", 
    element: <OtpPage />,
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
]);

function App() {
  return (
    <>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    
    </>
  );
}

export default App;
