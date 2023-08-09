import Search from "./components/Search/Search"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Router>
      <Routes>
        <Route path="/" element={<Search /> } />
      </Routes>
    </Router>

    </div>
  )
}

export default App
