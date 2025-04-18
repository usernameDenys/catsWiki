import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    </Router>
);

export default AppRouter;