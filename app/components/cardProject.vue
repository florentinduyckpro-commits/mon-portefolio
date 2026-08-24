<template>
    <NuxtLink :to="`${projectLink}`" target="_blank" rel="noopener noreferrer" class="block" >
    <div class="bg-card-background border rounded-sm border-separator text-principal-font hover:bg-card-hover-background hover:text-secondary-font">
        <img :src="projectImage" :alt="projectName" class="w-full h-50 object-cover object-[50%_0%] rounded-t-lg">
        <div class="bg-principal-background hover:bg-component-background-hover active:bg-component-background-active p-4 rounded-b-lg">
            <h3 class="font-heading text-lg md:text-xl lg:text-2xl p-2">{{ projectName }}</h3>
            <p class="font-body text-md md:text-m lg:text-l p-2">{{ projectDescription }}</p>
            <div v-for="(tech, index) in techs" :key="index" class="inline-block border border-separator bg-component-background-normal hover:bg-component-background-hover active:bg-component-background-active text-principal-font rounded-s px-3 py-1 text-sm font-body m-1">
                <span>{{ tech }}</span>
            </div>
        </div>
    </div>
    </NuxtLink>

</template>

<script setup>
    defineProps({
        projectName: {
            type: String,
            required: true
        },
        projectDescription: {
            type: String,
            required: true
        },
        projectImage: {
            type: String,
            required: true
        },
        techs: {
            type: Array,
            default: () => []
        },
        projectLink: {
            type: String,
            default: '#'
        }
    });
</script>