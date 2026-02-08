<script>
  export let locations = [];
</script>

<div class="locations-page">
  <header class="header">
    <h1>Key Locations</h1>
    <p>Physical hubs of Berlin's strategic ecosystem.</p>
  </header>

  <div class="locations-list">
    {#each locations as location}
      <div class="location-card">
        <h2 class="location-address">{location.address}</h2>
        <div class="location-orgs">
          <span class="label">Organizations:</span>
          {location.organizations}
        </div>
        {#if location.description}
          <p class="location-desc">{location.description}</p>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .locations-page {
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

  .locations-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .location-card {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1.5rem;
    transition: all 0.2s ease;
  }

  .location-card:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transform: translateY(-1px);
  }

  .location-address {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .location-orgs {
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
  }

  .label {
    font-weight: 600;
    color: var(--text);
  }

  .location-desc {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.95rem;
    margin-top: 0.75rem;
  }
</style>
