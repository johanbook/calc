# calc

**calc** is a web app calculator built on top of [Svelte](https://svelte.dev/) and
[Mathjs](https://mathjs.org/). It is capable of handling the following:

- Arithmetic evaluation
- Conversion between common units, such as inch and cm
- Symbolic computation

It uses the syntax defined [here](https://mathjs.org/docs/expressions/syntax.html).

## Developing

To run `calc`, install dependencies with `npm install` (or `pnpm install` or `yarn`), start a
development server:

```bash
npm run dev
```

## Building

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deployment

Calc is intended to be deployed as static pages, well suitable for e.g. Github pages.
