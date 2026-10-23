# Assignment 12 – Web Component Library (UI Garden)

React + TypeScript (Create React App), styled-components and Storybook.
Components: Button, Label, Text, Table, TableHeader, TableRow, TableCell, TableFooter, Dropdown, RadioButton, Img, HeroImage, Card.

> **Name placeholders:** the assignment asks for `lastName_firstName`. This project uses `salazar_kane`.
> If that is wrong, replace it in `Dockerfile`, `nginx.conf` and the commands below.

Each component folder (`src/components/<Name>/`) contains
`<Name>.tsx`, `<Name>.stories.tsx`, `<Name>.types.tsx`, `<Name>.tests.tsx`, `index.ts`.

## 1. Project setup
Requires Node 18+ and npm.
```bash
npm install
npm start            # showcase app on http://localhost:8083
```

## 2. Storybook
```bash
npm run storybook    # http://localhost:6006
```
Every component has a **Default** and a **Disabled** story. Use the **Controls** panel to change text (`label`, `text`, `title`, ...) and colours (`backgroundColor`, `textColor`) and to toggle `disabled`.

## 3. Component tests
```bash
npm run test:ci      # single run (jest + React Testing Library)
npm test             # watch mode
```
Each component has tests that check it is **visible**, that its **background colour changes** when disabled (to `#cccccc`), and that the cursor is `not-allowed` when disabled. Test files use the `.tests.tsx` suffix and are picked up through `--testMatch` in `package.json`.

## 4. Docker build & run (production build on port 8083)
```bash
docker build -t salazar_kane_coding_assignment12 .
docker run -d -p 8083:8083 --name salazar_kane_coding_assignment12 salazar_kane_coding_assignment12
```
Open http://localhost:8083. The build output is served by nginx from the working directory `/salazar_kane_ui_garden`.

Stop / remove: `docker rm -f salazar_kane_coding_assignment12`

## 5. Verifying the requirements
| Requirement | How to check |
|---|---|
| 13 components, 5 files each | `ls src/components/*` |
| styled-components styling | see `*.tsx` files (`styled.*`) |
| Responsive | resize the browser at http://localhost:8083 (media queries at 600px) |
| Controls for text/background colour | Storybook → component → Controls panel |
| Default + disabled states, greyed out, `not-allowed` cursor | Storybook stories *Default* / *Disabled* |
| ≥ 2 tests per component | `npm run test:ci` (13 suites, 39 tests) |
| Docker: production build, container name, working dir | `docker ps` shows `salazar_kane_coding_assignment12`; `docker exec salazar_kane_coding_assignment12 pwd` prints `/salazar_kane_ui_garden` |
