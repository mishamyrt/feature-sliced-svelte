<script>
	import { Logo, Subtitle } from "$entities";
	import { fsd } from "$lib";
</script>

<div class="hero" use:fsd={'widgets/Hero'}>
    <Logo />
    <Subtitle />
</div>

<style>
    .hero {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
</style>
