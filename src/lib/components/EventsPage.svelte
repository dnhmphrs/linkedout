<script>
  export let events = [];
  
  function formatDate(date, dateEnd) {
    const d = new Date(date);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    
    if (dateEnd) {
      const dEnd = new Date(dateEnd);
      if (d.getMonth() === dEnd.getMonth()) {
        return `${d.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}–${dEnd.getDate()}, ${d.getFullYear()}`;
      }
      return `${d.toLocaleDateString('en-US', options)}–${dEnd.toLocaleDateString('en-US', options)}`;
    }
    
    return d.toLocaleDateString('en-US', options);
  }
</script>

<div class="events-page">
  <header class="header">
    <h1>Key Events 2025-2026</h1>
    <p>Strategic gatherings in Berlin's ecosystem.</p>
  </header>

  <div class="events-list">
    {#each events as event}
      <div class="event-card">
        <div class="event-date">
          {formatDate(event.date, event.date_end)}
        </div>
        <h2 class="event-title">{event.title}</h2>
        <div class="event-location">{event.location}</div>
        {#if event.themes}
          <div class="event-themes">{event.themes}</div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .events-page {
    max-width: 900px;
  }

  .header {
    margin-bottom: 2.5rem;
  }

  .header h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .header p {
    font-size: 1.05rem;
    color: var(--text-secondary);
  }

  .events-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .event-card {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1.5rem;
    transition: all 0.2s ease;
  }

  .event-card:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transform: translateY(-1px);
  }

  .event-date {
    font-weight: 600;
    color: var(--accent);
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  .event-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .event-location {
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
  }

  .event-themes {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.5;
  }
</style>
