<script>
	import What from './What.svelte';
	import Seo from '$lib/Seo.svelte';
	export let data;
	import Topdiv from './Topdiv.svelte';
	$: ({ posts } = data);
</script>

<Topdiv />
<What />
<div class="container">
	<div class="flex-grid">
		{#each posts as { id, title, image, body }}
			<div class="flex-item">
				<h2>{title.substring(0, 20)}</h2>
				<img src={image} alt={title} />
				<p>{body.substring(0, 80)}</p>
			</div>
		{/each}
	</div>
</div>
<Seo title="sample" description="sample" type="WebSite" />

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
