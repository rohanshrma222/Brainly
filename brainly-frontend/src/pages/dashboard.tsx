import { useEffect, useState } from "react";
import { Button } from "../components/ui/CBotton";
import { Card } from "../components/ui/card";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/shareIcon";
import { Sidebar } from "../components/ui/Sidebar";
import { useContent } from "@/hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "@/config";

export default function Dashboard() {
   const [modelOpen,setModelOpen]=useState(false);
   const { contents,refresh } = useContent();

   useEffect(()=>{
      refresh();
   },[modelOpen])
  return (<div>
      <Sidebar />
      <div className="bg-[url('/skull.jpg')]  bg-center min-h-screen p-4 ml-72">
         <CreateContentModal open={modelOpen} onClose={()=>{
            setModelOpen(false);
         }} />
         <div className="flex items-center justify-end gap-4">
            <Button onClick={()=>{setModelOpen(true)}} startIcon={<PlusIcon />}  variant="primary" size="sm"    text={"Add content"} ></Button>
            <Button onClick={async()=>{
               const response=await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
                   share:true
               },{
                  headers:{
                     "Authorization": localStorage.getItem("token")
                  }
               });
               const shareUrl=`http://localhost:5173/share/${response.data.hash}`;
            }} startIcon={<ShareIcon />} variant="secondary" size="sm"  text={"Share brain"} ></Button>
         </div>
         <div className="flex  gap-4 flex-wrap">
            {contents.map(({type,link,title})=>
             <Card
             type={type}
              link={link}
              title={title}
              />)}  
         </div> 
      </div>
   
    </div>
  )
}