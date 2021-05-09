Vue.component('error-component',{
    template: `<div class="error" v-if="$root.error">Ошибка. Связь с сервером отсутствует.</div>`
})