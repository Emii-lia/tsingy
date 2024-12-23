"use client"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useEffect, useState} from "react";

type AvatarProps = {
    src: string|null,
    name: string,
}
export default function UserAvatar({name, src}: Readonly<AvatarProps>) {
    const [rgb, setRgb] = useState([0,0,0])
    useEffect(()=>{
        const newRgb = [
            Math.floor(Math.random()*165)+90,
            Math.floor(Math.random()*185)+70,
            Math.floor(Math.random()*155)+100
        ]
        setRgb(newRgb)
    },[])
    return (
        <Avatar>
            <AvatarImage src={src!} alt={name}/>
            <AvatarFallback style={{backgroundColor:`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`}}>{name[0].toUpperCase()}</AvatarFallback>
        </Avatar>
    )
}
