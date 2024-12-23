import {ReactNode} from "react";

export type LinkButtonProps = {
    variant:"primary"|"secondary"|"link"
    leftIcon?:ReactNode
    label?:string
    size?:"small"|"medium"|"large"
    style?:string
    to:string
}
export type IconButtonProps = {
    variant:"primary"|"secondary"|"icon"
    icon:ReactNode
    onClick:() => void
    size?:"small"|"medium"|"large"
    style?:string
    disabled?:boolean
}
export type ButtonProps = {
    type: "button"| "reset"| "submit"
    onClick: ()=>void
    label: string
    disabled?: boolean
    variant: "primary"|"secondary"|"icon"|"neutral"
    style?: string
    size?: "small"|"medium"|"large"
    leftIcon?: ReactNode
}