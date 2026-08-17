# Sorano Tomiyama Portfolio

冨山そらののポートフォリオサイトです。Vite と Vanilla JavaScript で構築しています。

## 起動方法

```bash
npm install
npm run dev
```

本番用ビルドは `npm run build` で `dist` に生成されます。

## コンテンツの変更

作品、プロフィール、スキル、SNS、各ページの文章はすべて `src/data.js` にまとめています。画像を追加する際は、`placeholder()` の出力を画像コンポーネントに置き換え、画像パスを同じデータファイルに追加してください。

主なURL:

- `/`
- `/works/morillion`
- `/works/hyakunin-cosme`
- `/works/hanabi`
- `/works/design-fes`
- `/works/tech`
- `/works/creative`

本番環境では各作品URLから直接アクセスできるよう、すべてのパスを `index.html` にフォールバックする設定を有効にしてください。
