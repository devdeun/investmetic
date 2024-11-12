async function initMSW() {
  const { worker } = await import('./browser')
  await worker.start({
    serviceWorker: {
      url: '/mockServiceWorker.js',
    },
  })
}

export default initMSW
