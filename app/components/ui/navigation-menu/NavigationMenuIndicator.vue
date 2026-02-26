<script setup lang="ts">
import type { NavigationMenuIndicatorProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { NavigationMenuIndicator, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<NavigationMenuIndicatorProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuIndicator
    data-slot="navigation-menu-indicator"
    v-bind="forwardedProps"
    :class="cn('tw-:data-[state=visible]:animate-in tw-:data-[state=hidden]:animate-out tw-:data-[state=hidden]:fade-out tw-:data-[state=visible]:fade-in tw-:top-full tw-:z-[1] tw-:flex tw-:h-1.5 tw-:items-end tw-:justify-center tw-:overflow-hidden', props.class)"
  >
    <div class="tw-:bg-border tw-:relative tw-:top-[60%] tw-:h-2 tw-:w-2 tw-:rotate-45 tw-:rounded-tl-sm tw-:shadow-md" />
  </NavigationMenuIndicator>
</template>
