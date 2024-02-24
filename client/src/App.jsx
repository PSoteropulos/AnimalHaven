import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard'
import CreatureForm from './components/CreatureForm';
import EditCreatureForm from './components/EditCreatureForm'
import OneCreature from './components/OneCreature'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/new" element={<CreatureForm/>} />
          <Route path="/onecreature/:id" element={<OneCreature/>} />
          <Route path="/edit/:id" element={<EditCreatureForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;