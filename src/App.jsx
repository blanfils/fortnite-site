import { useState } from "react";
import "./App.css";

export default function App() {
  const [leaks] = useState([
    { id: 1, title: "Nouvelle arme mythique", desc: "Ajout d'une arme secrète en saison actuelle." },
    { id: 2, title: "Collaboration surprise", desc: "Un nouveau crossover arrive bientôt." },
    { id: 3, title: "Map update", desc: "Modification majeure de la carte Fortnite." },
  ]);

  return (
    <div className="app">
      <header className="header">
        <h1>🔥 Fortnite Leaks Hub</h1>
        <p>Les dernières infos et leaks Fortnite en temps réel</p>
      </header>

      <section className="hero">
        <h2>🎮 Bienvenue sur ton site Fortnite</h2>
        <p>Reste à jour avec les dernières nouveautés du jeu</p>
        <button onClick={() => alert("Discord bientôt connecté !")}>
          Rejoindre Discord
        </button>
      </section>

      <section className="leaks">
        <h2>💥 Leaks récents</h2>

        <div className="grid">
          {leaks.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Fortnite Leaks Hub - Fan Project</p>
      </footer>
    </div>
  );
}