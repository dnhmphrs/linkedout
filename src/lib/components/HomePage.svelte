<script>
  // No props needed for home page
</script>

<div class="home">
  <header class="hero">
    <h1>LinkedOut</h1>
    <p>A sketch of Berlin's geopolitical, investigative, and strategic advisory network.</p>
  </header>

  <div class="intro-grid">
    <div class="intro-card">
      <h2>The Investigative Commons</h2>
      <p>Forensis, Forensic Architecture, and ECCHR operate from shared Kreuzberg spaces—challenging state and corporate violence through spatial forensics and strategic litigation.</p>
      <div class="location">Zossener Str. 55-58, Kreuzberg</div>
    </div>

    <div class="intro-card">
      <h2>Strategic Advisory</h2>
      <p>Firms at the intersection of capital markets and geopolitics, providing "political investment banking."</p>
    </div>

    <div class="intro-card">
      <h2>Digital Rights & Algorithmic Accountability</h2>
      <p>Organizations monitoring automated decision-making systems, AI governance, and the erosion of digital rights.</p>
    </div>
  </div>
</div>

<style>
  .home {
    max-width: 900px;
  }

  .hero {
    margin-bottom: 3rem;
  }

  .hero h1 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .hero p {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  .intro-grid {
    display: grid;
    gap: 1.5rem;
  }

  .intro-card {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1.75rem;
  }

  .intro-card h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .intro-card p {
    color: var(--text-secondary);
    line-height: 1.7;
  }

  .location {
    margin-top: 0.75rem;
    font-size: 0.9rem;
    color: var(--text-tertiary);
    font-style: italic;
  }
</style>
