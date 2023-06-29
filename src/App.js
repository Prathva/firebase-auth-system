import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/create-account' element={(<CreateAccountPage/>)} />
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
