// js/router.js
// Rotas suportadas
const routes = {
    "#/": "home",
    "": "home",
    "#/projetos": "projects",
    "#/cadastro": "signup"
};

function getHash() {
}

function parseRoute(hash) {

    const [pathOnly] = hash.split("?");
}

export function navigateTo(hashUrl) {
    const final = hashUrl.startsWith("#/") ? hashUrl : "#/";
    window.location.hash = final;
}

export function initRouter(onRouteChange) {
    function handle() {
        const routeKey = parseRoute(getHash());
        onRouteChange(routeKey);
    }
    window.addEventListener("hashchange", handle);
    handle();
}