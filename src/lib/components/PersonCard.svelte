<script>
  export let person;
</script>

<div class="card">
  <div class="card-header">
    <div class="name">
      {person.name}
      {#if person.verified}
        <span class="badge">✓ Verified Email</span>
      {/if}
    </div>
    <div class="role">{person.role}</div>
  </div>

  <div class="card-body">
    {#if person.email}
      <div class="detail">
        <div class="label">Email</div>
        <div class="email">{person.email}</div>
      </div>
    {/if}

    {#if person.expertise}
      <div class="detail">
        <div class="label">Expertise</div>
        <div class="value">{person.expertise}</div>
      </div>
    {/if}

    {#if person.background}
      <div class="detail">
        <div class="label">Background</div>
        <div class="value">{person.background}</div>
      </div>
    {/if}

    {#if person.note}
      <div class="detail">
        <div class="label">Note</div>
        <div class="value note-text">{person.note}</div>
      </div>
    {/if}
  </div>
</div>

<style>
  .card {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1.25rem;
    transition: all 0.2s ease;
  }

  .card:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transform: translateY(-1px);
  }

  .card-header {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
  }

  .name {
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: 0.375rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    background: var(--verified);
    color: white;
    font-size: 0.7rem;
    font-weight: 600;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
  }

  .role {
    font-size: 0.9rem;
    color: var(--text-secondary);
    font-style: italic;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }

  .detail {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .label {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-tertiary);
  }

  .value {
    font-size: 0.9rem;
    color: var(--text);
    line-height: 1.5;
  }

  .email {
    font-family: 'SF Mono', 'Monaco', 'Courier New', monospace;
    font-size: 0.875rem;
    color: var(--accent);
    background: var(--bg-alt);
    padding: 0.5rem;
    border-radius: 4px;
    word-break: break-all;
  }

  .note-text {
    color: var(--text-secondary);
    font-size: 0.875rem;
  }
</style>
