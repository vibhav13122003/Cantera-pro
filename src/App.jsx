import { useState } from 'react'
import './App.css'
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import CountryManagement from "./pages/CountryManagement"
import CategoryManagement from "./pages/CategoryManagement"
import ClubManagement from "./pages/Club&LicenceManagement"
import TournamentManagement from "./pages/TournamentManagement"
import MatchManagement from "./pages/MatchManagement"
import ScoutManagement from "./pages/ScoutManagement"
import ExternalPlayersManagement from "./pages/ExternalPlayers"
import ExternalProfessional from "./pages/ExternalProfessional";
import ProfessionalCategoriesManagement from "./pages/ProfessionalCategoriesManagement"
import Settings from "./pages/Settings"
import ScoutMessageCenter from "./pages/Message"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/country' element={<CountryManagement />} />
        <Route path='/categories' element={<CategoryManagement />} />
        <Route path='/clubs' element={<ClubManagement />} />
        <Route path='/tournaments' element={<TournamentManagement />} />
        <Route path='/matches' element={<MatchManagement />} />
        <Route path='/scout' element={<ScoutManagement />} />
        <Route path='/players' element={<ExternalPlayersManagement />} />
        <Route path='/professionals' element={<ExternalProfessional />} />
        <Route
          path='/professional-categories'
          element={<ProfessionalCategoriesManagement />}
        />
        <Route path='/settings' element={<Settings />} />
        <Route path='/messages' element={<ScoutMessageCenter />} />
      </Routes>
    </Router>
  );
}

export default App;
