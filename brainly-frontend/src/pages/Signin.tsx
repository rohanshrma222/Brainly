import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Signin(){
    return (
        <div className="h-screen w-screen bg-white-200 flex justify-center items-center">
            <div className="bg-white rounded-2xl border min-w-48 p-10">
                <Input placeholder="Username" />
                <Input placeholder="Password" />
                <div className="flex justify-center pt-5">
                     <Button variant="outline">Signin</Button>
                </div>
             </div>
        </div>
    )
}