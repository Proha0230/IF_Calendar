import {type settingValueType} from "~/composables/types";
import valueFor2023 from "~/valueFor2023.json";
import valueFor2024 from "~/valueFor2024.json";
import valueFor2025 from "~/valueFor2025.json";
import {useConfigCalendar} from "~/composables/states";
import {type Ref} from "vue";

// Определять параметры из composable нужно в самой функции так как извне он их не будет видеть
// const state = useConfigCalendar()
// const configJson: Ref<settingValueType | null> = ref(null)

export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            valueYear: () => {
                // Определять параметры из composable нужно в самой функции так как извне он их не будет видеть
                const state = useConfigCalendar()
                const configJson: Ref<settingValueType | null> = ref(null)
                if(state.value.year === 2023) configJson.value = valueFor2023 as settingValueType
                if(state.value.year === 2024) configJson.value = valueFor2024 as settingValueType
                if(state.value.year === 2025) configJson.value = valueFor2025 as settingValueType

                if(configJson.value) {
                    state.value.monthsValue = configJson.value.config.monthsValue
                    state.value.dayWeak = configJson.value.config.dayWeak
                }
            }
        }
    }
})