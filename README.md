<p align="center">
    <img src="./static/logo.svg" width="70px" />
</p>

<h1 align="center">Feature Sliced Svelte</h1>

<p align="center">
  <a href="https://github.com/mishamyrt/feature-sliced-svelte/actions/workflows/qa.yaml">
    <img src="https://github.com/mishamyrt/feature-sliced-svelte/actions/workflows/qa.yaml/badge.svg" />
  </a>
  <a href="https://github.com/mishamyrt/feature-sliced-svelte/actions/workflows/deploy.yaml">
    <img src="https://github.com/mishamyrt/feature-sliced-svelte/actions/workflows/deploy.yaml/badge.svg" />
  </a>
  <a href="https://www.npmjs.com/package/feature-sliced-svelte">
    <img src="https://img.shields.io/npm/v/feature-sliced-svelte" />
  </a>
</p>

Useful utilities for maintaining a project on Svelte according to the [Feature Sliced Design](https://feature-sliced.design/) architecture.

## Usage

First, install the package.

```sh
npm install --save-dev feature-sliced-svelte
```

Then wrap the root (App) element of your application in a FeatureSlicedDebug component.

```svelte
<script>
  import { FeatureSlicedDebug } from 'feature-sliced-svelte'
</script>

<FeatureSlicedDebug>
  <!-- your app code -->
</FeatureSlicedDebug>
```

### Layers

Now when creating a new component, use action to set the FSD layer. The allowed layer names can be found in the [FSD documentation](https://feature-sliced.design/docs/get-started/overview).

```svelte
<script>
  import { fsd } from 'feature-sliced-svelte'
</script>

<div use:fsd={'widgets/UserList'}>
  <!-- your widget code -->
</div>
```

### Debugging

To start or disable Feature Sliced Design debugging mode, press the key combination:
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>

## Developing

Once you've installed dependencies with`pnpm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of library, everything inside `src/routes` used as a showcase.

## Building

To build library:

```bash
npm run package
```

To create a production version of showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
