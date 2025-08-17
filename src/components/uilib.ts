
import Button from "primevue/button"
import type { App } from "vue";

const primeComponents = [
    Button
]


export const loadPrimePlugin = {
    install(app: App) {
        // configure the app
        primeComponents.forEach(comp => {
            console.warn(comp.name);
            app.component(comp.name, comp)
        })
    }
}
