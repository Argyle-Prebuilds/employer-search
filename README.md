## Employer Search
![image](https://user-images.githubusercontent.com/18395671/167415584-26ddef0f-92c6-425c-8bee-a4432beb85f4.png)

Completing any application requires a user to manually enter the name of their employer. These text fields are free-form entries, error-prone, and are not governed by a fixed database. Just as Google auto-completes search entries, the Employer Search pre-build auto-completes employer name entries.

Employer Search uses Argyle’s database along with the Fortune 10k and the IRS’s registered payroll service providers, powering an in-line employer name auto-complete field. With this repository, you control and customize the data that matters most to you.

You can try out the Employer Search demo [here](https://prebuild.argyle.com/employersearch) and learn more about its features here (link to docs to be added).

## Getting Started

1. Rename `env.example` to `.env` and fill in Argyle related keys from your https://console.argyle.com account.

2. Install the dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech stack

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses [Tailwind CSS](https://tailwindcss.com/) for styling and [Jotai](https://jotai.org/) for state management. [Downshift](https://github.com/downshift-js/downshift) provides primitives for autocomplete component, while [Fuse.js](https://fusejs.io/) is used for fuzzy-matching.

## Prerequisites

- [Argyle Account](https://console.argyle.com/sign-up)

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Argyle Docs](https://argyle.com/docs) - learn about Argyle integration
