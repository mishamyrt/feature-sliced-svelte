<script>
  import { Hotkey } from '$entities';
  import { fsd } from '$lib';
</script>

<div use:fsd={'widgets/Layers'}>
  <h2>Debugging</h2>
  <p>
    To start or disable Feature Sliced Design debugging mode, press the key
    combination:
  </p>
  <Hotkey combination="Ctrl + Shift +  F" />
  In the panel that appears, you will be able to customize the highlighting. You can test
  it in operation right on this page!
</div>
