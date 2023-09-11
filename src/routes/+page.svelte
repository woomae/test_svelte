<script>
	import What from './What.svelte';

	export let data;

	$: ({ posts } = data);
</script>

<What />

<div class="container">
	<div class="flex-grid">
		{#each posts as { title, url }}
			<div class="flex-item">
				<img src={url} alt={title} />
				<p>{title}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.flex-grid {
		display: flex;
		flex-wrap: wrap; /* 줄 바꿈 설정 */
		gap: 2rem; /* 간격 설정 */
		padding: 2rem 0;
	}
	.flex-item {
		flex: 1; /* 동일한 너비로 설정, 여기서 1은 비율을 나타냅니다 */
		max-width: calc(33.33% - 1rem); /* 각 항목의 최대 너비 (간격 고려) */
		margin-right: 1rem; /* 오른쪽 간격 설정 */
	}
	img {
		width: 100%;
		height: auto;
		object-fit: cover;
		object-position: center;
	}
</style>
