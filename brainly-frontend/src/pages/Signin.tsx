import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BACKEND_URL } from "@/config";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin(){
        const usernameRef= useRef<HTMLInputElement>(null);
        const passwordRef=useRef<HTMLInputElement>(null);
        const navigate= useNavigate()
    
        async function signin(){
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;
            const response = await axios.post(BACKEND_URL + "/api/v1/signin",{       
                    username,
                    password
            })
            const jwt = response.data.token;
            localStorage.setItem("token",jwt); 

            navigate("/dashboard")
        }
    return (
        <div className="h-screen w-screen bg-white-200 flex justify-center items-center">
            <div className="bg-white rounded-2xl border min-w-48 p-10">
                <Input reference={usernameRef} placeholder="Username" />
                <Input reference={passwordRef} placeholder="Password" />
                <div className="flex justify-center pt-5">
                     <Button onClick={signin} variant="outline">Signin</Button>
                </div>
             </div>
        </div>
    )
}