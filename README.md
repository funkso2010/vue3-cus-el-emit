# vue-3-cus-el-emit

This repo reproduces "defineAsyncComponent" emit issue.
dist folder is already prebuild. You need to leave index.html as is, since custom elements are hardcoded into html file.
Vite config 'emptyOutDir' is set to 'false'
Node 14.20.0

# Updated 01-10-2023
This repo shows default props reflection issue on custom element.
dist folder is already prebuild. You need to leave index.html as is, since custom elements are hardcoded into html file.
Vite config 'emptyOutDir' is set to 'false'
Node 14.20.0.

If index.html is not opening please use something like http-server to run: http-server ./dist

## Project Setup

```sh
npm install
```

### Run locally

```sh
npm run preview
```
