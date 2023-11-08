<script>
    import CodeBlock from './CodeBlock.svelte'
    import { layersCode } from '$entities'
    import { fsd } from '$lib'
</script>

<div use:fsd={'widgets/Layers'}>
    <h2>Layers</h2>
    <p>Now when creating a new component, use action to set the FSD layer. The allowed layer names can be found in the FSD documentation.</p>
    <CodeBlock value={layersCode} />
</div>