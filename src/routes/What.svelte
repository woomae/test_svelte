<script>
	import Button from '$lib/Button.svelte';
</script>

<div class="container grid">
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
		<Button class="secondary" id="a-button" size="small">Call to Action</Button>
	</div>
	<div class="contact">
		<h3>Contact Us</h3>
		<p><strong>Start Something</strong></p>
		<p>순천시</p>
		<p>phone: 010-1234-5678</p>
		<p>email: <a href="mailto:name@example.com">name@example.com</a></p>
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 2em;
	}
	.what {
		grid-column: span 8;
	}
	.contact {
		grid-column: span 4;
	}
	h3 {
		padding-bottom: 0.5em;
		margin-bottom: 0.5em;
		font-size: 2em;
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
