import festivals from "../data/festival";
import FestivalCard from "../data/FestivalCard";

function Calendar() {
    const months = [...new Set(festivals.map(f => f.month))];
    return (
      <div className="container">
        <h1>Sikkim Festival Calendar</h1>
        <p>Experience the sacred festivals and cultural celebrations of Sikkim monastries throughout the year</p>
        <br></br>
        <br></br>
        {months.map(month => (
        <div key={month} className="month-section">
          <h2>{month}</h2>
          <div className="festival-grid">
            {festivals
              .filter(f => f.month === month)
              .map(f => (
                <FestivalCard key={f.name} festival={f} />
              ))}
          </div>
        </div>
      ))}
      </div>
    );
  }
  
  export default Calendar;