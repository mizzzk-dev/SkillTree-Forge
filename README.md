# SkillTree Forge

SkillTree Forge は、ゲーム開発向けのスキルツリーをブラウザ上で試作・調整するための軽量 MVP エディタです。

## 現在の実装範囲（MVP 初期）

- ダークテーマの 3 ペイン構成（Toolbar / Canvas / Inspector）
- サンプルノードの表示（絶対配置）
- SVG 線による有向エッジ描画
- ノード選択
- Inspector でノード名・コスト・説明を編集
- Toolbar からサンプルノードを追加
- localStorage への保存・復元
- 読み込み時のエッジ簡易バリデーション（自己ループ/重複/循環の除外）

## 技術スタック

- React
- TypeScript（strict）
- Vite

## セットアップ

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```
