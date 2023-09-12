<script>
	import Button from '$lib/Button.svelte';
	import CallButton from '$lib/CallButton.svelte';
	import Seo from '$lib/Seo.svelte';
</script>

<div class="container flex">
	<div class="what">
		<h3>What We Do?</h3>
		<p>
			가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
			가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
			가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
		</p>
		<p>
			가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
			가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
			가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
		</p>
		<p>
			가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
			가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
			가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
		</p>
		<CallButton class="secondary" id="a-button" size="medium">전화 걸기</CallButton>
	</div>
	<div class="spacer" />
	<!-- 간격을 위한 빈 <div> 추가 -->
	<div class="contact">
		<h3>Contact Us</h3>
		<p><strong>Start Something</strong></p>
		<p>순천시</p>
		<p>phone: 010-1234-5678</p>
		<p>email: <a href="mailto:name@example.com">name@example.com</a></p>
	</div>
</div>
<Seo title="About | Business Frontpage" description="sample" type="WebPage" />

<style>
	.flex {
		display: flex;
		/* flex-direction: column; */ /* 세로 배치를 사용하지 않고 가로로 배치하므로 주석 처리 */
		margin-bottom: 3rem;
		padding: 5em;
	}
	.what,
	.contact {
		flex: 1;
	}
	.spacer {
		width: 3rem; /* 원하는 간격 크기로 설정 */
	}
	h3 {
		padding-bottom: 0.5rem;
		margin-bottom: 0.5rem;
		font-size: 2rem;
		font-weight: 500;
		border-bottom: 1px solid #ddd;
	}
	a {
		text-decoration: none;
		color: var(--primary-color);
	}
	a:hover {
		text-decoration: underline;
	}
</style>
