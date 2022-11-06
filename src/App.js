import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Layout/Header'
import AllRepos from './components/AllRepos'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route index element={<Header />} />
          <Route path="/repos" element={<AllRepos />}>
            {/* <Route path="search" element={<Search />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
