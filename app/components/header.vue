<template>
    <header class="fixed top-0 left-0 w-full z-50 text-principal-font backdrop-blur-md">
        <div class="flex items-center justify-end p-4 md:p-5">
            <button
                type="button"
                class="inline-flex items-center justify-center rounded-md border border-secondary-font p-2 md:hidden"
                :aria-expanded="isMenuOpen"
                aria-controls="main-navigation"
                :aria-label="isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
                @click="isMenuOpen = !isMenuOpen"
            >
                <X v-if="isMenuOpen" class="size-5" />
                <Menu v-else class="size-5" />
            </button>
        </div>
        <div
            id="main-navigation"
            class="border-t border-secondary-font/30 px-4 pb-4 md:flex md:items-center md:justify-end md:gap-4 md:border-0 md:px-5 md:pb-5"
            :class="isMenuOpen ? 'block' : 'hidden md:flex'"
        >
        <ul class="social-links flex flex-col gap-3 md:flex-row md:justify-end md:gap-4">
            <li>
                <NuxtLink to="#about" rel="noopener noreferrer">
                    <span class="font-body text-principal-font hover:text-secondary-font md:text-basic lg:text-basic">{{ t('header.about') }}</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="#skills" rel="noopener noreferrer">
                    <span class="font-body text-principal-font hover:text-secondary-font md:text-basic lg:text-basic">{{ t('header.skills') }}</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="#project" rel="noopener noreferrer">
                    <span class="font-body text-principal-font hover:text-secondary-font md:text-basic lg:text-basic">{{ t('header.projects') }}</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="#contact" rel="noopener noreferrer">
                    <span class="font-body text-principal-font hover:text-secondary-font md:text-basic lg:text-basic">{{ t('header.contact') }}</span>
                </NuxtLink>
            </li>
        </ul>
        <button
            type="button"
            class="mt-4 inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 md:mt-0"
            @click="toggleLocale"
        >
            {{ locale === 'fr' ? 'FR' : 'EN' }}
        </button>
        </div>
    </header>
</template>

<script setup>
    import { Menu, X } from '@lucide/vue'

    const { t, locale } = useI18n()
    const switchLocalePath = useSwitchLocalePath()
    const router = useRouter()
    const isMenuOpen = ref(false)

    const nextLocale = computed(() => locale.value === 'fr' ? 'en' : 'fr')

    function toggleLocale() {
        router.push(switchLocalePath(nextLocale.value))
    }
</script>