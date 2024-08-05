import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Videopage from './Components/Videopage/Videopage';
import PlansPage from './Pages/PlansPage';
import Quizpage from './Components/Quizpage/Quizpage';
import RegisterPage from './Pages/RegisterPage';
import LanguagePage from './Pages/LanguagePage';
import LoginPage from './Pages/LoginPage';
import LeaderboardPage from './Pages/LeaderboardPage';
import DashboardPage from './Pages/DashboardPage';
import HomePage from './Pages/HomePage';
import SilverQuizPage from './Components/SilverQuizPage/SilverQuizPage';
import { AcceleratedAnimation, AnimatePresence } from 'framer-motion';
import Carousal from './Components/Carousal/Carousal';
import HomeDesktop from './Pages/HomeDesktop';
import { AccordionActions } from '@mui/material';
import AccordionCarousel from './Components/AccordionCarousel/AccordionCarousel';
import ThreeDCarousel from './Components/ThreeDCarousel/ThreeDCarousel';

const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {/* <Route path="/" element={<Language />}> */}
                <Route index element={<Videopage />} />
                <Route path="plans" element={<PlansPage />} />
                <Route path="quiz" element={<Quizpage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="language" element={<LanguagePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="leaderboard" element={<LeaderboardPage />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="silverQuiz" element={<SilverQuizPage />} />
                <Route path="intro" element={<Videopage />} />
                <Route path="test" element={<Carousal />} />
                <Route path="test1" element={<ThreeDCarousel />} />
                <Route path="desk" element={<HomeDesktop />} />
                {/* <Route path="*" element={<NoPage />} />  */}
                {/* </Route> */}
            </Routes>
        </AnimatePresence>
    )

    
}

export default AnimatedRoutes;