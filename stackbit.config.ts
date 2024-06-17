
import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "devCommand": "astro dev --port $PORT",
    "nodeVersion": "18",
    "ssgName": "custom",
    "contentSources": [],
    "postInstallCommand": "npm i --no-save @stackbit/types",
    "experimental": {
        "ssg": {
          "name": "astro",
          "logPatterns": {
            "up": ["ready in", "watching for file changes"],
          },
          passthrough: ["/astro/**"],
        },
      },
    })

