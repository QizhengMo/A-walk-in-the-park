<template>
    <div>
        <div v-if="model-title === 'Morning Star II'">
            <vue-three-sixty 
                :amount=35
                imagePath="https://raw.githubusercontent.com/tobythy/botanic-garden-brisbane/main/models/morning_star/"
                fileName="Layer%20{index}.jpg"
            />
        </div>

        <div v-else-if="model-title === 'Building Blocks of Life'">
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

        <div v-else-if="model-title === 'Apparatus for Germination of Achaemienis Ambulatii (Pony Plant)'">
            <vue-three-sixty 
                :amount=35
                imagePath="https://raw.githubusercontent.com/tobythy/botanic-garden-brisbane/main/models/morning_star/"
                fileName="Layer%20{index}.jpg"
            />
        </div>

        <div v-else-if="model-title === 'Plant Form'">
            <vue-three-sixty 
                :amount=35
                imagePath="https://raw.githubusercontent.com/tobythy/botanic-garden-brisbane/main/models/morning_star/"
                fileName="Layer%20{index}.jpg"
            />
        </div>

        <div v-else-if="model-title === 'Walter Hill Fountain'">
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

        <div v-else-if="model-title === 'Sundial - Hibiscus Garden'">
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

        <div v-else-if="model-title === 'Jemmy Morrill and the brolgas'">
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

        <div v-else-if="model-title === 'Big Red (Red Kangaroo)'">
            <vue-three-sixty 
                :amount=35
                imagePath="https://raw.githubusercontent.com/tobythy/botanic-garden-brisbane/main/models/morning_star/"
                fileName="Layer%20{index}.jpg"
            />
        </div>

        <div v-else-if="model-title === 'Undercurrent'">
            <vue-three-sixty 
                :amount=35
                imagePath="https://raw.githubusercontent.com/tobythy/botanic-garden-brisbane/main/models/morning_star/"
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
    props: ["model-title"]
}
</script>