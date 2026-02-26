<script setup lang="ts">
import type { NavigationMenuLinkEmits, NavigationMenuLinkProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  NavigationMenuLink,
  useForwardPropsEmits,
} from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<NavigationMenuLinkProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<NavigationMenuLinkEmits>()

const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <NavigationMenuLink
    data-slot="navigation-menu-link"
    v-bind="forwarded"
    :class="cn('tw-:data-active:focus:bg-accent tw-:data-active:hover:bg-accent tw-:data-active:bg-accent/50 tw-:data-active:text-accent-foreground tw-:hover:bg-accent tw-:hover:text-accent-foreground tw-:focus:bg-accent tw-:focus:text-accent-foreground tw-:ring-ring/10 tw-:dark:ring-ring/20 tw-:dark:outline-ring/40 tw-:outline-ring/50 tw-:[&_svg:not([class*=\'text-\'])]:text-muted-foreground tw-:flex tw-:flex-col tw-:gap-1 tw-:rounded-sm tw-:p-2 tw-:text-sm tw-:transition-[color,box-shadow] tw-:focus-visible:ring-4 tw-:focus-visible:outline-1 tw-:[&_svg:not([class*=\'size-\'])]:size-4', props.class)"
  >
    <slot />
  </NavigationMenuLink>
</template>
