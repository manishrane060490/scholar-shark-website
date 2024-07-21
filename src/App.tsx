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
import './i18n';


function App() {

  return (
    <div className="App">
      <PlansProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Language />}> */}
              <Route index element={<LanguagePage />} />
              <Route path="plans" element={<PlansPage />} />
              <Route path="quiz" element={<Quizpage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="language" element={<LanguagePage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="leaderboard" element={<LeaderboardPage />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="summary" element={<SummaryPage />} />
              <Route path="silverQuiz" element={<SilverQuizPage />} />
              {/* <Route path="*" element={<NoPage />} />  */}
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </PlansProvider>
    
      {/* <Language /> */}
      {/* <Videopage /> */}
      {/* <Quizpage /> */}
    </div>
  );
}

export default App;
