# Anonymath

This repository contains the source code for [anonymath.com](https://anonymath.com).

The main technologies it uses are:

- [Bulma](https://bulma.io)
- [Next.js](https://nextjs.org)
- [Playwright](https://playwright.dev)
- [Typescript](https://www.typescriptlang.org)

## Contribute

You can contribute by translating Anonymath into your language. To do so, you must follow the instructions that you will find in the [Translate Anonymath](#translate-anonymath) section at the end of this document.

If you have an idea or have found a bug you can write us an _issue_ or you can develop that idea or fix that bug yourself. In this case you must follow the following instructions:

0. Read **all** of this README.
1. Use the development environment of the project.
2. Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
3. Use **unit** and/or **E2E** tests.
4. Maken _pull request_ from a fork of this repository.

### 1.- Development Environment

#### Requirements

1. [Docker](https://docs.docker.com/get-docker/)
2. [Visual Studio Code](https://code.visualstudio.com/)
3. [Remote Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

#### Start the environment

Whenever you want to start the development environment you need to open the project from [Visual Studio Code using the remote container](https://code.visualstudio.com/docs/remote/containers) provided in this repository (see directory _.devcontainer_).

> The first time you open the project using the remote container it will take more time since it has to be built.

#### Install Dependencies

Open a terminal inside the environment and run:

```bash
node ➜ /workspaces/anonymath (master) $ yarn
```

> Once the dependencies are installed, it will not be necessary to execute the previous command except when there are changes in the dependencies.

#### Start The Project

Open a terminal inside the environment and run:

```bash
node ➜ /workspaces/anonymath (master) $ yarn dev
```

Anonymath will be accessible from [http://localhost:3000/](http://localhost:3000/).

> Any changes made to the project while the `yarn dev` command is running, will cause the browser to refresh automatically and the changes will be visible.

#### Use of the Environment

The environment installs in the remote container the extension [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and configures it to format Typescript, Javascript and JSON code when saving any modified file.

The environment uses the following [Git hooks](https://git-scm.com/docs/githooks) managed by [Husky](https://typicode.github.io/husky). You can find them in the directory _.husky_:

- **commit-msg**: Checks if the commit message conforms to Conventional Commits.
- **pre-commit**:
  - Pass unit tests.
  - Checks the code with the Linter.
  - Checks the code with Pretier.
- **pre-push**: Checks that the project building is successful.

In order to run Git hooks, it is necessary to have certain dependencies installed, such as Node.js, Yarn, etc. All these dependencies are installed in the development environment, so if you execute all the git commands from the development environment terminal you should not have any problems. In case you don't want to use git from the development environment, you must have all the dependencies installed on your machine.

### 2.- Conventional Commits

Any commit **must** conform the Conventional Commits. In the file [commitlint.config.js] you can check the validation rules.

### 3.- Tests

Whenever you develop a new functionality, check if tests can be added to validate its correct operation or check if any existing tests needs to be updated.

#### Unit Testing

We use [Jest](https://jestjs.io/) for Unit Tests. The tests are in the _tests/unit_ directory and they run in the same development environment using:

```bash
node ➜ /workspaces/anonymath (master) $ yarn test:unit
```

#### End-to-End Testing

We use [Playwright](https://playwright.dev/) for End-to-End Testing. The tests are in the _tests/e2e_ directory and they run in a _Docker_ container outside of the development environment.

**Before running the tests for the first time** you must build the image:

```bash
~ make build-test-environment
```

> That container is created from a _Docker_ which is in _tests/e2e/container_.

Once the image is built you can run the tests.

1. While the project is accessible in [http://localhost:3000](http://localhost:3000), start the End-to-End sandbox container:

   ```bash
   ~ make open-test-environment
   ```

2. Inside the End-to-End sandbox container, run:

   ```bash
   /anonymath# yarn test:e2e
   ```

### 4.- Pull Request

Any contributions must be incorporated through a _pull request_ to the branch _staging_ from a fork of the main repository. In your repository use all the commits you want but before making a pull request it is better to do an interactive rebase to join, discard or rewrite the commits to have a useful but not redundant history.

Each _pull request_ made to the _staging_ branch involves the building of the whole project. The result of that build can be seen in the _pull request_ itself. When the build is successful, the result of the project build is displayed at a temporary URL provided by Netlify. After that building, the Unit and End-to-End Tests are run. Only the _pull request_ that successfully pass the tests will be integrated into _main_.

## Translate Anonymath

From Anonymath we will be very happy and grateful if you want to translate [anonymath.com](https://anonymath.com) into your own language.

There are two ways to translate Anonymath:

1. Into the source code.
2. Through PoEditor.

### 1.- Into the Source Code

1. Make a copy of the file _messages/en.json_ (or the language file you want to use as starting point) using the identifier as the file name [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (two-letter) for your language. By instance, _messages/ki.json_ for the Kikuyu language.
2. EIn line 2 you will see the key _"language"_, its value should be the name of your language written in your language. For instance, _français_ for French.
3. Translate the rest of the keys in the file.
4. Do a _pull request_ as explained in the section _[4.- Pull request](#4--pull-request)_.

### 2.- Through PoEditor

PoEditor is an online service to manage translations.

1. If you don't have a PoEditor account, create one.

@TODO: Finish this section
