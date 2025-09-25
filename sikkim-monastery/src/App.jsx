import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import VirtualTours from './pages/VirtualTours.jsx';
import Map from './pages/Map.jsx';
import DigitalArchives from './pages/DigitalArchives.jsx';
import AudioGuide from './pages/AudioGuide.jsx';
import Events from './pages/Events.jsx';
import Booking from './pages/Booking.jsx';
import Calendar from './pages/Calendar.jsx';
import FestivalDetail from './pages/FestivalDetail.jsx';
import BookingPage from './pages/BookingPage.jsx';
import HotelDetails from './pages/HotelDetails.jsx';
import MonasteryMap from './pages/MonasteryMap.jsx';
import Video from './pages/Video.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/virtual-tours" element={<VirtualTours />} />
            <Route path="/map" element={<MonasteryMap />} />
            <Route path="/archives" element={<DigitalArchives />} />
            <Route path="/audio-guide" element={<AudioGuide />} />
            <Route path="/events" element={<Events />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/calendar/:id" element={<FestivalDetail />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/bookingpage" element={<BookingPage/>} />
            <Route path="/bookingpage/:id" element={<HotelDetails/>} />
            <Route path="/:id" element={<Video/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;