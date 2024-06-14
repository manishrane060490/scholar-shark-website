import './App.css';
import Quizpage from './Components/Quizpage/Quizpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlansPage from './Pages/PlansPage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import LanguagePage from './Pages/LanguagePage';
import LeaderboardPage from './Pages/LeaderboardPage';

function App() {
  return (
    <div className="App">
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
          {/* <Route path="*" element={<NoPage />} />  */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    
      {/* <Language /> */}
      {/* <Videopage /> */}
      {/* <Quizpage /> */}
    </div>
  );
}

export default App;
