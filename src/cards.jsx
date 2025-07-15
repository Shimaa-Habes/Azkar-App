import "font-awesome/css/font-awesome.min.css";
import { useEffect, useState } from "react";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [counters, setCounters] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/cards?_limit=6")
      .then(res => res.json())
      .then(data => {
        setCards(data);
        const initialCounters = {};
        data.forEach(card => {
          initialCounters[card.id] = card.count;
        });
        setCounters(initialCounters);
      })
      .catch(err => console.error(err));
  }, []);

  const decreaseCounter = (id) => {
    setCounters(prev => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0
    }));
  };

  const resetCounter = (id) => {
    const originalCount = cards.find(card => card.id === id)?.count || 0;
    setCounters(prev => ({
      ...prev,
      [id]: originalCount
    }));
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "80px 60px",
        padding: "20px",
        justifyItems: "center",
      }}
    >
      {cards.map(card => (
        <div
          key={card.id}
          style={{
            backgroundColor: card.backgroundColor,
            filter: "brightness(85%)",     
            padding: "7px",
            borderRadius: "12px",
            width: "100%",
            maxWidth: "320px",
            height: "150px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
          onClick={() => decreaseCounter(card.id)}
        >
          <h3 style={{ margin: "0 0 15px", fontSize: "1.6rem", color: "#333" }}>
            {card.title}
          </h3>
          <p style={{ margin: 0, fontSize: "1.6rem", fontWeight: "bold", color: "#555" }}>
            {counters[card.id]}
          </p>
          <p style={{ margin: "5px 0 0", fontSize: "1rem", color: "#aaa" }}>
            {card.count} 
          </p>

          <div
            onClick={e => {
              e.stopPropagation();
              resetCounter(card.id);
            }}
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              fontSize: "1.4rem",
              cursor: "pointer",
              color: "#333",
              opacity: 0.6,
            }}
          >
            <i className="fa fa-refresh"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
