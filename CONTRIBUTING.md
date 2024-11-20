# Contributing to `expo-material-tabs`

We appreciate your interest in contributing to `expo-material-tabs`! This document provides guidance on how to submit bug reports, contribute code, and participate in the project's development. We aim to make the process as straightforward and collaborative as possible.

## Code of Conduct

Before contributing, please review our [Code of Conduct](CODE_OF_CONDUCT.md). It outlines our community's expectations and guidelines for interactions.

## Setting Up the Project

### Prerequisites

Ensure that the following software is installed on your system:

- **Node.js**: A Long-Term Support (LTS) version is recommended.
- **npm** or **Yarn**: Package managers for Node.js.
- **Expo CLI**: Command-line interface for managing Expo projects.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/youzarsiph/expo-material-tabs.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd expo-material-tabs
   ```

3. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Using Yarn:

   ```bash
   yarn install
   ```

4. **Start the Application**

   Using npm:

   ```bash
   npm start
   ```

   Using Yarn:

   ```bash
   yarn start
   ```

## Contribution Process

### Reporting Issues

If you encounter a bug or have a feature request, please use the [issue tracker](https://github.com/youzarsiph/expo-material-tabs/issues) to report it. When creating an issue, provides as much detail as possible, including:

- **A clear and descriptive title**
- **Details of your operating system**
- **A detailed description of the issue**
- **Steps to reproduce the issue**
- **Any relevant error messages or logs**

### Contributing Code

1. **Fork the Repository**

   Click the "Fork" button on the [repository page](https://github.com/youzarsiph/expo-material-tabs) to create a copy of the repository under your GitHub account.

2. **Create a Feature or Bugfix Branch**

   Branches should be descriptive and named following this convention:

   - For features: `feature/description-of-feature`
   - For bug fixes: `fix/description-of-bug-fix`

   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make Your Changes**

   Ensure that your code adheres to the coding standards and guidelines specified in this document and the [API documentation](https://github.com/youzarsiph/expo-material-tabs/wiki).

4. **Test Your Changes**

   Run the test suite to verify that your changes do not introduce new issues.

   ```bash
   npm test
   ```

   or

   ```bash
   yarn test
   ```

5. **Commit Your Changes**

   Follow the [Git commit best practices](https://chris.beams.io/posts/git-commit/) when writing your commit messages.

   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

6. **Push to Your Fork**

   ```bash
   git push origin feature/AmazingFeature
   ```

7. **Open a Pull Request**

   - Navigate to the original repository on GitHub.
   - Click on the "Compare & pull request" button.
   - Provide a clear and descriptive title and description for your pull request.
   - Reference any related issues by including `#issue-number` in your PR description.

### Review Process

- Your pull request will be reviewed by the maintainers.
- Respond to any feedback or requests for changes as promptly as possible.

### Code Guidelines

#### Coding Style

We follow coding style guidelines enforced by [ESLint](https://eslint.org/). Ensure your code adheres to these guidelines to maintain consistency.

#### Code Quality

- Write clean, readable, and maintainable code.
- Document your code where necessary, and ensure that public APIs are well-documented.

#### Testing

- Write unit tests for new components and functionality.
- Ensure that existing tests pass with your changes.

### Documentation

- Update the documentation in the [wiki](https://github.com/youzarsiph/expo-material-tabs/wiki) as needed.
- Ensure that the API documentation is accurate and up-to-date.

## Security

We take security seriously and follow best practices to protect the library and its users. Here are some key security measures:

- Regular security audits using [CodeQL](https://codeql.github.com/).
- Dependency management with [Yarn Audit](https://classic.yarnpkg.com/en/package/yarn-audit/) or [npm Audit](https://docs.npmjs.com/cli/v7/commands/npm-audit).
- Code reviews and static analysis to identify and fix security vulnerabilities.

## Licensing

By contributing to `expo-material-tabs`, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).

## Contact

For any questions or inquiries, please contact the maintainers:

- **Maintainer**: Yousuf Abu Shanab
- **GitHub**: [youzarsiph](https://github.com/youzarsiph)
