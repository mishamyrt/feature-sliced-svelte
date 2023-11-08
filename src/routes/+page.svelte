<script>
	import { FeatureSlicedDebug, fsd } from "$lib";
    import { Hero, Setup, Layers, Debugging } from "$widgets";
    import '../app.css'
</script>

<FeatureSlicedDebug>
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
</FeatureSlicedDebug>

<style>
    .content {
        width: 600px;
        margin: 0 auto;
    }
</style>