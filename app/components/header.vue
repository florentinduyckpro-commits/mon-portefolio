<template>
    <div class=" text-principal-font backdrop-blur-md p-5 fixed block md:flex md:justify-end md:items-center md:gap-4 w-full z-50">
        <ul class="social-links flex flex-col md:flex-row justify-end gap-4">
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
            test
        </ul>
          <button @click="setLang('en')">EN</button>
        <button @click="setLang('fr')">FR</button>
    </div>
</template>

<script setup>
    const { t, locale, locales } = useI18n()
    const switchLocalePath = useSwitchLocalePath()
    const router = useRouter()

    function setLang(code) {
    router.push(switchLocalePath(code))
    }
</script>