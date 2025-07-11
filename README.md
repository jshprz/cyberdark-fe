# Cyberdark FE

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.1.

## Development server

To start a local development server, run:

```bash
npm run start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component <component-name>
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

## Deployment

To deploy the Cyberdark front-end to the Linux development server, use the custom PowerShell deployment script named `deploy-cyberdark-fe.ps1` located in the root directory of this project.

### Prerequisites

The script uses SSH for secure communication. To avoid being prompted for a password every time you deploy, set up SSH key authentication.

1. Generate an SSH key (if you don't already have one):

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

> **Note:** Skip this step if you already have a public key (typically ~/.ssh/id_rsa.pub).

2. Add your local public SSH key to the dev server:

```bash
ssh-copy-id dev@<ip address>
```

Once this is set up, the deployment script will no longer prompt for a password.

### Running the Deployment Script

> **Note:** This example assumes you are on macOS or Linux. If you're on Windows, use PowerShell or Windows Terminal with appropriate path adjustments.

```bash
# (In MacOS) Install PowerShell via Homebrew: `brew install --cask powershell` to be able to run the command below.
pwsh

# Navigate to the project root
cd to-the-project-root-directory-of-the-cyberdark-fe

# Run the deployment script
./deploy-cyberdark-fe.ps1 -ProjectRoot "./" -Env prod -RemoteHost <ip address> -RemoteUser dev

# Script Parameters
# -ProjectRoot – Path to the root of the Angular project (e.g., ./)
# -Env – Deployment environment (dev or prod)
# -RemoteHost – IP address or hostname of the remote server
# -RemoteUser – Username used to connect to the remote server
```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
