import "font-awesome/css/font-awesome.min.css";
import { useEffect, useState } from "react";

const staticCards = [
  { id: 1, title: "سبحان الله", count: 100, backgroundColor: "#E3F2FD" },
  { id: 2, title: "الحمد لله", count: 33, backgroundColor: "#FFF3E0" },
  { id: 3, title: "لا إله إلا الله", count: 7, backgroundColor: "#E8F5E9" },
  { id: 4, title: "الله أكبر", count: 10, backgroundColor: "#FCE4EC" },
  { id: 5, title: "سبحان الله وبحمده", count: 100, backgroundColor: "#F3E5F5" },
  { id: 6, title: "أستغفر الله", count: 33, backgroundColor: "#E0F7FA" },
  { id: 7, title: "اللهم صل وسلم على نبينا محمد", count: 10, backgroundColor: "#FFFDE7" },
  { id: 8, title: "لا حول ولا قوة إلا بالله", count: 33, backgroundColor: "#F9FBE7" },
  { id: 9, title: "سبحان الله العظيم", count: 100, backgroundColor: "#E1F5FE" }
];

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [counters, setCounters] = useState({});

  useEffect(() => {
    setCards(staticCards);
    const initialCounters = {};
    staticCards.forEach(card => {
      initialCounters[card.id] = card.count;
    });
    setCounters(initialCounters);
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
        gap: "40px 40px",
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
            top:"100px",
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
