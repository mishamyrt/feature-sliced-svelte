<script>
  import { layersCode } from '$entities'
  import { CopyCodeBlock } from '$features'
  import { fsd } from '$lib'
</script>

<div use:fsd={'widgets/Layers'}>
  <h2>Layers</h2>
  <p>
    Now when creating a new component, use action to set the FSD layer. The allowed
    layer names can be found in the FSD documentation.
  </p>
  <CopyCodeBlock value={layersCode} />
</div>
