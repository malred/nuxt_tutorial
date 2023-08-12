// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  app: {
    head: {
      meta: [],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
        },
      ],
      title: "Hello Nuxt"
    },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    shoeStoreApiSecret: 'my-secret-key',
    // Keys within public are also exposed client-side
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL
    }
  }
})
