# Jest API testing

This a Jest API testing suite for an imaginary XYZ app. It has tests for `DELETE`, `GET`, `POST` and `PUT` endpoints, 2 for each.

Before using the project install `Node.js` and `npm`.

## How to run this project:
1. Clone the repository to your local directory
2. In terminal in this directory run: `$ npm install`
3. Start the Practicum server and copy its address
4. Add the server address to `config.js` file in the `API_URL` variable value
5. Run all the tests: `$ npx jest` or run individual tests `$ npx jest {testName.test.js}`

## Code Style observed:
- camelCase is used for variable names.
- variable names clearly describe what is stored in them.
- nouns or verbs are used for variable names.
- function names start with a verb.
- all the variables that change later in the code are declared with `let`
- variables that don't change are declared with `const`
- each test has a descriptive title. 
- the naming convention for tests: start with "should".
- important blocks of code have comments.
- variables are declared outside of `try/catch` blocks
- DRY principle followed. Reusable blocks of code, objects, and constants are made available globally and reused with imports.
- UPPER_CASE used for global variables and constants.
- unnecessary (non-error) logs are not printed to the console.

