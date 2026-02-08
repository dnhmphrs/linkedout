<script>
	import { page } from '$app/stores';
	import HomePage from '$lib/components/HomePage.svelte';
	import OrganizationView from '$lib/components/OrganizationView.svelte';
	import EventsPage from '$lib/components/EventsPage.svelte';
	import LocationsPage from '$lib/components/LocationsPage.svelte';
  
	export let data;
  
	$: currentSection = $page.url.pathname === '/' ? 'home' : $page.url.pathname.slice(1);
	$: organizations = data?.organizations || [];
	$: events = data?.events || [];
	$: locations = data?.locations || [];
	$: currentOrg = organizations.find((org) => org.id === currentSection);
  </script>
  
  {#if currentSection === 'home'}
	<HomePage/>
  {:else if currentSection === 'events'}
	<EventsPage {events} />
  {:else if currentSection === 'locations'}
	<LocationsPage {locations} />
  {:else if currentOrg}
	<OrganizationView organization={currentOrg} />
  {:else}
	<div class="not-found">
	  <h1>Section not found</h1>
	  <p>The section "{currentSection}" doesn't exist.</p>
	</div>
  {/if}
  
  <style>
	.not-found {
	  padding: 2rem;
	}
	
	.not-found h1 {
	  font-size: 2rem;
	  margin-bottom: 1rem;
	}
	
	.not-found p {
	  color: #666;
	}
  </style>