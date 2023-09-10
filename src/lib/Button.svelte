<script>
	export let size = 'medium';
</script>

<button class:small={size == 'small'} class:medium={size == 'medium'} {...$$restProps}>
	<slot />
</button>

<style>
	button {
		border: none;
		background-color: var(--primary-color);
		color: white;
		font-size: 1em;
	}
	.medium {
		padding: 0.75em 1.5em;
		border-radius: 0.45em;
	}

	.small {
		padding: 0.25em 0.5em;
		border-radius: 0.25em;
	}
</style>
