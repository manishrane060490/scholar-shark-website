import './App.css';
import Lighthouse from './Components/Lighthouse/Lighthouse';
import Quizpage from './Components/Quizpage/Quizpage';
import Videopage from './Components/Videopage/Videopage';
import Language from './Pages/Language';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Language />}> */}
          <Route index element={<Language />} />
          <Route path="quiz" element={<Quizpage />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
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
