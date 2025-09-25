import React, { useState } from "react";
import rumtek_voice from "../images/voice-rumtek.mp3";

const AudioGuide = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [isPlaying, setIsPlaying] = useState(false);

  // 🎵 Define available languages
  const languages = {
    english: "English",
    tibetan: "Tibetan",
    nepali: "Nepali",
    hindi: "Hindi",
    bengali: "Bengali",
  };

  // 🎵 Rumtek Monastery Audio Tour with audio files
  const rumtekTour = {
    rumtek:{
      title: "Rumtek Monastery Audio Tour",
      duration: "45 minutes",
      narrator: "Lama Tenzin Rinpoche",
      tracks: [
      { 
        id: 1, 
        title: "Welcome to Rumtek", 
        duration: "1:25", src:rumtek_voice,
        text: "Welcome to Rumtek Monastery, a place of profound peace and spiritual serenity. Nestled in the breathtaking Himalayas, this magnificent monastery is one of Sikkim's most significant and sacred sites, serving as a living testament to the rich heritage of the Karma Kagyu lineage of Tibetan Buddhism. The moment you step onto these hallowed grounds, a sense of tranquility washes over you. The air is filled with the scent of incense, and the gentle chants of monks create a truly immersive spiritual experience, making you feel a deep connection to this ancient and sacred tradition. The main temple is a masterpiece of art and devotion, with its intricate murals and vibrant colors. Inside the sacred prayer hall, you'll find priceless religious artifacts, including the Golden Stupa that holds the relics of the 16th Karmapa. This space is filled with the wisdom of centuries, offering a quiet place for reflection and meditation. Beyond the main temple, the complex also includes the Karma Shri Nalanda Institute, a renowned center for higher Buddhist studies that attracts students from all over the world. Rumtek Monastery is more than just a beautiful destination; it is an opportunity to connect with a rich spiritual tradition and witness the quiet discipline of monastic life. We hope this tour has offered you a glimpse into the serene and peaceful world of Rumtek."
      },
      { id: 2, title: "History of the Monastery", duration: "8:20", src: rumtek_voice },
      { id: 3, title: "The Main Prayer Hall", duration: "6:15", src: rumtek_voice },
      { id: 4, title: "Sacred Relics & Artifacts", duration: "7:30", src: rumtek_voice },
      { id: 5, title: "Daily Life of Monks", duration: "5:45", src: rumtek_voice },
      { id: 6, title: "Meditation & Teachings", duration: "9:20", src: rumtek_voice },
      { id: 7, title: "Festival Celebrations", duration: "4:25", src: rumtek_voice},
      ],
    },
    enchey: {
      title: 'Enchey Monastery Audio Guide',
      duration: '35 minutes',
      narrator: 'Ani Pema Dolkar',
      tracks: [
        { id: 1, title: 'Introduction to Enchey', duration: '2:30' },
        { id: 2, title: 'Founding Legend', duration: '5:45' },
        { id: 3, title: 'Architecture & Art', duration: '6:20' },
        { id: 4, title: 'Mountain Views & Nature', duration: '4:15' },
        { id: 5, title: 'Spiritual Practices', duration: '7:30' },
        { id: 6, title: 'Community Service', duration: '8:40' }
      ]
    },
    pemayangtse: {
      title: 'Pemayangtse Monastery Journey',
      duration: '50 minutes',
      narrator: 'Dr. Karma Thinley',
      tracks: [
        { id: 1, title: 'Ancient Beginnings', duration: '4:20' },
        { id: 2, title: 'Royal Connections', duration: '6:45' },
        { id: 3, title: 'Seven-Tiered Heaven', duration: '8:30' },
        { id: 4, title: 'Wooden Sculptures', duration: '7:15' },
        { id: 5, title: 'Sacred Texts', duration: '5:50' },
        { id: 6, title: 'Mountain Panorama', duration: '6:20' },
        { id: 7, title: 'Spiritual Significance', duration: '11:00' }
      ]
    }
  };

  const [selectedMonastery, setSelectedMonastery] = useState("rumtek");
  const monastery = rumtekTour[selectedMonastery];
  const [currentTrack, setCurrentTrack] = useState(monastery.tracks[0]);

  React.useEffect(() => {
    setCurrentTrack(rumtekTour[selectedMonastery].tracks[0]);
    setIsPlaying(false);
  }, [selectedMonastery]);


  return (
    <div className="page-section">
      <div className="container">
        <h1>Smart Audio Guide</h1>
        <p>
          Immerse yourself in the wisdom and history of Rumtek Monastery with
          our intelligent audio guide system.
        </p>

         {/* Monastery Selection */}
        <div className="card">
          <h3>Select Monastery</h3>
          <select
            value={selectedMonastery}
            onChange={(e) => setSelectedMonastery(e.target.value)}
          >
            <option value="rumtek">Rumtek Monastery</option>
            <option value="enchey">Enchey Monastery</option>
            <option value="pemayangtse">Premayangtse Monastery</option>
          </select>
        </div>

        {/* Language Selection */}
        <div className="card">
          <h3>Available Languages</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {Object.entries(languages).map(([key, lang]) => (
              <button
                key={key}
                className={`btn ${selectedLanguage === key ? "" : "btn-secondary"}`}
                onClick={() => setSelectedLanguage(key)}
                style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        

        {/* Tour Info */}
        <div className="card">
          <h3>{monastery.title}</h3>
          <p>
            <strong>Duration:</strong> {monastery.duration}
          </p>
          <p>
            <strong>Narrator:</strong> {monastery.narrator}
          </p>
          <p>
            <strong>Language:</strong> {languages[selectedLanguage]}
          </p>
        </div>

        {/* Audio Player */}
        {currentTrack?.src && (
        <div className="card" style={{ border: "2px solid #8B2635" }}>
          <h3>🎵 Now Playing</h3>
          <h4>{currentTrack.title}</h4>
          <p>
            Narrated by {monastery.narrator} in {languages[selectedLanguage]}
          </p>

          {/* HTML5 Audio Element */}
          <audio
            id="audioPlayer"
            src={currentTrack.src}
            autoPlay={isPlaying}
            controls
            style={{ width: "100%", marginTop: "1rem" }}
            onEnded={() => {
              const currentIndex = monastery.tracks.findIndex(
                (t) => t.id === currentTrack.id
              );
              const nextTrack = monastery.tracks[currentIndex + 1];
              if (nextTrack) {
                setCurrentTrack(nextTrack);
              } else {
                setIsPlaying(false);
              }
            }}
          ></audio>

          {/* Play/Pause Button */}
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <button
              className="btn"
              onClick={() => {
                const audio = document.getElementById("audioPlayer");
                if (isPlaying) {
                  audio.pause();
                } else {
                  audio.play();
                }
                setIsPlaying(!isPlaying);
              }}
              style={{
                fontSize: "2rem",
                padding: "1rem 2rem",
                borderRadius: "50px",
              }}
            >
              {isPlaying ? "⏸️ Pause" : "▶️ Play"}
            </button>
          </div>
        </div>
        )}

        <div className="card" style={{ border: "2px solid #8B2635"}}>
          {currentTrack.text ? currentTrack.text : "Lyrics not available"}
        </div>

        {/* Track List */}
        <div className="card">
          <h3>Track List</h3>
          <div className="archive-list">
            {monastery.tracks.map((track) => (
              <div
                key={track.id}
                className="archive-item"
                style={{
                  cursor: "pointer",
                  background: currentTrack.id === track.id ? "#f0f8e8" : "white",
                  borderLeft:
                    currentTrack.id === track.id
                      ? "4px solid #B8860B"
                      : "4px solid #8B2635",
                  padding: "0.5rem",
                  marginBottom: "0.5rem",
                }}
                onClick={() => {
                  setCurrentTrack(track);
                  setIsPlaying(true);
                  setTimeout(() => {
                    document.getElementById("audioPlayer").play();
                  }, 200);
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>
                    {track.id}. {track.title}
                  </span>
                  <span>{track.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioGuide;
