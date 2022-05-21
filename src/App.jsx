import './styles/App.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

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
            <Route path="/my-watch-list" element={<MyWatchListPage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
