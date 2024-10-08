
export type Mode = {
    modeId: string
    name: string
}

export type Collection = {
    [prop: string]: any;
    defaultModeId: string
    hiddenFromPublishing: boolean
    id: string
    key: string
    modes: Mode[]
    name: string
    remote: boolean
    variableIds: string[]
}