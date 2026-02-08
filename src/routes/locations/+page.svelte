<script>
	import LocationsPage from '$lib/components/LocationsPage.svelte';

	export let data;
</script>

<LocationsPage locations={data.locations} />
