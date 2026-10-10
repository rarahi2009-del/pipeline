// Lets phones install the planner as an app. Always loads the latest version from the network,
// so updates show up on the next open; nothing is cached here.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
