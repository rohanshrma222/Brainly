import { useState } from "react";
import { Button } from "./components/ui/Botton";
import { Card } from "./components/ui/card";
import { CreateContentModal } from "./components/ui/CreateContentModal";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/shareIcon";

export default function Home() {
   const [modelOpen,setModelOpen]=useState(false);
  return (
    <div className="p-4">
       <CreateContentModal open={modelOpen} onClose={()=>{
          setModelOpen(false);
       }} />
       <div className="flex items-center justify-end gap-4">
          <Button onClick={()=>{setModelOpen(true)}} startIcon={<PlusIcon />}  variant="primary" size="sm"    text={"Add content"} ></Button>
          <Button startIcon={<ShareIcon />} variant="secondary" size="sm"  text={"Share brain"} ></Button>
       </div>
       <div className="flex justify-center gap-4">
       <Card type="twitter" link="https://x.com/ReheSamay/status/1889681505888190614" title="random tweet"/>
       <Card type="youtube" link="https://www.youtube.com/watch?v=sRBzU4l0yac" title="random youtube video"/>
       </div>
        
    </div>
  )
}