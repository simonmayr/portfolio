# Portfolio 2024

## Developing

Once you've cloned this project and installed dependencies with `pnpm install`, start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
docker compose up -d
```

To deploy changes run:

```bash
docker compose build
docker compose up -d

# or to do it in one go:
docker compose up --build -d
```
