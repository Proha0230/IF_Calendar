import {type monthsValueType, type dayWeakType} from '~/composables/types'
export const useConfigCalendar = () => useState(() => ({
    monthsValue: <monthsValueType>({
    1: {
        name:"",
        day:"",
        firstDay:""
    }
    }),
    loadingConfig: true,
    dayWeak: <dayWeakType>({
        1: {
            name: "",
            addDay: ""
        }
    })
}))

//  Monday
//  Tuesday
//  Wednesday
//  Thursday
//  Friday
//  Saturday
//  Sunday