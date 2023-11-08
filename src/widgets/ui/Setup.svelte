<script>
  import CodeBlock from './CodeBlock.svelte';
  import { installCommand, wrapperCode } from '$entities';
  import { fsd } from '$lib';
</script>

<div use:fsd={'widgets/Setup'}>
  <h2>Setup</h2>
  <p>First, install the package.</p>
  <CodeBlock value={installCommand} />
  <p>
    Then wrap the root (App) element of your application in a FeatureSlicedDebug
    component.
  </p>
  <CodeBlock value={wrapperCode} />
</div>
