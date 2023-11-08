<script>
    import { fsd } from '$lib'
</script>

<div class="logo" use:fsd={'entities/Logo'}>
    <img class="icon" src="/logo.svg?url" alt="Feature Sliced Svelte Logo" />
    <h1 class="text">Feature Sliced Svelte</h1>
</div>

<style>
    .icon {
        width: 60px;
    }

    .text {
        margin: 0;
        font-size: 48px;
    }

    .logo {
        display: flex;
        gap: 20px;
        margin-left: -80px;
    }
</style>