import {ChangeEvent, useRef} from "react";
import { FilePreview } from '../view/media.preview';
import {Button} from "@/components/ui/button";
import {useTranslations} from "next-intl";
import {ImageIcon} from "lucide-react";
import { cn } from "@/lib/utils";

type FileInputProps = {
    previewed?: "before" | "after"
    multiple?: boolean
    style?: string
    files:File[]
    handleFileChange:(e:ChangeEvent<HTMLInputElement>)=>void
    removeFile:(index:number)=>void
}
export const FileInput = (props: FileInputProps) => {
    const { previewed, style, multiple=false, handleFileChange, files, removeFile } = props
    const fileInputRef = useRef<HTMLInputElement>(null);
    const t = useTranslations("Feedback.form")

    const handleClick = () => {
        fileInputRef.current?.click()
    }
    const gridClass = () => {
        switch (files.length) {
            case 1:
                return 'grid-cols-1';
            case 2:
                return 'grid-cols-2';
            default:
                return 'grid-cols-3';
        }
    }
    return (
        <div className={cn(`flex ${previewed === "after"?"flex-col":"flex-col-reverse"}`, style)}>
            <input
                type="file"
                name=""
                id=""
                multiple={multiple}
                style={{display:'none'}}
                onChange={handleFileChange}
                ref={fileInputRef}
            />
            <div className="flex flex-row w-full">

                <Button type={"button"} variant={"outline"} size={"lg"} className={"w-full flex flex-row space-x-3"} onClick={handleClick}>
                    <span>
                        <ImageIcon/>
                    </span>
                    <span>
                        {t("upload")}
                    </span>
                </Button>
            </div>
            {
                (previewed ) && <div className={`w-full grid gap-1 ${previewed==="after"?"mt-4":"mb-4"} ${gridClass()}`}>
                    {
                        files.map((file, index) => (
                            <FilePreview file={file} index={index} removeFile={() => removeFile(index)} key={index} />
                        ))
                    }
                </div>

            }
        </div>
    )
}