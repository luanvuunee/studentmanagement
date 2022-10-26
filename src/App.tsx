import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import cityApi from './api/cityapi';


import './App.css';
import { NotFound } from './components/Common';
import Admin from './components/Layout/Admin';

import LoginPage from './features/auth/pages/LoginPage';

function App() {
  useEffect(() => {
    cityApi.getAll().then((item => { console.log(item.data);
    }))
  })
  return (
    <Box component='div'>
      <Routes> 
        <Route path='/login' element = {<LoginPage/>}/>
        <Route path='/admin' element = {<Admin/>}/>
        <Route path='/*' element= {<NotFound/>} />
        </Routes>
        
    </Box>
  );
}

export default App;
