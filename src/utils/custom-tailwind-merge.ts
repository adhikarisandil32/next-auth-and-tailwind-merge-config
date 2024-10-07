import { extendTailwindMerge } from "tailwind-merge"

// this configuration is to let tailwind-merge know that text-big and text-primary are belong to different class groups
// visit https://github.com/dcastil/tailwind-merge/blob/v2.3.0/docs/recipes.md for more
const customTwm = extendTailwindMerge({
  extend: {
    theme: {
      colors: ["primary", "secondary"],
    },
    classGroups: {
      "font-size": [{ text: ["small", "big", "medium"] }],
    },
    conflictingClassGroups: {
      // px: ["pr", "pl"],
      // read more at https://github.com/dcastil/tailwind-merge/blob/v2.5.3/docs/api-reference.md
      // and https://github.com/dcastil/tailwind-merge/blob/v2.5.3/docs/configuration.md
    },
  },
})

export { customTwm }
