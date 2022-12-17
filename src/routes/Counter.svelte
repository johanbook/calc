<script lang="ts">
	import evaluate from './math';

	let expression = '';
	let previousExpression = '';
	let result = '';

	function evaluteExpression() {
		if (!expression) {
			result = 'Input required';
			return;
		}

		previousExpression = expression;
		result = evaluate(expression);
	}
</script>

<form class="counter">
	<input placeholder="Enter an arithmetic expression" type="text" bind:value={expression} />
	<button on:click|preventDefault={evaluteExpression} aria-label="Calculate" type="submit">
		Submit
	</button>
</form>

{#if result}
	<div class="result">
		<div class="part-result">
			<p class="underline"><b>Input</b></p>
			{previousExpression}
		</div>

		<div class="part-result">
			<p><b>Result</b></p>
			<p>{result}</p>
		</div>
	</div>
{/if}

<style>
	.counter {
		display: flex;
		width: 100%;
	}

	.counter input {
		/* min-width: 200px; */
		width: 100%;
	}

	.counter button {
		margin-left: 5px;
		padding: 10px;
	}

	.result {
		border-radius: 1%;
		border: 1px solid var(--color-bg-1);
		margin-top: 20px;
		width: 100%;
	}

	.part-result {
		padding-left: 10px;
		padding-right: 10px;
	}
</style>
