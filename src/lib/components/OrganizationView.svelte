<script>
  import PersonCard from './PersonCard.svelte';
  
  export let organization;
  
  $: allPeople = organization.divisions 
    ? organization.divisions.flatMap(d => d.people || [])
    : organization.people || [];
</script>

<div class="org-view">
  <header class="header">
    <h1>{organization.full_name || organization.name}</h1>
    {#if organization.short_name && organization.short_name !== organization.name}
      <div class="short-name">({organization.short_name})</div>
    {/if}
    <p class="description">{organization.description}</p>
  </header>

  <div class="meta-grid">
    {#if organization.website}
      <div class="meta-item">
        <div class="meta-label">Website</div>
        <div class="meta-value">
          <a href={organization.website} target="_blank" rel="noopener">
            {organization.website.replace('https://', '')}
          </a>
          {#if organization.website_alt}
            <br>
            <a href={organization.website_alt} target="_blank" rel="noopener">
              {organization.website_alt.replace('https://', '')}
            </a>
          {/if}
        </div>
      </div>
    {/if}

    {#if organization.address}
      <div class="meta-item">
        <div class="meta-label">Address</div>
        <div class="meta-value">{organization.address}</div>
      </div>
    {/if}

    {#if organization.founded}
      <div class="meta-item">
        <div class="meta-label">Founded</div>
        <div class="meta-value">{organization.founded}</div>
      </div>
    {/if}

    {#if organization.focus}
      <div class="meta-item">
        <div class="meta-label">Focus</div>
        <div class="meta-value">{organization.focus}</div>
      </div>
    {/if}
  </div>

  <!-- {#if organization.notes && organization.notes.length}
    {#each organization.notes as note}
      <div class="note">
        <div class="note-title">{note.title}</div>
        <p>{note.content}</p>
      </div>
    {/each}
  {/if} -->

  {#if organization.investigations && organization.investigations.length}
    <section class="section">
      <h2>Key Investigations</h2>
      {#each organization.investigations as investigation}
        <p class="investigation">{investigation}</p>
      {/each}
    </section>
  {/if}

  {#if organization.divisions && organization.divisions.length}
    {#each organization.divisions as division}
      <section class="section">
        <h2>{division.name}</h2>
        {#if division.people && division.people.length}
          <div class="people-grid">
            {#each division.people as person}
              <PersonCard {person} />
            {/each}
          </div>
        {/if}
      </section>
    {/each}
  {:else if allPeople.length}
    <section class="section">
      <h2>People</h2>
      <div class="people-grid">
        {#each allPeople as person}
          <PersonCard {person} />
        {/each}
      </div>
    </section>
  {/if}

  {#if organization.additional_info}
    <div class="additional-info">
      <p>{organization.additional_info}</p>
    </div>
  {/if}
</div>

<style>
  .org-view {
    max-width: 1200px;
  }

  .header {
    margin-bottom: 2rem;
  }

  .header h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }

  .short-name {
    font-size: 1.125rem;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
  }

  .description {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.7;
    max-width: 800px;
  }

  .meta-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
    padding: 1.5rem;
    background: var(--bg-alt);
    border-radius: 8px;
    border: 1px solid var(--border);
  }

  .meta-item {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
  }

  .meta-label {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-tertiary);
  }

  .meta-value {
    font-size: 0.9rem;
    color: var(--text);
    line-height: 1.5;
  }

  .note {
    background: #202020;
    border-left: 3px solid #f59e0b;
    padding: 1.25rem;
    border-radius: 4px;
    margin: 1.5rem 0;
  }

  .note-title {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text);
  }

  .note p {
    color: var(--text);
    line-height: 1.6;
    font-size: 0.9rem;
  }

  .section {
    margin: 2.5rem 0;
  }

  .section h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid var(--border);
  }

  .investigation {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.6;
  }

  .investigation::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--accent);
    font-weight: bold;
  }

  .people-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 1.25rem;
  }

  .additional-info {
    margin-top: 2rem;
    padding: 1.25rem;
    background: var(--bg-alt);
    border-radius: 8px;
    border: 1px solid var(--border);
  }

  .additional-info p {
    color: var(--text-secondary);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .people-grid {
      grid-template-columns: 1fr;
    }
    
    .meta-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
