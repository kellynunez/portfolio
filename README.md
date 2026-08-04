# My Portfolio

This portfolio was custom-built with React, Next.js, and Tailwind CSS. If you're already comfortable with Next.js, feel free to dig in and get started. If not, we'll provide some details below to get you up and running.

## Let's get things running

This project is built on top of [NextJS](https://nextjs.org/), a full stack development framework built on top of React.

At the root of the project, you'll see a `package.json` file defining the project dependencies.

Key dependencies include:

- `framer-motion` -> A react based animation library used for most animations
- `animejs` -> A secondary animation library used for the staggered grid animation in the hero section.
- `tailwindcss` -> All styling uses Tailwind CSS for this project

Now that that's out of the way, you can get your project running by first installing dependencies.

From your terminal, run:

```
npm install
# or
yarn install
```

This will take a minute or two, but once that's done, you should be able to run the following command:

```
npm run dev
# or
yarn dev
```

This will start your project on `localhost:3000`

## The file structure

Because this is a Next.js project, it follows the standard Next.js pattern for organizing files and components:

- `_app.tsx/jsx` -> A file which wraps around every page in our app. For this project, we've left this empty.
- `_document.tsx/jsx` -> The Next.js version of the base HTML document configured with Tailwind classes.
- `index.tsx/jsx` -> Represents the home route. You can start exploring the codebase from here, along with custom font configurations.

Inside of the `/src/components/` directory you'll find all of the modular components rendered throughout the portfolio.

## Styling

Styling is implemented entirely using [Tailwind CSS](https://tailwindcss.com/).

Open up the `tailwind.config.js/ts` file to customize your configuration, color palettes, and design tokens.