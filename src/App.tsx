import './App.css';
import Quizpage from './Components/Quizpage/Quizpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlansPage from './Pages/PlansPage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import LanguagePage from './Pages/LanguagePage';
import LeaderboardPage from './Pages/LeaderboardPage';
import DashboardPage from './Pages/DashboardPage';
import { PlansProvider } from './Context';
import SummaryPage from './Pages/SummaryPage';
import SilverQuizPage from './Components/SilverQuizPage/SilverQuizPage';
import Videopage from './Components/Videopage/Videopage';
import HomePage from './Pages/HomePage';
import AnimatedRoutes from './AnimatedRoutes';


function App() {

  var loginUser = true;

  return (
    <div className="App">
      <PlansProvider>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </PlansProvider>
    
      {/* <Language /> */}
      {/* <Videopage /> */}
      {/* <Quizpage /> */}
    </div>
  );
}

export default App;
