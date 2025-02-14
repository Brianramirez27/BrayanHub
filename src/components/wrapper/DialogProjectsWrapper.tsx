import { Button } from "@/components/ui/button"
import NavigationProjects from "../NavegationProjects";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import type { CollectionEntry } from "astro:content";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Preuba from "./preuba.astro";
import { DialogClose } from "@radix-ui/react-dialog";



function DialogProjectsWrapper({ project }: { project: CollectionEntry<"projects"> }) {

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex: any) => (prevIndex + 1) % project.data.images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex: any) =>
      prevIndex === 0 ? project.data.images.length - 1 : prevIndex - 1
    )
  }
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button >Más Detalles</Button>
      </DialogTrigger>
      <DialogClose ></DialogClose>
      <DialogContent className="max-w-4xl h-[85vh] overflow-y-auto glass  flex flex-col text-primary  items-center ">
        <DialogHeader >
          <DialogTitle >{project.data.title}</DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video w-full  h-[50vh] rounded-lg flex justify-center items-center  mb-4   ">
          {project.data.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Imagen ${index + 1}`}
              className={`absolute  w-[70%] h-full object-cover rounded-lg transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}

          
          <div>
            <Button
              onClick={nextSlide}
              className="z-20 left-8 absolute text-foreground  hover:text-primary"
            >
              <ChevronLeft  className="h-6 w-6" />
            </Button>
            <Button
              onClick={prevSlide}
              className="z-20 right-8 absolute text-foreground  hover:text-primary "        >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        
        </div>
        <NavigationProjects project={project} />
      </DialogContent>


    </Dialog>
  )
}

export default DialogProjectsWrapper