<div align="center">
<img width="205px" alt="logo" src="public/android-chrome-512x512.png">
<br>
<h1>Nightly ☄️</h1>
<img alt="Documentation" src="https://img.shields.io/badge/docs-main-blue">
<a href="https://github.com/RiteshPuvvada/Real-Time-Chat-Supabase-NextJs/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/RiteshPuvvada/Real-Time-Chat-Supabase-NextJs"></a>
<a href="https://github.com/RiteshPuvvada/Real-Time-Chat-Supabase-NextJs/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/RiteshPuvvada/Real-Time-Chat-Supabase-NextJs"></a>
<img alt="Uptime Robot ratio (7 days)" src="https://img.shields.io/uptimerobot/ratio/7/m789074376-4944aacf1aa54bc22fa9881a">
<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/RiteshPuvvada/Real-Time-Chat-Supabase-NextJs">
<a href="https://github.com/RiteshPuvvada/Real-Time-Chat-Supabase-NextJs/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/RiteshPuvvada/Real-Time-Chat-Supabase-NextJs?style=social"></a>
</div>


## Real-Time Data Syncing Chat Application with Supabase and Next.js
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

A full-stack Slack clone example using:

- Frontend:
  - Next.js.
  - [Supabase.js](https://supabase.io/docs/library/getting-started) for user management and realtime data syncing.
- Backend:
  - [app.supabase.io](https://app.supabase.io/): hosted Postgres database with restful API for usage with Supabase.js.


## Getting Started

- Clone the repository with:

```
$ git clone https://github.com/RiteshPuvvada/Real-Time-Chat-Supabase-NextJs.git
```

- Install the dependencies:
```bash
$ npm install
```

- Install supabase Javascript client:

```bash
$ npm install @supabase/supbase-js
```
- Create `.env` file for the Supabase `URL` and `ANON` key:
```
NEXT_PUBLIC_SUPABASE_URL= < YOUR SUPABASE URL >
NEXT_PUBLIC_SUPABASE_API_KEY= < YOUR SUPABASE ANON KEY >
```

- [Install ESLint Plugin](https://reactjs.org/docs/hooks-rules.html):

```bash
yarn add eslint-plugin-react-hooks@next
# or
npm install eslint-plugin-react-hooks@next
```
- ESLint config:
```bash
// Your ESLint configuration
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  }
}
```

- run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details

## License

This repository is under The MIT License. Read the [LICENSE](https://github.com/RiteshPuvvada/Real-Time-Chat-Supabase-NextJs/blob/main/LICENSE) file for more information.
