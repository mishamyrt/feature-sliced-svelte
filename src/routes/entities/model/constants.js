export const installCommand = 'npm install --save-dev feature-sliced-svelte'

export const wrapperCode = `<script>
  import { FeatureSlicedDebug } from 'feature-sliced-svelte'
</script>

<FeatureSlicedDebug />
<div>
  <!-- your app code -->
</div>`

export const layersCode = `<script>
  import { fsd } from ‘feature-sliced-svelte’
</script>

<div use:fsd={‘widgets/UserList’}>
  <!-- your widget code -->
</div>`
