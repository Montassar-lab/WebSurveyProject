import './App.css';
import Webnav from './Components/WebNav';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Profil from './Components/Profil';
import Users from './Components/Users';
import Privateroutes from './Components/Privateroutes';
import UserEdit from './Components/UserEdit';
import ProfilEdit from './Components/ProfilEdit';
import Errorhandling from './Components/Errorhandling';
import QuestionInterface from './Components/QuestionInterface';
import Quizlist from './Components/Quizlist';
import QuizEdit from './Components/QuizEdit';


function App() {
  return (
    <div>
      <Webnav/>

      <Errorhandling/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Privateroutes><Profil/></Privateroutes>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/editUser/:id' element={<UserEdit/>}/> 
        <Route path='/editProfil/:id' element={<ProfilEdit/>}/>
        <Route path='/QuestionInterface' element={<QuestionInterface/>}/>
        <Route path='/QuizList' element={<Quizlist/>}/>
        <Route path='/editQuiz/:id' element={<QuizEdit/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
