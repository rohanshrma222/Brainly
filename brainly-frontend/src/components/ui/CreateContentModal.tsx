import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Botton";

export function CreateContentModal({open,onClose}){
    return (
        <div>
            {open && (
                <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center items-center">
                    <div className="flex flex-col justify-center">
                        <span className="bg-white w- opacity-100 p-4 rounded">
                            <div onClick={onClose} className="flex justify-end cursor-pointer"> 
                                <CrossIcon />
                            </div>
                            <div>
                                <Input placeholder={"Title"} />
                                <Input placeholder={"Link"} />
                            </div>
                            <div className="flex justify-center mt-2">
                                <Button variant="primary" text="Submit" size="sm" />
                            </div>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );      
}

function Input({onChange,placeholder}: {onChange: () => void}){
    return <div>
        <input placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded" onChange={onChange}></input>
    </div>
}