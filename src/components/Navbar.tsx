import {
    NavigationMenu,
    NavigationMenuItem,
    // NavigationMenuContent,
    // NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    // NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"

  
  

  
  
  
  function Navbar() {
    return (
      <nav className="w-[100%] h-12   flex  flex-row  justify-between items-center  px-4 bg-backgroundDark  ">
        <h1 className="bg-foreground_dark">Logo</h1>

        <section className="flex justify-between gap-4 ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="">
                <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()} >Contact</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/login" className={navigationMenuTriggerStyle()} >Login</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
  
  
          <section>
            {/* <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuLink href="*" className={navigationMenuTriggerStyle()} >Lenguaje</NavigationMenuLink>
              </NavigationMenuList>
            </NavigationMenu> */}
          </section>
  
  
        </section>
  
      </nav>
    )
  }
  
  export { Navbar };