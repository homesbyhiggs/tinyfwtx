// /functions/healthcheck.js
export function onRequest() {
    return new Response("ok", { status: 200 });
}
