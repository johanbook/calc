<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Calculator</title>
	<meta name="description" content="Calculator" />
</svelte:head>

<section>
	<h1 class="underline font-bold">Calculator</h1>
	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		background: linear-gradient(to right, purple 0%, #dd4c4f 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
