<script>
    import { fsd } from '$lib'
    export let combination
</script>

<div use:fsd={'entities/Hotkey'}>
    <span class="combination">{combination}</span>
</div>

<style>
    .combination {
        font-size: 48px;
    }
</style>