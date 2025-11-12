import { keys as cms } from "@repo/cms/keys";
import { keys as core } from "@repo/next-config/keys";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  extends: [
    cms(),
    core(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
