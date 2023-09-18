import { schemaTypes } from "@sanity/Schemas";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
const config = defineConfig({
  name: "default",
  title: "Infispark",

  projectId: "oy08lsi5",
  dataset: "production",
  basePath: "/admin",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});

export default config;
