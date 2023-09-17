<script>
	import { page } from '$app/stores';

	const navs = [
		{
			title: 'Home',
			href: '/'
		},
		{
			title: 'About',
			href: '/about'
		},
		{
			title: 'Contact',
			href: '/contact'
		},
		{
			title: 'Where',
			href: '/where'
		}
	];

	let isOpen = false; // 내비게이션 메뉴의 열림/닫힘 상태

	function toggleNav() {
		isOpen = !isOpen;
	}

	$: routeId = $page.route.id;
</script>

<nav>
	<div class="container">
		<div class="header">
			<h1>Main Page</h1>
			<button class="hamburger" on:click={toggleNav}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z" />
				</svg>
			</button>
		</div>
		<ul class:open={isOpen}>
			{#each navs as { title, href }}
				<li>
					<a {href} class:active={routeId == href} {title}>{title}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	nav {
		padding: 0.5em;
		background-color: #343a40;
		color: white;
	}
	.header {
		display: flex;
		justify-content: space-between;
	}
	.container {
		display: flex;
		align-items: center;
	}
	.hamburger {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		outline: none;
	}

	/* 내비게이션 메뉴가 열렸을 때의 스타일 */
	ul.open {
		display: flex;
		flex-direction: row;
	}
	ul {
		display: flex;
		margin: 0;
		margin-left: auto;
		list-style: none;
		font-size: 1em;
	}
	li {
		margin-right: 20px;
	}
	@media (max-width: 767px) {
		.hamburger {
			display: block; /* 화면 크기가 768px 이하일 때 표시 */
			position: absolute; /* 절대 위치로 설정 */
			top: 0; /* 화면 상단에 위치 */
			right: 0; /* 화면 오른쪽에 위치 */
			background: none;
			border: none;
			cursor: pointer;
			outline: none;
			margin: 10px; /* 햄버거 버튼 주변의 간격 설정 */
		}
		ul {
			display: none; /* 기본적으로 숨김 */
		}
	}
	h1 {
		margin: 0;
		margin-left: 1rem;
		font-size: 1.3em;
		font-weight: normal;
	}
	a {
		text-decoration: none;
		color: #aaa;
	}
	.active {
		color: white;
	}
</style>
