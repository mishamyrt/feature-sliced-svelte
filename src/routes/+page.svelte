<script>
  import '../app.css'

  import { FeatureSlicedDebug, fsd } from '$lib'
  import { Debugging, Hero, Layers, Setup } from '$widgets'
</script>

<FeatureSlicedDebug />
<div class="app" use:fsd={'pages/Index'}>
  <div class="content">
    <Hero />
    <div class="information">
      <Setup />
      <Layers />
      <Debugging />
    </div>
  </div>
</div>

<style>
  .content {
    width: 600px;
    margin: 0 auto;
  }
</style>
