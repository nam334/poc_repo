import logo from './logo.svg';
import './App.css';
import OtpPage from './components/pages/OtpPage';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <>
    <Provider store={store}>
    <OtpPage/>
    </Provider>
    
    </>
  );
}

export default App;
