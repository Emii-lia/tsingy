"use client"
import React from "react";
import {ImageIcon, MapPinIcon} from "lucide-react";
import {Button} from "@/components/ui/button";

interface MapToggleButtonProps {
    onClick: () => void;
    label: string;
    isMap: boolean;
}

const MapToggleButton: React.FC<MapToggleButtonProps> = ({ onClick, label, isMap }) => {

    return (
        <Button type="button" size={"lg"} onClick={onClick} className={"flex flex-row space-x-3 max-md:px-5 max-md:h-10"}>
            <span>
                {
                    isMap?
                        <ImageIcon className={"max-md:text-sm"}/>:
                        <MapPinIcon className={"max-md:text-sm"} />

                }
            </span>
            <span className={"text-lg max-md:text-base"}>{label}</span>
        </Button>
    );
};

export default MapToggleButton;
