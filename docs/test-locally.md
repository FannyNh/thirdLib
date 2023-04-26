## Test the package locally

go to the root folder

```sh
npm link
```

go to your project

```sh
npm link thirdlib
```

back to your local thirdlib

```sh
npm run build:watch
```

For each modification you make on the project, it will update the symlink files.
