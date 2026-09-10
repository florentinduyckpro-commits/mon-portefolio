<template>
  <div class="page">
    <div class="scanlines"></div>
    <Header />
    <!-- HERO avec l'effet complet -->
    <section class="hero">
      <div class="grid-retro"></div>
      <div class="stars"></div>
      <div class="hero-fade"></div> 
      <div class="hero-content p-5 pt-24 sm:p-8 sm:pt-24 md:p-10 md:pt-28 lg:p-20 lg:pt-32">
        <Hero />
      </div>
    </section>

    <!-- RESTE DE LA PAGE : juste la couleur, aucun effet -->
    <main class="page-body">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
  const config = useAppConfig()
  const { locale } = useI18n()
  const requestUrl = useRequestURL()

  useHead({
    htmlAttrs: {
      lang: () => locale.value,
    },
    link: [
      {
        rel: 'canonical',
        href: () => requestUrl.href,
      },
    ],
  })

  useSeoMeta({
    title: config.title,
    ogTitle: config.title,
    ogType: 'website',
    ogUrl: () => requestUrl.href,
    twitterCard: 'summary',
    robots: 'index, follow',
  })
</script>

<style scoped>
.page {
  background:
    radial-gradient(ellipse at top, rgba(45,10,78,0.4) 0%, transparent 60%),
    linear-gradient(180deg, #1a0a3e 0%, #0d0221 100%);
  background-attachment: fixed; /* le radial reste ancré en haut du viewport visible */
}

.hero {
  position: relative;
  width: 100%;
  height: 100vh; /* ou moins, ex: 70vh, selon le rendu voulu */
  overflow: hidden;
  background: linear-gradient(180deg, #0d0221 0%, #1a0a3e 40%, #2d0a4e 60%, #1a0a3e 100%);
}

.hero-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%; /* la zone de transition, ajuste selon le rendu */
  background: linear-gradient(
    180deg,
    transparent 0%,
    #1a0a3e 100%
  );
  pointer-events: none;
  z-index: 5; /* au-dessus de la grille/étoiles, sous le contenu */
}

.grid-retro {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 200%;
  height: 50%;
  transform: translateX(-50%) perspective(300px) rotateX(75deg);
  background-image:
    linear-gradient(90deg, rgba(255,0,200,0.6) 1px, transparent 1px),
    linear-gradient(0deg, rgba(255,0,200,0.6) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: gridMove 1.5s linear infinite;
}

@keyframes gridMove {
  from { background-position: 0 0; }
  to { background-position: 0 60px; }
}

.stars {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1px 1px at 20% 20%, white, transparent),
    radial-gradient(1px 1px at 60% 10%, white, transparent),
    radial-gradient(1px 1px at 80% 30%, white, transparent),
    radial-gradient(1px 1px at 40% 15%, white, transparent),
    radial-gradient(1px 1px at 90% 5%, white, transparent);
  background-repeat: repeat;
  background-size: 200px 200px;
  animation: twinkle 3s ease-in-out infinite alternate;
}

@keyframes twinkle {
  from { opacity: 0.3; }
  to { opacity: 1; }
}

.scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0,0,0,0.15) 0px,
    rgba(0,0,0,0.15) 1px,
    transparent 1px,
    transparent 3px
  );
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 10;
  height: 100%;
}

.page-body {
  position: relative;
  z-index: 10;
  /* pas de fond ici : hérite de .page */
}
</style>


