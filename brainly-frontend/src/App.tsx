import { Button } from "./components/ui/Botton";
import { Card } from "./components/ui/card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/shareIcon";

export default function Home() {
  return (
    <div>

    
    <div className="flex items-center justify-center">
    <Button startIcon={<PlusIcon />}  variant="primary" size="sm"    text={"Add content"} ></Button>
    <Button startIcon={<ShareIcon />} variant="secondary" size="sm"  text={"Share brain"} ></Button>
      </div>
      <Card />
      </div>
  )
}