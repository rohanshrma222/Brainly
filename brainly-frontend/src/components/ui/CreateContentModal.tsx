import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "@/components/ui/button"
import { Input } from "./input";
import axios from "axios"
import { BACKEND_URL } from "@/config";

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {

    enum ContentType {
        Youtube = "youtube",
        Twitter = "twitter"
    }

    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type,setType]=useState(ContentType.Youtube)

    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            link,
            title,
            type
        },{
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        })
        onClose();
    }

    const modalRef = useRef<HTMLDivElement>(null);
    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };
    return (
        <div>
            {open && (
                <div className="w-screen h-screen fixed top-0 left-0 bg-black/80 flex justify-center items-center " onClick={handleClickOutside}>
                    <div ref={modalRef}  className="flex flex-col justify-center border">
                        <span className="bg-black p-5 ">
                            <div className="flex justify-end">
                              <div onClick={onClose} className="text-white w-4 "> 
                                <CrossIcon />
                              </div>     
                            </div>  
                           
                            <div className="mt-4 ">
                                <div className="mb-3">
                                     <Input reference={titleRef} placeholder={"Title"} />
                                </div>
                                <div>
                                     <Input reference={linkRef} placeholder={"Link"} />
                                </div> 
                            </div>
                            <div>
                                <div>
                                    <h1>Type</h1>
                                </div>
                                <div className="flex justify-center gap-4">
                                    <Button variant={type==ContentType.Youtube ? "default" : "secondary"} onClick={()=>{
                                        setType(ContentType.Youtube)
                                    }}>Youtube</Button>
                                    <Button variant={type==ContentType.Twitter ? "default" : "secondary"} onClick={()=>{
                                        setType(ContentType.Twitter)
                                    }}>Twitter</Button>
                                </div>
                            </div>
                            <div className="flex justify-center mt-2">
                            <Button onClick={addContent}variant="outline">Submit</Button>
                            </div>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );      
}

