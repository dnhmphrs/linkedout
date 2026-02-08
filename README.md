# LinkedOut - SvelteKit Components

Clean, minimal SvelteKit components for the Berlin strategic contacts platform.

## Files

### Data
- `linkedout-data.json` - Complete data structure with organizations, people, events, and locations

### Components
- `+layout.svelte` - Root layout wrapper
- `app.css` - Global styles with CSS variables
- `Sidebar.svelte` - Navigation sidebar with search
- `PersonCard.svelte` - Card component for individual profiles
- `OrganizationView.svelte` - Full organization page with people grid
- `HomePage.svelte` - Landing page
- `EventsPage.svelte` - Events listing
- `LocationsPage.svelte` - Locations listing
- `Footer.svelte` - ARPNET acknowledgment footer

## Data Structure

### Organization
```json
{
  "id": "string",
  "name": "string",
  "category": "investigative|advisory|transparency|think-tank",
  "description": "string",
  "website": "string",
  "address": "string",
  "people": [...],
  "notes": [{"title": "string", "content": "string"}],
  "divisions": [{"name": "string", "people": [...]}]
}
```

### Person
```json
{
  "name": "string",
  "role": "string",
  "email": "string",
  "expertise": "string",
  "background": "string",
  "verified": boolean,
  "note": "string"
}
```

## Usage

### Basic Page Structure
```svelte
<script>
  import Sidebar from '$lib/Sidebar.svelte';
  import Footer from '$lib/Footer.svelte';
  import data from '$lib/linkedout-data.json';
</script>

<Sidebar organizations={data.organizations} />
<main class="main-content">
  <!-- Your content here -->
</main>
<Footer />
```

### Organization Page
```svelte
<script>
  import OrganizationView from '$lib/OrganizationView.svelte';
  import data from '$lib/linkedout-data.json';
  
  export let params;
  $: org = data.organizations.find(o => o.id === params.id);
</script>

<OrganizationView organization={org} />
```

## Styling

The design uses CSS variables for theming:
- Modern, clean lines
- Subtle borders and shadows
- Card-based layouts for profiles
- Hover effects for interactivity
- Responsive grid system

### Key Variables
- `--bg`: Main background (#ffffff)
- `--bg-alt`: Alternate background (#fafafa)
- `--text`: Primary text (#1a1a1a)
- `--accent`: Accent color (#0066cc)
- `--border`: Border color (#e5e5e5)
- `--verified`: Verified badge color (#059669)

## Notes

- All emails marked with verified status
- Search functionality in sidebar
- Responsive design (mobile-friendly)
- Clean card-based UI for person profiles
- Organizations can have divisions (e.g., Agora Strategy)