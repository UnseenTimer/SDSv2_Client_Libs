import { defineConfig } from "tsup";
import baseConfig from "./tsup.config";

export default defineConfig({
    ...baseConfig,
    format: ['cjs'],
    splitting: false,
    skipNodeModulesBundle: false,
    // Produces a single file
    bundle: true,
    outDir: 'dist-electron',
    target: 'node20',
    platform: 'node',
    //NOTE: replaceNodeEnv only takes affect if minify is true
    // Without that it will break since some script things will try and run development things
    // that might not be available.
    minify: true,
    replaceNodeEnv: true,
    // Includes all libs in the bundle
    noExternal: [/.*/],
});
