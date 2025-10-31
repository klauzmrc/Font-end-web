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
    // Remove query string do hash (ex.: "#/projetos?categoria=saude" => "#/projetos")
    const [pathOnly] = hash.split("?");
}

export function navigateTo(hashUrl) {
    // Garante formato "#/rota"
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