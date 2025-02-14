import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { Separator } from "@/components/ui/separator"

import type { CollectionEntry } from "astro:content";

function NavigationProjects({ project }: { project: CollectionEntry<"projects"> }) {
  return (
    <Tabs defaultValue="general" className=" flex flex-col items-center w-full">
      <TabsList className="grid w-full   grid-cols-4 cursor-pointer ">
        <TabsTrigger className="cursor-pointer" value="general">General</TabsTrigger>
        <TabsTrigger value="frontend">Frontend</TabsTrigger>
        <TabsTrigger value="backend">Backend</TabsTrigger>
        <TabsTrigger value="devops">Devops</TabsTrigger>
      </TabsList>
      <TabsContent value="general" className="mt-10 text-muted-foreground">

        <div>
          <h3 className="mt-2 mb-2 text-primary font-bold ">Visión General</h3>
          <p className="text-start ">{project.data.general.overview}</p>
        </div>
        <Separator className="mb-4 mt-4"></Separator>
        <div>
          <h3 className="mt-2 mb-2 text-primary font-bold ">Cliente Objectivo</h3>
          <p className="text-start ">{project.data.general.targetClient}</p>
        </div>

      </TabsContent>
      <TabsContent className="text-muted-foreground" value="frontend">

        <div>
          <h3 className="mt-2 mb-2 text-primary font-bold ">Arquictetura</h3>
          <p className="text-start ">{project.data.frontend?.architecture}</p>
        </div>
        <Separator className="mb-4 mt-4"></Separator>
        <div>
          <h3 className="mt-2 mb-2 text-primary font-bold ">Patrones de Diseño</h3>
          <ul className="list-disc ml-5   marker:text-primary">
            {project.data.frontend?.designPatterns.map((pattern, index) => (
              <li key={index}>{pattern}</li>
            ))}
          </ul>
        </div>
        <Separator className="mb-4 mt-4"></Separator>
        <div>
          <h3 className="mt-2 mb-2 text-primary font-bold ">Performans</h3>
          <p className="text-start ">{project.data.frontend?.performance}</p>
        </div>
        <Separator className="mb-4 mt-4"></Separator>
        <div>
          <h3 className="mt-2 mb-2 text-primary font-bold ">Tecnologias</h3>
          <ul className="list-disc ml-5   marker:text-primary">
            {project.data.frontend?.technologies.map((techn, index) => (
              <li key={index}>{techn}</li>
            ))}
          </ul>
        </div>
      </TabsContent>
      <TabsContent className="text-muted-foreground" value="backend">


        <div>
          <h3 className="mt-2 mb-2 text-primary font-bold ">Arquictetura</h3>
          <p className="text-start ">{project.data.backend?.architecture}</p>
        </div>
        <Separator className="mb-4 mt-4"></Separator>
        <div>
          <h3 className="mt-2 mb-2 text-primary font-bold ">Patrones de Diseño</h3>
          <ul className="list-disc ml-5   marker:text-primary">
            {project.data.backend?.designPatterns.map((pattern, index) => (
              <li key={index}>{pattern}</li>
            ))}
          </ul>
        </div>
        <Separator className="mb-4 mt-4"></Separator>
        <div>
          <h3 className="mt-2 mb-2 text-primary font-bold ">Performans</h3>
          <p className="text-start ">{project.data.backend?.performance}</p>
        </div>
        <Separator className="mb-4 mt-4"></Separator>
        <div>
          <h3 className="mt-2 mb-2 text-primary font-bold ">Tecnologias</h3>
          <ul className="list-disc ml-5   marker:text-primary">
            {project.data.backend?.technologies.map((techn, index) => (
              <li key={index}>{techn}</li>
            ))}
          </ul>
        </div>
      </TabsContent>
      <TabsContent className="text-muted-foreground" value="devops">
        <div>
          <h3 className="mt-2 mb-2 text-primary font-bold ">Devops</h3>
          <p className="text-start">{project.data.devops}</p>
        </div>

      </TabsContent>
    </Tabs>
  )
}

export default NavigationProjects