import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { Separator } from "@/components/ui/separator"

import type { CollectionEntry } from "astro:content";


function NavigationProjects({ project }: { project: CollectionEntry<"projects"> }) {

  // Utility function to convert content object keys to readable strings for display.
  // Can be extracted for reuse across different components.
  function transformKey(key: string): string {
    const map: Record<string, string> = {
      architecture: "Arquitectura",
      designPatterns: "Patrones de Diseño",
      performance: "Performance",
      technologies: "Tecnologías",
    };
    return map[key] || key;
  }



  return (
    // navigation
    <Tabs defaultValue="general" className=" flex flex-col items-center w-full">
      <TabsList className="grid w-full   grid-cols-4 cursor-pointer ">
        <TabsTrigger className="cursor-pointer" value="general">General</TabsTrigger>
        <TabsTrigger value="frontend">Frontend</TabsTrigger>
        <TabsTrigger value="backend">Backend</TabsTrigger>
        <TabsTrigger value="devops">Devops</TabsTrigger>
      </TabsList>
      {/* 
    //content general */}
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
        <Separator className="mb-4 mt-4"></Separator>
        {project.data.url ? (
          <div>
            <h3 className="mt-2 mb-2 text-primary font-bold">Visitar Demo</h3>
            <a href={project.data.url} className="text-blue-500 hover:underline text-start">
              {project.data.url}
            </a>
          </div>
        ) : (
          <div>
            <h3 className="mt-2 mb-2 text-primary font-bold">Visitar Demo</h3>
            <p className="text-start">No Hay Demo Disponible</p>
          </div>
        )}



      </TabsContent>
      {/* //content frontend */}
      <TabsContent className="text-muted-foreground" value="frontend">
        {project.data.noFrontend ? (
          <div>
            <h3 className="mt-2 mb-2 text-primary font-bold">No FrontEnd</h3>
            <p className="text-start">{project.data.noFrontend}</p>
          </div>
        ) : (
          project.data.frontend &&
          Object.entries(project.data.frontend).map(([key, value]) => (
            <div key={key}>
              <h3 className="mt-2 mb-2 text-primary font-bold capitalize">
                {transformKey(key)}
              </h3>
              {Array.isArray(value) ? (
                <ul className="list-disc ml-5 marker:text-primary">
                  {value.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-start">{value}</p>
              )}
              <Separator className="mb-4 mt-4" />
            </div>
          ))
        )}
      </TabsContent>

      {/* // content bakend */}
      <TabsContent className="text-muted-foreground" value="backend">
        {project.data.noBackend ? (
          <div>
            <h3 className="mt-2 mb-2 text-primary font-bold">No BackEnd</h3>
            <p className="text-start">{project.data.noBackend}</p>
          </div>
        ) : (
          project.data.backend &&
          Object.entries(project.data.backend).map(([key, value]) => (
            <div key={key}>
              <h3 className="mt-2 mb-2 text-primary font-bold capitalize">
                {transformKey(key)}
              </h3>
              {Array.isArray(value) ? (
                <ul className="list-disc ml-5 marker:text-primary">
                  {value.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-start">{value}</p>
              )}
              <Separator className="mb-4 mt-4" />
            </div>
          ))
        )}
      </TabsContent>

      {/* //content devops */}
      <TabsContent className="text-muted-foreground" value="devops">
        {project.data.devops &&
          Object.entries(project.data.devops).map(([key, value]) => (
            <div key={key}>
              <h3 className="mt-2 mb-2 text-primary font-bold capitalize">
                {transformKey(key)}
              </h3>
              {Array.isArray(value) ? (
                <ul className="list-disc ml-5 marker:text-primary">
                  {value.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-start">{String(value)}</p>
              )}
              <Separator className="mb-4 mt-4" />
            </div>
          ))}
      </TabsContent>

    </Tabs>
  )
}

export default NavigationProjects