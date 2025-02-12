import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"




function NavigationWrapper() {
  return (
    <div className="flex justify-center p-2 h-9 content-center items-center  max-w-7xl  bg-muted  rounded-sm  ">
        <NavigationMenu  >
          <NavigationMenuList>
            <NavigationMenuItem >
              <NavigationMenuLink href="/proyects"  className={navigationMenuTriggerStyle()} >Proyectos</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink  href="" className={navigationMenuTriggerStyle()}>Experiencia</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/login" className={navigationMenuTriggerStyle()}>Estudios</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()} >Sobre mi</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/login" className={navigationMenuTriggerStyle()} >Skills</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/login" className={navigationMenuTriggerStyle()} >Contacto</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>

        </NavigationMenu>

    </div>

  
  )
}

export { NavigationWrapper };