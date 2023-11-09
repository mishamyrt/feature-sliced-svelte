<script>
  import { installCommand, wrapperCode } from '$entities'
  import { CopyCodeBlock } from '$features'
  import { fsd } from '$lib'
</script>

<div use:fsd={'widgets/Setup'}>
  <h2>Setup</h2>
  <p>First, install the package.</p>
  <CopyCodeBlock value={installCommand} />
  <p>
    Then wrap the root (App) element of your application in a FeatureSlicedDebug
    component.
  </p>
  <CopyCodeBlock value={wrapperCode} />
</div>
