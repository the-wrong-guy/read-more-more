import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
// import scss from "rollup-plugin-scss";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import postcss from "rollup-plugin-postcss";

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    postcss({
      extract: false,
      modules: true,
      use: ["sass"],
    }),
    external(),
    babel({
      exclude: "node_modules/**",
    }),
    del({ targets: ["dist/*"] }),
  ],
  external: [Object.keys(pkg.peerDependencies || {}), "html-react-parser"],
};
