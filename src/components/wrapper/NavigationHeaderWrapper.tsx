import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { useEffect, useState } from "react";

const NavigationHeaderWrapper = () => {
 const[menuSelect,setMenuSelect]= useState("projects")

 const routes=[
  { href: "/projects", label: "Proyectos" },
  { href: "/experience", label: "Experiencia" },
  { href: "/estudies", label: "Estudios" },
  { href: "/about-me", label: "Sobre mí" },
  { href: "/skills", label: "Skills" },
  { href: "/", label: "Contacto" },]



  return (
    <div className="flex justify-center p-2 h-9 content-center items-center max-w-7xl bg-muted rounded-sm">
      <NavigationMenu>
        <NavigationMenuList>
      { routes.map((route,index)=>(
        <NavigationMenuItem key={index}>
        <NavigationMenuLink
          href={route.href}
          className={`${navigationMenuTriggerStyle()} ${
            menuSelect === route.href ? "bg-muted-foreground text-primary" : ""
          }`}
          onClick={(e) => {
            e.preventDefault(); // Evita la navegación
            setMenuSelect(route.href);
             
          }}
        >
          {route.label}
        </NavigationMenuLink>
      </NavigationMenuItem>
      ))

      }

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationHeaderWrapper;




