import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider, FiltersContextProvider} from './context';
import axiosInterceptor from './interceptor/axiosInterceptor';
import AppRoutes from './routes';
import { ToastContainer } from 'react-toastify';
import './App.css';
import SplashScreen from './components/SplashScreen/SplashScreen';
import { LoadingProvider } from './context/LoadingContext';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosInterceptor();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AuthContextProvider>
        <FiltersContextProvider>
          <BrowserRouter>
            <ToastContainer />
              <LoadingProvider>
                <AppRoutes/>
              </LoadingProvider>
          </BrowserRouter>
        </FiltersContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
