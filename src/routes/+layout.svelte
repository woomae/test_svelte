<script>
	import '../../static/style.css';
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
	import Hero from './Hero.svelte';
</script>

<Navbar />
<Hero />
<slot />
<Footer />
