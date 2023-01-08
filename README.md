# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```
npx create-react-app@latest react-app-ts --template typescript
cd react-app-ts
npm run start
```

# ESLint

```
npm install eslint --save-dev
npx eslint --init
npx eslint --init
You can also run this command directly using 'npm init @eslint/config'.
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
```

# ESLint Plugin

```
npm install eslint-plugin-react-hooks --save-dev
```

```.eslintrc.json
    "rules": {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error"
    }
```

# Prettier

```
npm install prettier --save-dev
```

# ESLint と Prettier 統合

```
npm install eslint-config-prettier eslint-plugin-prettier --save-dev
```

## .eslintrc.json 更新

```.eslintrc.json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier:recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks",
        "prettier"
    ],
    "rules": {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "prettier/prettier": "error"
    }
}
```

## VSCode Settings

```.vscode/settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.tslint": true,
  }
}
```

コマンドパレットを開いて `Format Document`

# Storybook

```
npx sb@latest init
```

```
npm run storybook
```

# For TypeScript Code

https://zenn.dev/cryptobox/articles/d3f952db7bc077
