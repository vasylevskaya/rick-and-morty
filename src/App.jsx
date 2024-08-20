import './styles/App.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"

import { ROUTES } from './config/config'
import Header from './components/Header'
import Homepage from './pages/homepage/Homepage'
import CharactersPage from './pages/characters/CharactersPage'
import MyWatchListPage from './pages/my-watch-list/MyWatchListPage'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path={ROUTES.WATCH_LIST} element={<MyWatchListPage />} />
            <Route path={ROUTES.CHARACTERS} element={<CharactersPage />} />
            <Route path={ROUTES.HOME} element={<Homepage />} />
            <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
