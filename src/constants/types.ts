export type NavProps = {
    mode:boolean,
    toggleSwitch: (curr:boolean) => void;
}

export type PropsA ={
    data:any
    mode:boolean,
    trimName:(name:string) => string;
}

export type PropsB ={
    data:any
    trimName:(name:string) => string;
}
export type PropsC ={
    mode:boolean,
    trimName:(name:string) => string;
}
export type PropsD ={
    data:any
}
export type PropsE ={
    title:string
}
export type PropsInfo ={
    height:any,
    weight:any

}