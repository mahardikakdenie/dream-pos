<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <!-- Header -->
    
    <!-- Main Content -->
    <main class="max-h-screen">
        <Headers />
      <NuxtPage />
    </main>
    <!-- Bottom Navigation/Footer -->
    <nav
      class="fixed bottom-0 left-0 right-0 py-4 bg-white border-t border-gray-200 shadow-lg z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div class="max-w-md mx-auto flex justify-around items-center">
        <button class="flex flex-col items-center text-green-600" aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span class="text-xs mt-1">Home</span>
        </button>

        <button class="flex flex-col items-center text-gray-500 hover:text-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span class="text-xs mt-1">Orders</span>
        </button>
      </div>
    </nav>

  </div>
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'DREAMS POS - Mahardikakdenie Portofolio',
    ogTitle: 'Mahardikakdenie Portofolio',
    description:
        'This is Mahardikakdenie Portofolio, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://your-domain.com/logo-2.png',    // HARUS absolut URL agar tampil di social media
    twitterCard: 'summary_large_image',
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

* {
    font-family: 'Poppins', sans-serif;
}

/* Hilangkan scrollbar visual */
::-webkit-scrollbar {
    display: none !important;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
