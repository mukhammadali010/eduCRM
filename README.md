# EduCRM

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Linting

To analyze and check our code for potential issues and enforce coding style rules, run:

```bash
npm run lint

```

## Prettier

To automatically format your code and ensure consistent style across the project, run:

```bash
npm run format

```

### CI

Triggers on every push or pull request to the main branch.
Runs:

`npm run lint` for lint checks

`npm run test` for unit tests

`npm run build` to build the app

```

```

### CD

Automatically deploys the build to Firebase Hosting after successful CI steps.

Deployment is triggered only on push to the main branch.

```

```

### Tailwind CSS

Tailwind CSS has been installed

Custom colors, fonts, animations, and breakpoints are added for consistent styling.

Tailwind classes can be used in all ./src/\*_/_.{html,ts,scss} files.

````

## Running unit tests

```bash
ng test
````

### Unit Testing

To write user-centric unit tests, the following packages are installed:

```bash
npm install -D @testing-library/angular @testing-library/dom @testing-library/user-event
```

- `@testing-library/angular` – Angular-specific test helpers
- `@testing-library/dom` – Core DOM utilities
- `@testing-library/user-event` – Simulates realistic user interactions like typing and clicking

To run unit tests:

```bash
npm run test
```

### End-to-End Testing (Playwright)

End-to-end tests are powered by [Playwright](https://playwright.dev), which provides fast, reliable, and cross-browser testing.

To run Playwright E2E tests:

```bash
npm run playwright test
```

To run tests in headed mode (with visible browser window):

```bash
npm run playwright test --headed
```

### CI/CD (Firebase Deployment)

- `dev` branch → deploys to `educrm-dev`
- `acc` branch → deploys to `educrm-acc`
- `main` branch → deploys to `educrm-prod`

Configured via `.firebaserc` and GitHub Actions workflow.

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
