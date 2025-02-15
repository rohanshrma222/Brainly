import {ReactElement} from "react";

interface SideStyles{
    text:string;
    icon: ReactElement;
}
export function SidebarItem({text,icon} : SideStyles ){
    return (
        <div className="flex text-gray-700 items-center py-2 cursor-pointer hover:bg-gray-200 rounded max-w-42 pl-4 transition-all duration-250">
            <div className="">
             {icon} 
            </div>
            <div className="p-2">
                {text}
            </div> 
        </div>
    )
}