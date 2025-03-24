# Products List

This project is a **pnpm monorepo** setup featuring a **React frontend** and an **Express backend**, optimized for development and production using `concurrently` and `nx` for task management.

## 📂 Project Structure

```
/project-root
│── packages/
│   ├── frontend/  # React app
│   ├── api/       # Express backend
│── package.json   # Root package.json with scripts and dependencies
│── pnpm-workspace.yaml  # pnpm monorepo configuration
│── tsconfig.base.json   # Shared TypeScript configuration (if applicable)
```

## 🚀 Features

- **Monorepo architecture** with `pnpm`.
- **Concurrent development**: Run both frontend and backend in parallel.
- **Optimized builds** using `nx run-many`.

## 🛠️ Tech Stack

- **Frontend**: React (Vite)
- **Backend**: Express.js, Node.js
- **Package Management**: `pnpm`
- **Task Runner**: `nx`

## ⚙️ Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/nagamanikantamanam/products-list.git
   cd products-list
   ```
2. Install dependencies:
   ```sh
   pnpm install
   ```

## 🎯 Development

Run both frontend and backend simultaneously:

```sh
pnpm start
```

This executes:

```json
"start": "concurrently \"pnpm --filter frontend dev\" \"pnpm --filter api exec pnpm start\""
```

- The frontend runs in development mode.
- The backend starts the Express server.

## 🔧 Building the Project

To build both frontend and backend:

```sh
pnpm build
```

This triggers:

```json
"build": "nx run-many --target=build --parallel"
```

## 📜 Scripts

| Command                             | Description                                  |
| ----------------------------------- | -------------------------------------------- |
| `pnpm start`                        | Runs frontend and backend concurrently       |
| `pnpm build`                        | Builds both frontend and backend in parallel |
| `pnpm --filter frontend dev`        | Starts frontend in development mode          |
| `pnpm --filter api exec pnpm start` | Runs the Express backend                     |
