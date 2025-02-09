import { Button } from "./components/ui/Botton";
import { PlusIcon } from "./icons/PlusIcon";

export default function Home() {
  return (
    <div>
    <h1 className="text-3xl font-bold underline bg-black text-white ">
      Hello world!
    </h1>
    <Button startIcon={<PlusIcon />} size="sm" variant="primary" onClick={() => {}} text={"Share"} />
    <Button size="md" variant="secondary"  onClick={() => {}} text={"Add Content"} />

      </div>
  )
}