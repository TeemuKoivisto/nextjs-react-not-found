# next.js React not found

Steps to reproduce:
1) Install and build `local-module` with: `cd local-module && yarn && yarn build`
2) Link it as a local library: `yarn link`
3) Go to the next.js app and link the module: `cd ../nextjs-app && yarn link local-module`
4) Install dependencies: `yarn`
5) Start the dev server: `yarn dev`

You should see now the following error message:

![React not found](nextjs-react-not-found.png?raw=true "React not found")

What makes this more weird, is that moving the local-module to the same folder as `nextjs-app` and linking it in the previous manner doesn't cause that error.

With any old regular React this setup will work. Dunno why it doesn't with next.js.