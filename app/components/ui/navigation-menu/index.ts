import { cva } from "class-variance-authority"

export { default as NavigationMenu } from "./NavigationMenu.vue"
export { default as NavigationMenuContent } from "./NavigationMenuContent.vue"
export { default as NavigationMenuIndicator } from "./NavigationMenuIndicator.vue"
export { default as NavigationMenuItem } from "./NavigationMenuItem.vue"
export { default as NavigationMenuLink } from "./NavigationMenuLink.vue"
export { default as NavigationMenuList } from "./NavigationMenuList.vue"
export { default as NavigationMenuTrigger } from "./NavigationMenuTrigger.vue"
export { default as NavigationMenuViewport } from "./NavigationMenuViewport.vue"

export const navigationMenuTriggerStyle = cva(
  'tw-:group tw-:inline-flex tw-:h-9 tw-:w-max tw-:items-center tw-:justify-center tw-:rounded-md tw-:bg-background tw-:px-4 tw-:py-2 tw-:text-sm tw-:font-medium tw-:hover:bg-accent tw-:hover:text-accent-foreground tw-:focus:bg-accent tw-:focus:text-accent-foreground tw-:disabled:pointer-events-none tw-:disabled:opacity-50 tw-:data-[state=open]:hover:bg-accent tw-:data-[state=open]:text-accent-foreground tw-:data-[state=open]:focus:bg-accent tw-:data-[state=open]:bg-accent/50 tw-:focus-visible:ring-ring/50 tw-:outline-none tw-:transition-[color,box-shadow] tw-:focus-visible:ring-[3px] tw-:focus-visible:outline-1',
)
