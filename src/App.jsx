import { useEffect } from "react";
import "./App.css";

export default function App() {

  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">

      <header className="header">
        <h1>🔥 Fortnite Leaks Central</h1>
        <p>Hypex • Shiina • Fortnite News</p>
      </header>

      <section className="section">
        <h2>🔥 HYPEX LIVE</h2>
        <a className="twitter-timeline" href="https://twitter.com/HYPEX">
          Tweets by HYPEX
        </a>
      </section>

      <section className="section">
        <h2>⚡ SHIINA LIVE</h2>
        <a className="twitter-timeline" href="https://twitter.com/ShiinaBR">
          Tweets by ShiinaBR
        </a>
      </section>

      <section className="section">
        <h2>📰 FORTNITE OFFICIAL</h2>
        <a className="twitter-timeline" href="https://twitter.com/FortniteGame">
          Tweets by Fortnite
        </a>
      </section>

      <footer className="footer">
        <p>© 2026 Fortnite Leaks Central</p>
      </footer>

      <script async src="https://platform.twitter.com/widgets.js"></script>

    </div>
  );
}