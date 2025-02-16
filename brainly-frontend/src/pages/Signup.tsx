import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import axios from "axios";

import { BACKEND_URL } from "@/config";

export function Signup(){
    const usernameRef= useRef<HTMLInputElement>(null);
    const passwordRef=useRef<HTMLInputElement>(null);

    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/signup",{       
                username,
                password
        })
        alert("you have signed up!")
    }

    return (
        <div className="h-screen w-screen bg-white-200 flex justify-center items-center">
            <div className="bg-white rounded-2xl border min-w-48 p-10">
                <Input reference={usernameRef} placeholder="Username" />
                <Input reference={passwordRef} placeholder="Password" />
                <div className="flex justify-center pt-5">
                     <Button onClick={signup} variant="outline">Signup</Button>
                </div>
             </div>
        </div>
    )
}