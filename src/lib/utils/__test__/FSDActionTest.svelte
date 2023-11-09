<script lang="ts">
  import { fsd } from '../fsd-action.js'

  export let name: string
</script>

<div use:fsd={name} data-testid="fsd-test-element" />
