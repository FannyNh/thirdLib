## Test the package locally


#### go to the root folder

```sh
npm link
```

##
#### go to your project

```sh
npm link thirdlib
```


##
#### back to your local thirdlib
For each modification you make on the project, it will update the symlink files.
```sh
npm run build:watch
```



##
#### Unlink to your local lib, go to your project terminal un run :
````sh
npm unlink thirdlib
````
