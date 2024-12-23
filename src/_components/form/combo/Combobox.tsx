"use client"

import * as React from "react"
import {IOption} from "@/_type/form";
import {ChangeEvent} from "react";

export default function Combobox(
    {options,value, onChange}:
      Readonly<{
        options: IOption[],
        value: string,
        onChange: ( e: ChangeEvent<HTMLSelectElement> ) => void
      }>) {

    return (
        <select onChange={onChange} value={value} className={"w-fit h-fit bg-transparent cursor-pointer"}>
            {
                options.map((option:IOption, index:number)=>(
                    <option value={option.value} key={index} className={"w-fit h-fit"}>{option.label}</option>
                ))
            }
        </select>
    )
}
