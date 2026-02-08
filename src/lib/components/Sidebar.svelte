<script>
  import { page } from '$app/stores';
  
  export let organizations = [];
  export let searchQuery = '';

  export let currentSection = 'home';
  export let onNavigate = () => {};
  
  $: categories = {
    investigative: organizations.filter(o => o.category === 'investigative'),
    advisory: organizations.filter(o => o.category === 'advisory'),
    transparency: organizations.filter(o => o.category === 'transparency'),
    'think-tank': organizations.filter(o => o.category === 'think-tank')
  };
</script>

<aside class="sidebar">
  <div class="brand">
    <h1><a href="/">LinkedOut</a></h1>
    <!-- <p>Berlin strategic contacts</p> -->
  </div>

  <div class="search">
    <input
      type="text"
      placeholder="Search..."
      bind:value={searchQuery}
      on:input
    />
  </div>

  <nav>
    <div class="nav-section">
      <div class="nav-title">Overview</div>
      <a href="/" class="nav-link" class:active={$page.url.pathname === '/'}>
        Home
      </a>
    </div>

    {#if categories.investigative.length}
    <div class="nav-section">
      <div class="nav-title">Investigative</div>
      {#each categories.investigative as org}
        <a 
          href="/org/{org.id}" 
          class="nav-link"
          class:active={$page.url.pathname === `/org/${org.id}`}
        >
          {org.name}
        </a>
      {/each}
    </div>
    {/if}

    {#if categories.advisory.length}
    <div class="nav-section">
      <div class="nav-title">Strategic Advisory</div>
      {#each categories.advisory as org}
        <a 
          href="/org/{org.id}" 
          class="nav-link"
          class:active={$page.url.pathname === `/org/${org.id}`}
        >
          {org.name}
        </a>
      {/each}
    </div>
    {/if}

    {#if categories.transparency.length}
    <div class="nav-section">
      <div class="nav-title">Transparency</div>
      {#each categories.transparency as org}
        <a 
          href="/org/{org.id}" 
          class="nav-link"
          class:active={$page.url.pathname === `/org/${org.id}`}
        >
          {org.name}
        </a>
      {/each}
    </div>
    {/if}

    {#if categories['think-tank'].length}
    <div class="nav-section">
      <div class="nav-title">Think Tanks</div>
      {#each categories['think-tank'] as org}
        <a 
          href="/org/{org.id}" 
          class="nav-link"
          class:active={$page.url.pathname === `/org/${org.id}`}
        >
          {org.name}
        </a>
      {/each}
    </div>
    {/if}

    <div class="nav-section">
      <div class="nav-title">Context</div>
      <a 
        href="/events" 
        class="nav-link"
        class:active={$page.url.pathname === '/events'}
      >
        Events 2025-2026
      </a>
      <a 
        href="/locations" 
        class="nav-link"
        class:active={$page.url.pathname === '/locations'}
      >
        Key Locations
      </a>
    </div>
  </nav>
</aside>

<style>
  .sidebar {
    width: var(--sidebar);
    background: var(--bg-alt);
    border-right: 1px solid var(--border);
    position: fixed;
    height: 100vh;
    overflow-y: auto;
    padding: 2rem 0;
  }

  .brand {
    padding: 0 1.5rem 1.5rem;
    border-bottom: 1px solid var(--border);
    margin-bottom: 1.5rem;
  }

  .brand h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .brand h1 a {
    color: var(--text);
    font-size: 2.0rem;
  }

  .brand p {
    font-size: 0.875rem;
    color: var(--text-tertiary);
  }

  .search {
    padding: 0 1.5rem 1.5rem;
    border-bottom: 1px solid var(--border);
    margin-bottom: 1.25rem;
  }

  .search input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--border);
    border-radius: 6px;
    font-size: 0.875rem;
    background: var(--bg);
  }

  .search input:focus {
    outline: none;
    border-color: var(--accent);
  }

  .nav-section {
    margin-bottom: 1.5rem;
  }

  .nav-title {
    padding: 0.5rem 1.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-tertiary);
  }

  .nav-link {
    display: block;
    padding: 0.5rem 1.5rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
    transition: all 0.15s ease;
    border-left: 2px solid transparent;
  }

  .nav-link:hover {
    background: var(--bg);
    color: var(--accent);
  }

  .nav-link.active {
    background: var(--bg);
    color: var(--accent);
    border-left-color: var(--accent);
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .sidebar {
      width: 100%;
      position: relative;
      height: auto;
    }
  }
</style>
