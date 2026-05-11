import "./App.css";

export default function App() {
  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <h1>🔥 Fortnite Leaks Central</h1>
        <p>Live leaks • Patch Notes • Community</p>
      </header>

      {/* HERO */}
      <section className="hero">
        <h2>🎮 Biggest Fortnite Leak Hub</h2>

        <p>
          Automatic live leaks from Hypex, Shiina & Fortnite
        </p>

        <div className="buttons">

          {/* REMPLACE TES LIENS */}
          <a href="1329455437849825302" target="_blank">
            💬 Discord
          </a>

          <a href="https://www.youtube.com/@Blanfils-n7s" target="_blank">
            ▶️ YouTube
          </a>

          <a href="https://x.com/Blanfils" target="_blank">
            🐦 Twitter/X
          </a>

        </div>
      </section>

      {/* LEAKS */}
      <section className="section">
        <h2>🔥 HYPEX</h2>

        <a
          className="twitter-timeline"
          data-height="600"
          href="https://twitter.com/HYPEX"
        >
          Tweets by HYPEX
        </a>
      </section>

      <section className="section">
        <h2>⚡ Shiina</h2>

        <a
          className="twitter-timeline"
          data-height="600"
          href="https://twitter.com/ShiinaBR"
        >
          Tweets by ShiinaBR
        </a>
      </section>

      <section className="section">
        <h2>📰 Fortnite Official</h2>

        <a
          className="twitter-timeline"
          data-height="600"
          href="https://twitter.com/FortniteGame"
        >
          Tweets by Fortnite
        </a>
      </section>

      {/* PATCH NOTES */}
      <section className="section">
        <h2>📋 Update Summary</h2>

        <div className="grid">

          <div className="card">
            <h3>🗺️ Map Changes</h3>
            <p>New POIs and map updates added.</p>
          </div>

          <div className="card">
            <h3>🔫 Weapon Balancing</h3>
            <p>Damage and loot pool updated.</p>
          </div>

          <div className="card">
            <h3>🎁 New Cosmetics</h3>
            <p>New skins, emotes and bundles released.</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Fortnite Leaks Central</p>
      </footer>

      {/* TWITTER SCRIPT */}
      <script
        async
        src="https://platform.twitter.com/widgets.js"
      ></script>

    </div>
  );
}