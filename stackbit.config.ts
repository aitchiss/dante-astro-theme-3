
import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "devCommand": "npm run start",
    "nodeVersion": "18",
    "ssgName": "custom",
    "contentSources": [],
    "postInstallCommand": "npm i --no-save @stackbit/types"
})
