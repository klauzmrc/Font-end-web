// js/store.js
const NAMESPACE = "ong-pela-vida";

function keyOf(name) {
    return `${NAMESPACE}:${name}`;
}

export const store = {
    get(name, fallback = null) {
        try {
            const raw = localStorage.getItem(keyOf(name));
            return raw ? JSON.parse(raw) : fallback;
        } catch {
            return fallback;
        }
    },
    set(name, value) {
        try {
            localStorage.setItem(keyOf(name), JSON.stringify(value));
        } catch {
            /* storage talvez indisponível (modo privativo) */
        }
    },
    remove(name) {
        try {
            localStorage.removeItem(keyOf(name));
        } catch {
            /* ignore */
        }
    }
};