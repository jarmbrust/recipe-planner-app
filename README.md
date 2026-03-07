# Recipe Planner App
---

## Purpose
This is a grocery planner application built with Nuxt, PostgreSQL, and Tailwind CSS.

The intent in creating this application is to assist both my wife and I in planning our grocery shopping by having a centralized place to keep track of what we need to buy from week to week.

## Features

### Phase 1
- Create and manage grocery lists
- Add items to the list with quantities and measurements
- Save and load grocery lists
- Support for multiple users (login support)
  - Group users by household
  - Recipe temp save on side, for consideration

### Phase 2
- Store recipes, and user rating for them.
- Generate a shopping list based on the items in the list
    - list with checkboxes to be used at the grocery store

### Phase 3
- Integrate with an online recipe database to suggest recipes
    - based on available ingredients
    - based on user input (category, etc)

### Phase 4
- Profit??  (TBD)

---

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup
```
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm build
```

Locally preview production build:

```bash
# pnpm
pnpm preview
```
