# open-api-playwright

This project demonstrates how to use Playwright for API testing with a contract-first approach using OpenAPI specifications. It includes a Job Portal API example, a mock server for local testing, and a full suite of Playwright tests.

## Project Overview

The project is designed to test a Job Portal API. It uses Playwright for API testing, with OpenAPI specifications to define the API contract. The project also includes a mock server (Prism) for local testing.

## Key Components

- **API Specification (`spec-docs`)**: The core of the API definition using OpenAPI. It defines endpoints, schemas, and authentication.
- **Playwright Tests (`tests`)**: Contains API tests written with Playwright's `request` context to validate API responses against the OpenAPI spec.
- **Mock Server (`@stoplight/prism-cli`)**: Uses Prism to create a mock API from the OpenAPI spec for fast and reliable local testing.
- **API Client (`automateITApi`)**: A pre-packaged, type-safe API client generated from the OpenAPI specification.
- **Configuration (`playwright.config.ts`, `package.json`)**: Standard configuration files for Playwright and Node.js dependencies.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd open-api-playwright
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Mock Server

To test locally without a live backend, you can use the Prism mock server. You may want to add a `mock` script to your `package.json`:

```json
"scripts": {
  "mock": "prism mock spec-docs/features/user_stories/01_view_job_listing/openapi.yaml"
}
```

Then run:
```bash
npm run mock
```

### Running Tests

Once the mock server is running (or if you are pointing to a live API), you can run the Playwright tests. Add a `test` script to `package.json`:
```json
"scripts": {
  "test": "playwright test"
}
```

Then run:
```bash
npm test
```

To run tests in UI mode for debugging:
```bash
npx playwright test --ui
```

## Project Structure
```
.
├── APICalls-1.0.tgz          # Packaged API client
├── package.json              # Project dependencies and scripts
├── playwright.config.ts      # Playwright configuration
├── README.md                 # This file
├── spec-docs/                # API specifications and user stories
│   └── features/
│       └── user_stories/
│           └── 01_view_job_listing/
│               └── openapi.yaml  # OpenAPI spec for the Job Portal API
└── tests/                    # Playwright test files
    └── job.spec.ts           # Tests for the Job Portal API
```

## Strengths

- **Clear Separation of Concerns**: Well-defined separation between specs, tests, and configuration.
- **API-First Approach**: Uses OpenAPI as the single source of truth.
- **Type-Safe API Client**: Reduces errors and improves test maintainability.
- **Isolated Testing**: Prism mock server allows for fast, reliable, and isolated testing.

## References

- [https://sdks.io/docs/ways-to-build-sdks/code-generation/open-api-generator/generate-a-typescript-sdk/](https://sdks.io/docs/ways-to-build-sdks/code-generation/open-api-generator/generate-a-typescript-sdk/)
- [https://medium.com/@dxloop/contract-first-approach-with-node-js-and-openapi-for-rest-services-d2283a7ffd9d](https://medium.com/@dxloop/contract-first-approach-with-node-js-and-openapi-for-rest-services-d2283a7ffd9d)
- [https://cloud.google.com/apis/design](https://cloud.google.com/apis/design)
- [https://github.com/microsoft/api-guidelines](https://github.com/microsoft/api-guidelines)
- [https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi](https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi)
