export const onRequest: PagesFunction = async ({ request }) => {
  const url = new URL(request.url);
  const builtUrl = `https://api.accsaber.com/${url.pathname.replace(/^\/api\//, '')}${url.search}`;
  console.log(builtUrl);
  return fetch(builtUrl, {
    ...request,
    cf: {
      cacheTtl: 86400 * 5,
      cacheEverything: true,
    },
  });
};
