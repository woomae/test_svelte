<script>
	import Button from '$lib/Button.svelte';

	export let form;

	$: console.log(form);
</script>

<div class="container">
	<h2>Contact us</h2>
	<form method="POST">
		<div class="form-group">
			<label class="col-12 control-label" for="name">Name</label>
			<div class="col-12">
				<input id="name" name="name" type="text" placeholder="Your name" class="form-control" />
			</div>
		</div>
		<div class="form-group">
			<label class="col-12 control-label" for="email">Your E-mail</label>
			<div class="col-12">
				<input id="email" name="email" type="text" placeholder="Your email" class="form-control" />
			</div>
		</div>
		<div class="form-group">
			<label class="col-12 control-label" for="message">Your message</label>
			<div class="col-12">
				<textarea
					class="form-control"
					id="message"
					name="message"
					placeholder="Please enter your message here ..."
					rows="5"
				/>
			</div>
		</div>
		<div class="form-group">
			<Button type="submit" class="btn btn-primary">Submit</Button>
		</div>
	</form>
</div>

<style>
	.container {
		padding: 2rem 0;
	}
	h2 {
		font-weight: 500;
		font-size: 2rem;
	}
	input,
	textarea {
		max-width: 100%;
		width: 100%;
		padding: 0.75rem 1rem;
		border-radius: 0.25rem;
		border: 1px solid #999;
		box-sizing: border-box;
	}
	.form-group {
		margin-bottom: 1.5rem;
	}
	label {
		display: block;
		margin-bottom: 0.5rem;
	}
</style>
