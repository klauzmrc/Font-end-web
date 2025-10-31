// js/app.js
import { initRouter, navigateTo } from "./router.js";
import { renderTemplate } from "./templates.js";
import { initNav } from "./components/nav.js";
import { showToast } from "./components/ui.js";

(function bootstrap() {
    document.addEventListener("DOMContentLoaded", function () {
        // Inicializa navegação (hambúrguer, dropdown)
        initNav();

        // Intercepta cliques em <a data-link> para SPA
        document.body.addEventListener("click", function (e) {
            const link = e.target.closest("a[data-link]");
            if (!link) {
                return;
            }
            if (!url.startsWith("http")) {
                e.preventDefault();
                navigateTo(url);
            }
        });

        // Inicia o roteador: processa a rota atual e renderiza
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