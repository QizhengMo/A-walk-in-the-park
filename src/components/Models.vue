<template>
    <div class="model-area">
        <div v-if="model_title === 'Morning Star II'">
            <vue-three-sixty 
                :amount=27
                imagePath="https://raw.githubusercontent.com/tobythy/botanic-garden-brisbane/main/models/morning_star2/"
                fileName="Layer%20{index}.jpg"
            />
        </div>

        <div v-else-if="model_title === 'Building Blocks of Life'">
            <div class="sketchfab-embed-wrapper">
                <iframe title="A 3D model" width="640" height="480" src="https://sketchfab.com/models/6ef179b56e1a4d5493b58e1d883e27a4/embed?autostart=0&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
                    <a href="https://sketchfab.com/3d-models/building-blocks-of-life-6ef179b56e1a4d5493b58e1d883e27a4?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Building Blocks of Life</a>
                    by <a href="https://sketchfab.com/tobythy?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">tobythy</a>
                    on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
                </p>
            </div>

        </div>

        <div v-else-if="model_title === 'Apparatus for Germination of Achaemienis Ambulatii (Pony Plant)'">
            <vue-three-sixty 
                :amount=14
                imagePath="https://raw.githubusercontent.com/tobythy/botanic-garden-brisbane/main/models/Apparatus/"
                fileName="Layer%20{index}.jpg"
            />
        </div>

        <div v-else-if="model_title === 'Plant Form'">
            <vue-three-sixty 
                :amount=30
                imagePath="https://raw.githubusercontent.com/tobythy/botanic-garden-brisbane/main/models/plant/"
                fileName="Layer%20{index}.jpg"
            />
        </div>

        <div v-else-if="model_title === 'Walter Hill Fountain'">
            <div class="sketchfab-embed-wrapper">
                <iframe
                    title="A 3D model"
                    src="https://sketchfab.com/models/eca4fdaddd504f2da24c0863c0c2333c/embed?autostart=0&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"
                    frameborder="0"
                    allow="autoplay; fullscreen; vr"
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                ></iframe>
            </div>
        </div>

        <div v-else-if="model_title === 'Sundial - Hibiscus Garden'">
            <div class="sketchfab-embed-wrapper">
                <iframe 
                    title="Sundial - Hibiscus Garden" 
                    src="https://sketchfab.com/models/2267c42270c544e49ea76e38ea29dfa9/embed?autostart=0&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; vr" 
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true"></iframe>
            </div>
        </div>

        <div v-else-if="model_title === 'Jemmy Morrill and the brolgas'">
            <div class="sketchfab-embed-wrapper">
                <iframe
                    title="A 3D model"
                    src="https://sketchfab.com/models/eca4fdaddd504f2da24c0863c0c2333c/embed?autostart=0&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"
                    frameborder="0"
                    allow="autoplay; fullscreen; vr"
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                ></iframe>
            </div>
        </div>

        <div v-else-if="model_title === 'Big Red (Red Kangaroo)'">
            <div class="sketchfab-embed-wrapper">
                <iframe title="A 3D model" width="640" height="480" src="https://sketchfab.com/models/0feb26693fca45bb8c4684c8b8b1b96b/embed?autostart=0&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div>

        </div>

        <div v-else-if="model_title === 'Undercurrent'">
            <vue-three-sixty 
                :amount=30
                imagePath="https://raw.githubusercontent.com/tobythy/botanic-garden-brisbane/main/models/undercurrent/"
                fileName="Layer%20{index}.jpg"
            />
        </div>

        <div v-else>
            <p>model not exist</p>
        </div>

    </div>
</template>

<script>
export default {
    name: "Models",
    props: ["model_title"]
}
</script>

<style>

    .model-area {
        height: 100%;
        max-height: 100%;
    }

    .model-area > div{
        height: 100%;
        min-height: 100%;
    }

    .model-area > div > div{
        min-height: 90%;
        height: 90%;
    }

    .model-area iframe {
        height: 100%;
        width: 100%;
        min-height: 100%;
    }

    vue-three-sixty {
        height: 100%;
        width: 100%;
        min-height: 100%;
    }

    .v360-viewer-container {
        height: 100%;
    }
    .v360-fullscreen-toggle {
        position: absolute;
        top: 30px;
        right: 30px;
        color: #03999e;
        height: 20px;

    }
</style>