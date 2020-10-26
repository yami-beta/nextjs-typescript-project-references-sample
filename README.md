# nextjs-typescript-project-reference-sample

Next.js で [Project References](https://www.typescriptlang.org/docs/handbook/project-references.html) を使えるのか検証するリポジトリです。

```bash
$ cd packages/ui
$ yarn build
$ cd ../app
$ yarn dev
```

## 概要

yarn workspace 等は使わずに単純に `packages/{ui,app}` にそれぞれ package.json を用意し別々の package として管理しています。  
`packages/app` は Next.js のアプリケーションで `packages/ui` 側が React コンポーネントのライブラリという扱いです。  
app 側から ui 側のコンポーネントを import しています。

