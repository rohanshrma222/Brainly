import { Delete } from "../../icons/Delete";
import { Document } from "../../icons/Document";
import { ShareIcon } from "../../icons/shareIcon";

export function Card() {
    return <div>
        <div className="p-4 bg-white rounded-md border-gray-200 max-w-72 border ">
            <div className="flex justify-between">
                <div className="flex items-center text-sm">
                    <div className="text-gray-500 pr-2">
                         <Document />
                    </div>
                  
                    Project ideas
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <ShareIcon />
                    </div>
                    <div className="text-gray-500">
                         <Delete />
                    </div> 
                </div>
            </div>
            <div className="pt-4">
             <iframe className="w-full" src="https://www.youtube.com/embed/7-TaFkR6zzs?si=yR15EEFiCT6KJHwV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>            
            </div>
        </div>
    </div>
}