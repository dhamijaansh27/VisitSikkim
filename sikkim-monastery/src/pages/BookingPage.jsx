import { useNavigate } from "react-router-dom";
import { useState } from "react";
import hotels from "../data/hotels";

function Booking(){
    const navigate = useNavigate();

    const [selectedMonastery, setSelectedMonastery] = useState("");

    const monasteries = Array.from(new Set(hotels.map(h => h.monastery)));
    const filteredHotels = selectedMonastery
    ? hotels.filter(h => h.monastery === selectedMonastery)
    : hotels;

    return(
        <div style={{ padding: "20px" }}>
           <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Book Your Stay</h1>
           <div style={{ textAlign: "right", marginBottom: "20px" }}>
             <label htmlFor="monastery">Filter by Nearby Monastery: </label>
             <select
              id="monastery"
             value={selectedMonastery}
             onChange={(e) => setSelectedMonastery(e.target.value)}
             style={{ padding: "8px", marginLeft: "10px" }}
             >
             <option value="">All</option>
             {monasteries.map((m, index) => (
             <option key={index} value={m}>{m}</option>
             ))}
            </select>
          </div>


          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {filteredHotels.map(hotel => (
          <div
            key={hotel.id}
            onClick={() => navigate(`/bookingpage/${hotel.id}`)}
            style={{
              cursor: "pointer",
              width: "280px",
              margin: "15px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              overflow: "hidden",
              background: "#fff"
            }}
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "25px" }}>
              <h3>{hotel.name}</h3>
              <p style={{ padding: "8px" }}>Price: ₹{hotel.price} / night</p>
              <p style={{ padding: "8px" }}>⭐ {hotel.rating} / 5</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}

export default Booking;