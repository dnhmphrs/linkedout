<script>
	import OrganizationView from '$lib/components/OrganizationView.svelte';

	export let data;
	export let params;

	$: organization = data.organizations?.find((org) => org.id === params.id);
</script>

{#if organization}
	<OrganizationView {organization} />
{:else}
	<div class="not-found">
		<h1>Organization not found</h1>
		<p>The organization "{params.id}" doesn't exist.</p>
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
