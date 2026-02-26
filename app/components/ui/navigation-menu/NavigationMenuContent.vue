<script setup lang="ts">
import type { NavigationMenuContentEmits, NavigationMenuContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  NavigationMenuContent,
  useForwardPropsEmits,
} from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<NavigationMenuContentProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<NavigationMenuContentEmits>()

const delegatedProps = reactiveOmit(props, "class")

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <NavigationMenuContent
    data-slot="navigation-menu-content"
    v-bind="forwarded"
    :class="cn(
      'tw-:data-[motion^=from-]:animate-in tw-:data-[motion^=to-]:animate-out tw-:data-[motion^=from-]:fade-in tw-:data-[motion^=to-]:fade-out tw-:data-[motion=from-end]:slide-in-from-right-52 tw-:data-[motion=from-start]:slide-in-from-left-52 tw-:data-[motion=to-end]:slide-out-to-right-52 tw-:data-[motion=to-start]:slide-out-to-left-52 tw-:top-0 tw-:left-0 tw-:w-full tw-:p-2 tw-:pr-2.5 tw-:md:absolute tw-:md:w-auto',
      'tw-:group-data-[viewport=false]/navigation-menu:bg-popover tw-:group-data-[viewport=false]/navigation-menu:text-popover-foreground tw-:group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in tw-:group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out tw-:group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 tw-:group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 tw-:group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 tw-:group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 tw-:group-data-[viewport=false]/navigation-menu:top-full tw-:group-data-[viewport=false]/navigation-menu:mt-1.5 tw-:group-data-[viewport=false]/navigation-menu:overflow-hidden tw-:group-data-[viewport=false]/navigation-menu:rounded-md tw-:group-data-[viewport=false]/navigation-menu:border tw-:group-data-[viewport=false]/navigation-menu:shadow tw-:group-data-[viewport=false]/navigation-menu:duration-200 tw-:**:data-[slot=navigation-menu-link]:focus:ring-0 tw-:**:data-[slot=navigation-menu-link]:focus:outline-none',
      props.class,
    )"
  >
    <slot />
  </NavigationMenuContent>
</template>
