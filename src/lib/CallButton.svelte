<script>
	export let size = 'medium';
	function makePhoneCall() {
		const phoneNumber = '01046886324'; // 전화를 걸고자 하는 전화번호
		const telLink = `tel:${phoneNumber}`;
		window.location.href = telLink;
	}
</script>

<button
	on:click={makePhoneCall}
	class:small={size == 'small'}
	class:medium={size == 'medium'}
	{...$$restProps}
>
	<slot />
</button>

<style>
	button {
		border: none;
		background-color: var(--primary-color);
		color: white;
		font-size: 1rem;
		margin-bottom: auto;
		cursor: pointer; /* 커서를 포인터로 변경하여 클릭 가능한 것처럼 표시 */
		transition: background-color 0.3s ease;
	}
	.medium {
		padding: 0.5em 1.5em;
		border-radius: 0.45em;
	}

	.small {
		padding: 0.25em 0.5em;
		border-radius: 0.25em;
	}
	button:hover {
		background-color: #0056b3; /* 호버 시 배경색 변경 */
	}
</style>
