<script>
	import './styles.css';

	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { webVitals } from '$lib/vitals';

	import { onMount } from 'svelte';
	import { screenType, isIframe, screenSize } from '$lib/store/store';
	import { getDeviceType, getScreenSize } from '$lib/functions/utils';

	import Sidebar from '$lib/components/Sidebar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { goto } from '$app/navigation';
	// import './app.css';

	export let data;
	let Geometry;

	function handleNavigate(section) {
		goto(`/${section === 'home' ? '' : section}`);
	}

	$: currentSection = $page.url.pathname === '/' ? 'home' : $page.url.pathname.slice(1);

	$: if (browser && data?.analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId: data.analyticsId
		});
	}

	function handleScreen() {
		// screen size
		screenSize.set(getScreenSize());

		// device type
		screenType.set(getDeviceType());
		isIframe.set(window.location !== window.parent.location);
	}

	onMount(async () => {
		// webgl
		const module = await import('$lib/graphics/three.svelte');
		Geometry = module.default;

		handleScreen();
		window.addEventListener('resize', () => handleScreen());

		return () => {
			window.removeEventListener('resize', () => handleScreen());
		};
	});
</script>

<svelte:head>
	<title>LinkedOut</title>
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta name="author" content="AUFBAU" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<!-- <link
		rel="preload"
		href="/fonts/NB-Architekt-Pro-Light.woff"
		as="font"
		type="font/woff"
		crossorigin="anonymous"
	/> -->

	<!-- <link
		rel="preload"
		href="/fonts/NB-Architekt-Pro-Bold.woff"
		as="font"
		type="font/woff"
		crossorigin="anonymous"
	/> -->

	<!-- <link
	rel="preload"
	href="/fonts/Dahlia-Medium.woff2"
	as="font"
	type="font/woff2"
	crossorigin="anonymous"
/> -->
</svelte:head>

{#if Geometry}
	<svelte:component this={Geometry} />
{:else}
	<div class="loading">loading.</div>
{/if}

<div class="app-container">
	<Sidebar
		{currentSection}
		onNavigate={handleNavigate}
		organizations={data?.organizations || []}
	/>

	<main class="main-content">
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app-container {
		display: flex;
		min-height: 100vh;
	}

	.main-content {
		flex: 1;
		margin-left: 240px;
		padding: 3rem;
		padding-bottom: 6rem;
	}

	.loading {
		position: absolute;
		font-style: italic;
		font-family: serif;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 10px;
		font-size: 12px;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		width: 100%;
		height: 100%;
	}

	@media (max-width: 1024px) {
		.main-content {
		margin-left: 0;
		padding: 2rem;
		}
	}

	@media (max-width: 768px) {
		.main-content {
		padding: 1.5rem;
		}
	}
</style>
