<script>
    import { fsd } from '$lib'
    import { CopyButton } from '$features'

    export let value
</script>

<div use:fsd={'widgets/CodeBlock'} class="container">
    <div class="code">
        <pre><code>{value}</code></pre>
    </div>
    <div class="copy">
        <CopyButton {value} />
    </div>
    
</div>

<style>
    .code {
        background-color: var(--color-background-secondary);
        padding: 7px 20px;
        margin: 0 -20px;
        border-radius: 8px;
    }

    .container {
        position: relative;
    }

    .copy {
        position: absolute;
        top: 4px;
        right: -14px;
    }
</style>