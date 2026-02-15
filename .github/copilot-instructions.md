<!-- .github/copilot-instructions.md: concise, repo-specific guidance for AI coding agents -->
# Copilot / AI Agent Instructions (concise)

Purpose: give an AI coding agent immediate, actionable knowledge to be productive in this Vite + React + TypeScript + shadcn UI project.

- Project entry: `src/main.tsx` mounts `App` which composes providers and routes.
- Routing: `src/App.tsx` uses `react-router-dom` with routes for `/`, `/menu`, `/contact` and a catch-all `*` route (keep new routes above the catch-all).
- State / data fetching: the app uses `@tanstack/react-query`. Wrap code that fetches remote data with `useQuery` / `useMutation` and register on the `QueryClient` created in `src/App.tsx`.

- UI primitives: `src/components/ui` contains shadcn- and Radix-based primitives (toaster, tooltip, form controls). Follow existing patterns when adding components (compose small primitives, expose simple props).
- Pages: top-level pages live in `src/pages/` (Index, Menu, Contact, NotFound). Prefer page-level routes there.

- Path aliases: imports use `@/…` (see `tsconfig.json` -> `"@/*": ["./src/*"]`). Use `@/` for new imports to match existing code.

- Build & run commands (from `package.json`):
  - `npm run dev` — start Vite dev server (use for local development)
  - `npm run build` — production build
  - `npm run build:dev` — vite build in development mode
  - `npm run preview` — preview a built site
  - `npm run lint` — run ESLint

- Styling: uses Tailwind CSS + `tailwind.config.ts`. Add utility classes rather than new global CSS where possible.

- Conventions to follow (observed patterns):
  - Small, focused components under `src/components/` and `src/components/ui/`.
  - Feature/page files under `src/pages/` with route mapping in `src/App.tsx`.
  - Shared helpers in `src/lib/` (e.g., `utils.ts`) and custom hooks in `src/hooks/`.
  - Keep top-level providers (React Query, tooltip, toasters) centralized in `App.tsx`.

- External dependencies & integrations to be aware of:
  - Radix UI primitives and shadcn-style composition in `src/components/ui/*`.
  - `react-router-dom` for client routing.
  - `@tanstack/react-query` for async data.
  - `sonner` and custom Toaster components for notifications.
  - The project was generated/connected with Lovable (see README); edits may also be applied via Lovable and auto-committed.

- Editing guidance for AI changes:
  - When adding routes: update `src/pages/*` and add a `<Route />` in `src/App.tsx` above the `*` route.
  - When adding UI primitives: mirror the folder/file naming and export style used in `src/components/ui`.
  - When adding imports, prefer `@/` alias and run type checks to ensure paths resolve.
  - Follow Tailwind utility patterns already used in `src` files; avoid introducing additional CSS frameworks.

- Tests: none discovered. If you add tests, document where they live and add a script entry.

- Useful files to inspect when modifying behavior:
  - `src/App.tsx` — providers and routing
  - `src/main.tsx` — app bootstrap
  - `src/components/ui/*` — UI primitives
  - `src/pages/*` — page implementations
  - `src/lib/utils.ts` and `src/hooks/*` — shared helpers
  - `package.json` — scripts and dependencies

If anything above is unclear or you want more examples (e.g., a sample new route + page or how to add a UI primitive), tell me which area to expand.
