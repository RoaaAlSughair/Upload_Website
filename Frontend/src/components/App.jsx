import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Upload from './Upload'
import Home from './Home'

export default function App() {
  return (
    <Router>
      <main className='pa48 df justify-center align-items-center'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/uploadFile" element={<Upload />} />
        </Routes>
      </main>
    </Router>
  )
}
