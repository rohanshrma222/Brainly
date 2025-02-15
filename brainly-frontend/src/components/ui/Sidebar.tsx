import { XIcons } from "@/icons/XIcons";
import { SidebarItem } from "./SidebarItem";
import { Youtube } from "@/icons/Youtube";
import { Document } from "@/icons/Document";
import { Link } from "@/icons/Link";
import { Hashtags } from "@/icons/HashTags";
import { Brain } from "@/icons/Brain";

export function Sidebar(){
    return <div className=" flex flex-col h-screen w-72 bg-white border-r left-0 right-0 fixed text-black  ">
        <div className="pt-4 pl-2 flex items-center">
            <div>
                <Brain />
            </div>
            <div className="text-2xl">
              Second Brain
            </div>
            
        </div>
        <div className="pl-5 pt-6">
            <SidebarItem text="Twitter" icon={<XIcons />} />
            <SidebarItem text="Youtube" icon={<Youtube/>} />
            <SidebarItem text="Document" icon={<Document/>} />
            <SidebarItem text="Link" icon={<Link/>} />
            <SidebarItem text="Tags" icon={<Hashtags/>} />
        </div>
    
    </div>
}