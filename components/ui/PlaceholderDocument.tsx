'use client'
import { PlusCircleIcon } from "lucide-react"
import { Button } from "./button"
import { useRouter } from "next/navigation";

const PlaceholderDocument = () => {
  const rounter = useRouter();

  const handleClick = () => {
    // Check if user is Free tier and if they are over the file limit, push to the upgrade page 
    rounter.push('/dashboard/upload')
  }

  return (
    <Button onClick={handleClick} className="flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400">
      <PlusCircleIcon className="h-16 w-16"/>
      <p>Add a document</p>

    </Button>


  )
}

export default PlaceholderDocument