import { useNavigate } from "react-router-dom";

export default function FestivalCard({ festival }) {
  const navigate = useNavigate();
  return (
    <div 
      className="festival-card"
      onClick={() => navigate(`/calendar/${festival.id}`)}
      style={{ cursor: "pointer" }}>
      <img src={festival.image} alt={festival.name} className="festival-image" />
      <h3>{festival.name}</h3>
      <p>{festival.description}</p>
    </div>
  );
}
