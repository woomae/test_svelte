<script>
	export let form;
	import Topdiv from './Topdiv.svelte';
</script>

<Topdiv />
<div class="wrapper">
	<form method="POST" class="container formbody">
		<div class="input">
			<label for="">이름 or 업체명</label>
			<input name="name" type="text" placeholder="홍길동" required />
		</div>
		<div class="input">
			<label for="">이메일</label>
			<input name="email" type="email" placeholder="example@example.com" required />
		</div>
		<div class="input">
			<label for="">연락처</label>
			<input name="phone" type="text" placeholder="010-1234-5678" required />
		</div>
		<div class="input">
			<label for="">제목</label>
			<input name="subject" type="text" value="" required />
		</div>
		<div class="input">
			<label for="">본문</label>
			<textarea name="body" rows="6" value="" required />
		</div>
		<h4>개인정보 수집 및 이용 동의</h4>
		<div>
			<!-- prettier-ignore -->
			<textarea class="form-control" readonly disabled>
■ 개인정보의수집 및 이용목적
‘문의하기’를 이용하시고자 할 경우, 해당 서비스를 위한 최소한의 개인정보만을 수집합니다.
■ 수집하는 개인정보의 항목
이름, 전화번호, 이메일 등
■개인정보의 보유 및 이용기간
회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외없이 해당정보를 파기합니다.</textarea>
		</div>
		<div>
			<label class="form-checkbox-text"
				><input class="check-privacy" type="checkbox" required /> 개인정보 수집 및 이용에 동의합니다.</label
			>
		</div>
		<button type="submit">Send</button>
	</form>
	<p class="success">{form?.success || ''}</p>
</div>

<style>
	.wrapper {
		max-width: 800px;
		margin: 2em auto;
	}
	.container {
		max-width: 400px;
		margin: 1rem;
		margin-left: auto;
		margin-right: auto;
	}
	.input {
		display: grid;
		margin-bottom: 1.5em;
	}
	label {
		font-weight: 600;
		margin-bottom: 0.25em;
		color: #555;
	}
	input {
		padding: 5px;
		background-color: #f5f5f5;
		border: 1px solid #e5e5e5;
		border-radius: 3px;
		background-color: #f5f5f5;
		box-shadow: none;
	}
	textarea {
		padding: 5px;
		background-color: #f5f5f5;
		border: 1px solid #e5e5e5;
		border-radius: 3px;
		background-color: #f5f5f5;
		box-shadow: none;
	}
	button {
		cursor: pointer;
		padding: 0.5em 1em;
		margin-top: 0.5rem;
		border-radius: 4px;
		border: 1px solid rgb(5, 151, 64);
		background-color: rgb(5, 151, 64);
		color: white;
	}
	.success {
		color: #0a5;
	}
	.form-control {
		display: block;
		width: 100%;
		height: 8rem;
		margin-bottom: 0.5rem;
		padding: 6px 12px;
		font-size: 14px;
		line-height: 1.5;
		color: #555555;
		background-color: #ffffff;
		background-image: none;
		border: 1px solid #cccccc;
		border-radius: 4px;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		-webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
		transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
	}
	.form-checkbox-text {
		font-size: 12px;
		font-weight: normal;
	}

	@media screen and (max-width: 767px) {
		.formbody {
			display: flex;
		}
	}
</style>
