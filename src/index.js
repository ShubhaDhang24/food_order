import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ThemeProvider } from './Theme';
import AxiosDemo from './booking_app/AxiosDemo';


const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
  <ThemeProvider>
    <App />
    </ThemeProvider>
  
);*/

root.render(
  <div className='container'>
  <AxiosDemo/>
  </div>
)

