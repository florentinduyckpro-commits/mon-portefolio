<template >
    <hr class="border-separator">
    <section class="flex p-30" id="about">
        <h2 class="font-heading text-secondary-font text-2xl md:text-xl lg:text-2xl basis-1/3 px-50">{{ t('about.title') }}</h2>
        <p class="font-body text-principal-font text-lg md:text-l lg:text-xl basis-2/3 px-50">
            {{ t('about.description') }}
        </p>
    </section>
    
    <section class="flex flex-col p-30" id="skills">
        <h2 class="font-heading text-secondary-font text-2xl md:text-xl lg:text-2xl px-30 py-10">{{ t('skills.title') }}</h2>
        <div class="flex flex-wrap justify-center px-30">
            <card-skills :skill-name="t('skills.frontend')" :skills="['VueJS', 'NuxtJS', 'TailwindCSS', 'TypeScript']" />
            <card-skills :skill-name="t('skills.backend') " :skills="['Java', 'Spring', 'MongoDB', 'PostgreSQL']" />
            <card-skills :skill-name="t('skills.other')" :skills="['Vercel', 'Sentry', 'Github']" />
        </div>
    </section>

    <section class="flex flex-col p-30" id="project">
        <h2 class="font-heading text-secondary-font text-2xl md:text-xl lg:text-2xl px-30 py-10">{{ t('projects.title') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-30">
            <card-project :project-name="t('projects.projects.0.name')" :project-description="t('projects.projects.0.description')" :project-image="nestbudgetImage" :techs="['React', 'NextJS', 'TailwindCSS']" :project-link="nestbudgetLink"/>
            <card-project :project-name="t('projects.projects.1.name')" :project-description="t('projects.projects.1.description')" :project-image="nestbudgetImage" :techs="['Spring', 'Express', 'MongoDB']" :project-link="nestbudgetLink" />
            <card-project :project-name="t('projects.projects.2.name')" :project-description="t('projects.projects.2.description')" :project-image="nestbudgetImage" :techs="['WordPress', 'PHP', 'MySQL']" :project-link="nestbudgetLink" />
        </div>
    </section>
    <hr class="border-separator">
    <section class="flex flex-col p-30 items-center" id="contact">
        <h2 class="font-heading text-secondary-font text-2xl md:text-xl lg:text-2xl">{{ t('contact.title') }}</h2>
        <h2 class="font-heading text-principal-font text-5xl md:text-4xl lg:text-5xl py-5">{{ t('contact.subtitle') }}</h2>
        <p class="font-body text-principal-font text-m md:text-m lg:text-xl py-5">{{ t('contact.description') }}  </p>
            <NuxtLink to="mailto:florentin.duyck.pro@gmail.com" class="my-5 rounded-md bg-button-background text-principal-font hover:bg-button-hover-background hover:text-secondary-font p-2 inline-flex items-center gap-2">
                <mail class="text-s" />
                <span class="font-body text-lg md:text-md lg:text-md">{{ t('social.email') }}</span>
            </NuxtLink>
        <div class="py-5">
            <NuxtLink to="https://www.linkedin.com/in/florentin-duyck/" target="_blank" rel="noopener noreferrer" class="text-principal-font hover:text-secondary-font p-2">
                <i :class="`devicon-linkedin-plain`" class="text-s mr-2"></i>
                <span class="font-body text-lg md:text-md lg:text-md">{{ t('social.linkedin') }}</span>
            </NuxtLink>
            <NuxtLink to="https://github.com/florentinduyck" target="_blank" rel="noopener noreferrer" class="text-principal-font hover:text-secondary-font p-2">
                <i :class="`devicon-github-plain`" class="text-s mr-2"></i>
                <span class="font-body text-lg md:text-md lg:text-md">{{ t('social.github') }}</span>
            </NuxtLink>
            <NuxtLinK to="https://www.malt.fr/profile/florentin-duyck" target="_blank" rel="noopener noreferrer" class="text-principal-font hover:text-secondary-font p-2">
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Malt" role="img" viewBox="0 0 512 512" fill="currentColor" class="inline-block w-[1em] h-[1em] text-s mr-2 mb-1">
                    <path d="m408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8c34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4c-4.6-23.3-17.9-44.4-53.3-44.4c-35.4 0-48.7 21.2-53.2 44.5c3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2c5 23.8 19 45.5 53.1 45.5c34.2 0 48.3-21.9 53.2-45.7c-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5c0 34.3 21.9 48.3 45.8 53.2c2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6c0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2c-25 25-19.4 49.4-6.2 69.1c4.1-.3 123.4-.6 123.4-.6zm68.7 165.9-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3c24.2-24.2 18.7-49.7 5.3-70c-4.3.3-123.2.6-123.2.6z"></path>
                </svg>
                <span class="font-body text-lg md:text-md lg:text-md">{{ t('social.malt') }}</span>
            </NuxtLinK>
        </div>
        <p class="text-principal-font">© 2026 Florentin Duyck</p>
    </section>
</template>

<script setup>
import nestbudgetImage from '~/assets/images/nestbudget.png'
import { Mail } from '@lucide/vue';
const { t, locale, locales } = useI18n()
const nestbudgetLink = 'https://nestbudget.fr'
</script>