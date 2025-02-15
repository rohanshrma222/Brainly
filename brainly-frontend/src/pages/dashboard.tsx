import { useState } from "react";
import { Button } from "../components/ui/CBotton";
import { Card } from "../components/ui/card";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/shareIcon";
import { Sidebar } from "../components/ui/Sidebar";

export default function Dashboard() {
   const [modelOpen,setModelOpen]=useState(false);
  return (<div>
      <Sidebar />
      <div className="bg-[url('/skull.jpg')]  bg-center min-h-screen p-4 ml-72">
         <CreateContentModal open={modelOpen} onClose={()=>{
            setModelOpen(false);
         }} />
         <div className="flex items-center justify-end gap-4">
            <Button onClick={()=>{setModelOpen(true)}} startIcon={<PlusIcon />}  variant="primary" size="sm"    text={"Add content"} ></Button>
            <Button startIcon={<ShareIcon />} variant="secondary" size="sm"  text={"Share brain"} ></Button>
         </div>
         <div className="flex  gap-4">
            <Card type="twitter" link="https://x.com/ReheSamay/status/1889681505888190614" title="Random Tweet"/>
            <Card type="youtube" link="https://www.youtube.com/watch?v=sRBzU4l0yac" title="Random Youtube Video"/>
         </div> 
      </div>
   
    </div>
  )
}