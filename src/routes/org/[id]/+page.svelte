<script>
	import OrganizationView from '$lib/components/OrganizationView.svelte';

	export let data;

	$: organization = data.organization;
</script>

{#if organization}
	<OrganizationView {organization} />
{:else}
	<div class="not-found">
		<h1>Organization not found</h1>
		<p>The requested organization doesn't exist.</p>
		<a href="/">Return home</a>
	</div>
{/if}

<style>
	.not-found {
		padding: 2rem;
		text-align: center;
	}

	.not-found h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	.not-found p {
		color: #666;
		margin-bottom: 1rem;
	}

	.not-found a {
		color: var(--accent);
		text-decoration: underline;
	}
</style>
