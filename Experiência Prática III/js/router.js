// js/router.js
const routes = {
    "/": "home",
    "/index.html": "home",
    "/projetos": "projects",
    "/projetos.html": "projects",
    "/cadastro": "signup",
    "/cadastro.html": "signup"
};

function parseRoute(pathname) {
}

export function navigateTo(path) {
    window.history.pushState({}, "", path);
    const event = new PopStateEvent("popstate");
    window.dispatchEvent(event);
}

export function initRouter(onRouteChange) {
    function handle() {
        const routeKey = parseRoute(window.location.pathname);
        onRouteChange(routeKey);
    }
    window.addEventListener("popstate", handle);
    handle();
}