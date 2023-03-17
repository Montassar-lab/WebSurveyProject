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
import Survey from './Components/Survey';
import SurveyAnswer from './Components/SurveyAnswer';
import SurveyResult from './Components/SurveyResult';
import QuizOwnerList from './Components/QuizOwnerList';




function App() {
  return (
    <div>

      <div className='Navbar'>
        <Webnav/>
      </div>

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
        <Route path='/QuizOwnerList/:id' element={<QuizOwnerList/>}/>
        <Route path='/editQuiz/:id' element={<QuizEdit/>}/>
        <Route path='/Survey' element={<Survey/>}/>
        <Route path='/SurveyAnswer/:id' element={<SurveyAnswer/>}/>
        <Route path='/SurveyResult/:id' element={<SurveyResult/>}/>
   

      </Routes>
      
    </div>
  );
}

export default App;
