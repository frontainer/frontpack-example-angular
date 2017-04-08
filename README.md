### 準備

```
npm i
```

### 開発サーバー起動

```
npm start
```

### 開発用コード出力

```
npm run build
```

### ユニットテスト実行

```
npm test
```

### e2eテスト実行

```
npm run e2e
```

### Production用サーバー起動

```
npm run serve:prod
```

### Production用コード出力

```
npm run production
```

## Troubleshooting

### Q. I have belong error when execute `npm run production`. 

```
ERROR in ./src/main.ts
Module not found: Error: Can't resolve './../aot/src/app/app.module.ngfactory' in '/Users/frontainer/Documents/project/frontpack-example-angular/src'
 @ ./src/main.ts 6:29-77
 @ multi ./src/polyfills ./src/main ./src/styles.scss
```

### A. Add file extentions at entry.main files in `webpack.config.js`

from

```
entry: {
  main: [
    './src/polyfills',
    './src/main',
    './src/styles.scss'
  ]
}
```

to

```
entry: {
  main: [
    './src/polyfills.ts', // <- add '.ts'
    './src/main.ts',
    './src/styles.scss'
  ]
}
```
