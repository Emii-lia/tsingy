import Image from "next/image";
import {XIcon} from "lucide-react";
import React from "react";

type FilePreviewProps = {
    file:File
    index: number
    removeFile: ()=>void
}
export const FilePreview = (props:FilePreviewProps)=>{

    const {file, index, removeFile} = props
    return(
        <div className="w-full h-full">
            {
                file.type.startsWith('image/') &&
                <div className="relative h-32" key={index}>
                    <Image src={URL.createObjectURL(file)} alt={`file-${index}`} className='w-full object-cover h-full' width={100} height={50}/>
                    <span className='absolute top-0 right-0 p-2 m-1.5 flex items-center justify-center bg-gray-500 bg-opacity-50 rounded-full' onClick={()=>removeFile()}>
                        <XIcon className={"text-white text-base"}/>
                    </span>
                </div>
            }
            {
                file.type.startsWith('video/') &&
                <div className="h-32 relative" key={index}>
                    <video controls className='w-full object-cover h-full'>
                        <source src={URL.createObjectURL(file)} type={file.type}/>
                        Your browser does not support the video tag
                    </video>
                    <span className='absolute top-0 right-0 p-1 m-1.5 flex items-center justify-center bg-gray-500 bg-opacity-50 rounded-full' onClick={()=>removeFile()}>
                        <XIcon className={"text-white text-base"}/>
                    </span>
                </div>
            }
        </div>
    )
}