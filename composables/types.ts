
export type monthsValueType = {
    [key:number]: {
        name: string,
        day: string,
        firstDay: string
    }
}

export type monthValueType = {
        name: string,
        day: string,
        firstDay: string
}

export type dayWeakType = {
    [key:number]: {
        name: string,
        addDay: string
    }
}

export type dayStartInMonth = {
    name: string,
    addDay: string
}

export type settingValueType = {
    config: {
        monthsValue: monthsValueType,
        dayWeak: dayWeakType
    }
}