// js/app.js
import { initRouter, navigateTo } from "./router.js";
import { renderTemplate } from "./templates.js";
import { initNav } from "./components/nav.js";
import { showToast } from "./components/ui.js";

(function bootstrap() {
    document.addEventListener("DOMContentLoaded", function () {
        initNav();

        // Intercepta cliques em links com data-link para navegação SPA
        document.body.addEventListener("click", function (e) {
            const link = e.target.closest("a[data-link]");
            if (!link) {
                return;
            }
            const isExternal = /^https?:\/\//i.test(url);
            if (isExternal) {
                return;
            }
            e.preventDefault();
            navigateTo(url);
        });

        // Inicializa roteador e renderiza a rota atual
        initRouter(async function onRouteChange(route) {
            try {
                await renderTemplate(route);
            } catch (err) {
                console.error(err);
                showToast("Não foi possível carregar esta seção agora. Tente novamente.", "warning");
            }
        });
    });
})();