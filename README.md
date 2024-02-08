# NTU-Learning-Optimization-Club.github.io

## 使用指南

1. 打開終端機並執行 `git clone https://github.com/NTU-Learning-Optimization-Club/NTU-Learning-Optimization-Club.github.io.git`
2. 實驗結果相關文章請在 `content/posts/experiment` 中新增 md 檔撰寫，普通文章請在 `content/posts/article` 新增。
3. 新增 md 檔請在終端機執行 `hugo new content posts/<experiment or article>/<文章標題>`
4. 活動資訊請寫在 `content/activities.md` 中
5. 撰寫完文章後在終端機執行`git add .`, `git commit -m "<commit message>"`, 請在`<commit message>` 中簡短敘述修改內容，ex: add a new post.
6. 最後執行 `git push` 並確認網站成功更新。
   （你可以執行 `hugo` 加 `hugo server` 在本地確認網站更新後的長相，沒有問題再執行 git commit 與 push 將網站更新上網）

## Markdown 語法

請參考[這裡](https://hackmd.io/@eMP9zQQ0Qt6I8Uqp2Vqy6w/SyiOheL5N/%2FBVqowKshRH246Q7UDyodFA?type=book)

## Post template

剛新增的 md 檔內會有：

```
---
title: 文章標題
date: 生成時間
draft: true
---
```

draft 為 true 時文章不會出現在網站上，撰寫完畢請改為 false 才會出現在網站上\
將內容寫在第二個 `---` 之下
