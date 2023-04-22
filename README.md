本學期老師教了react.js，剛好把這個之前做到一半的專案拿來整理，作為本次的自學網頁，把原本舊的js轉移到next.js上面 
原本想轉 react.js，但無奈目前真的太忙了，先用輕量化的 next.js吧

自學重點 2023/4/23

1. 將簡單的js檔案轉到next.js，把大一到大二的作品截圖下來整理成卡片(cards)
2. 本次next.js與兩三年前不同 在使用 Next.js 的 <Link> 元件時出現的。錯誤訊息指出在 <Link> 元件的子元素中有一個 <a> 元素，但在 Next.js 中，<Link> 元件會自動轉換為 <a> 元素，因此不需要在 <Link> 的子元素中使用 <a>。

要修復這個問題，可以將 <a> 元素從 <Link> 的子元素中移除，或是使用 <Link legacyBehavior> 替代 <Link> 元件，這樣就可以在 <Link> 的子元素中使用 <a> 了。參考下面的範例：

// 使用 <Link> 元件時出現錯誤
<Link href="/about">
  <a>About</a>
</Link>

// 修復方法一：移除 <a> 元素
<Link href="/about">
  About
</Link>

// 修復方法二：使用 <Link legacyBehavior>
<Link href="/about" legacyBehavior>
  <a>About</a>
</Link>

3. 遇到環境變數的問題 path，不過已經順利排除了。
4. 維護專案的心力跟打造一個新專案差不多，很多當初寫的東西都不相容了
5. 佈署上Vecel (https://js-portfolio-framer-motion-909410028.vercel.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
