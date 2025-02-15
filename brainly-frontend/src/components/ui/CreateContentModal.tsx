import { useRef } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "@/components/ui/button"
import { Input } from "./input";

export function CreateContentModal({open,onClose}){

    const modalRef = useRef(null);

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
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
                                     <Input placeholder={"Title"} />
                                </div>
                                <div>
                                     <Input placeholder={"Link"} />
                                </div> 
                            </div>
                            <div className="flex justify-center mt-2">
                            <Button variant="outline">Submit</Button>
                            </div>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );      
}

