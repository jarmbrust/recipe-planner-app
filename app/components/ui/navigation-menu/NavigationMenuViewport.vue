<script setup lang="ts">
import type { NavigationMenuViewportProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  NavigationMenuViewport,
  useForwardProps,
} from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<NavigationMenuViewportProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div class="tw-:absolute tw-:top-full tw-:left-0 tw-:isolate tw-:z-50 tw-:flex tw-:justify-center">
    <NavigationMenuViewport
      data-slot="navigation-menu-viewport"
      v-bind="forwardedProps"
      :class="
        cn(
          'tw-:origin-top-center tw-:bg-popover tw-:text-popover-foreground tw-:data-[state=open]:animate-in tw-:data-[state=closed]:animate-out tw-:data-[state=closed]:zoom-out-95 tw-:data-[state=open]:zoom-in-90 tw-:relative tw-:mt-1.5 tw-:h-[var(--reka-navigation-menu-viewport-height)] tw-:w-full tw-:overflow-hidden tw-:rounded-md tw-:border tw-:shadow tw-:md:w-[var(--reka-navigation-menu-viewport-width)] tw-:left-[var(--reka-navigation-menu-viewport-left)]',
          props.class,
        )
      "
    />
  </div>
</template>
