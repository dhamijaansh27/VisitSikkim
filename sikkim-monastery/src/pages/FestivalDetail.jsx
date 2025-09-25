import { useParams } from "react-router-dom";
import festivals from "../data/festival";

export default function FestivalDetail() {
  const { id } = useParams();
  const festival = festivals.find(f => f.id.toString() === id);

  if (!festival) return <h2>Festival not found</h2>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{festival.name}</h1>
      <img
        src={festival.image}
        alt={festival.name}
        style={{ width: "30%", borderRadius: "12px", marginTop: "20px" }}
      />
      <br></br>
      <br></br>
      <h3>Celebrated in the month of: {festival.month}</h3>
       <p style={{ marginTop: "30px", marginLeft:"40px", marginRight:"40px", fontSize: "18px", lineHeight: "1.6" }}>
        {festival.fullDescription}
      </p>
      <br></br>
      <h3>Location: {festival.location}</h3>
    </div>
  );
}