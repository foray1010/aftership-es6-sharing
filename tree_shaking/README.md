### Speaker environment

- node 4.4.2 (4.2 or above should be ok)

### Before you run the code

```sh
cd aftership-es6-sharing
./install.sh
```

Compile the code by `webpack`:

```sh
VERSION=1 NODE_ENV=development webpack
```

`VERSION`: acting like webpack `1` or `2`
`NODE_ENV`: `development` or `production`, use `production` if you want to compile the source code by [UglifyJS](https://github.com/mishoo/UglifyJS)

Compiled code will be shown in `dist`
