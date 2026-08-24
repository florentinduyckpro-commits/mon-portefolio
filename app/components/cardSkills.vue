<template>
    
    <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
    <div class="border-4 border-separator text-principal-font mx-7 rounded-lg">
        <div class="bg-separator block text-center p-2">
            <h1 class="font-heading text-lg md:text-xl lg:text-2xl  ">{{ skillName }}</h1>
        </div>
        <ul class="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <li v-for="(skill, index) in skills" :key="index" class="font-body text-primary-font text-md md:text-lg lg:text-xl flex flex-col items-center">
                <i :class="`devicon-${skill.toLowerCase()}-plain`" class="text-5xl ml-2"></i>
                <span class="ml-2">{{ skill }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
    defineProps({
        skillName: {
            type: String,
            required: true
        },
        skills: {
            type: Array,
            required: true
        }
    });
</script>