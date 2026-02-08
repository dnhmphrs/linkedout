<script>
	import EventsPage from '$lib/components/EventsPage.svelte';

	export let data;
</script>

<EventsPage events={data.events} />
