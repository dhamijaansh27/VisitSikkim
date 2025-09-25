import { useParams } from "react-router-dom";
import hotels from "../data/hotels";

export default function HotelDetails() {
  const { id } = useParams();
  const hotel = hotels.find(h => h.id.toString() === id); 

  if (!hotel) return <h2>Hotel not found</h2>;

  return (
   <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      {/* Title */}
      <h1>{hotel.name}</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
          overflowX: "auto",
          paddingBottom: "10px"
        }}
      >
        {hotel.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${hotel.name} view ${index + 1}`}
            style={{
              width: "300px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />
        ))}
      </div> 

      {/* Info */}
      <div style={{ marginTop: "20px", lineHeight: "1.6" }}>
        <p><strong>📍 Address:</strong> {hotel.address}</p>
        <p><strong>🏨 Facilities:</strong> {hotel.facilities.join(", ")}</p>
        <p><strong>💰 Price:</strong> ₹{hotel.price} / night</p>
        <p><strong>⭐ Rating:</strong> {hotel.rating} / 5</p>
      </div>

      {/* Book Button */}
      <button
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px"
        }}
        onClick={() => alert(`Booking started for ${hotel.name}`)}
      >
        Book Now
      </button>
    </div>
    // <div style={{ padding: "20px" }}>
    //   <h1>{hotel.name}</h1>
    //   <p>Price: ₹{hotel.price}</p>
    // </div>
  );
}
