
# uniapp 配置eslint+prettier+husky

## 1、安装依赖

```bash
  yarn add lint-staged eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue prettier --dev
```

## 2、安装babel插件

```bash
  yarn add @babel/core @babel/eslint-parser --dev
```

## 3、配置基本的.eslintrc.js

```javascript
    module.exports = {
        root: true,
        env: {
            node: true,
            browser: true,
            es6: true
        },
        extends: [
            "plugin:vue/essential",
            "eslint:recommended",
            "plugin:prettier/recommended",
        ],
        parserOptions: {
            parser: "@babel/eslint-parser",
            sourceType: 'module',// script或者module
            ecmaVersion: 'latest',// 6 7 8 9
        },
        rules: {
            "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
            "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        },
        globals: {
            vConsole: true,
            uni: true,
            ROUTES: true,
            getCurrentPages: true,
        }
    }
```

# 4、配置husky

## 4.1 安装提交文本描述规范

yarn add commitizen cz-customizable --dev

## 4.2 新建commitlint.config.js

```javascript
  module.exports = {
      extends: ['@commitlint/config-conventional'],
  };
```

## 4.3 安装提交规范的插件配合husky使用

  yarn add @commitlint/cli @commitlint/config-conventional --dev

## 4.4 新增文件.cz-config.js

  详细可参考配置

## 4.5 执行命令

  ```bash
   npx husky-init && npm install // mac
   npx husky-init ; npm install  // Windows npm安装 Husky
   npx husky-init ; yarn // Windows yarn安装 Husky

   npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

   pre-commit 将这个脚本里面改为 npm run lint:lint-staged
  ```

## 4.6 package.json

   新加命令

```json
    {
      "commit": "git-cz",
      "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
      "lint:lint-staged": "lint-staged",
      "prettier": "prettier --write .",
      // 新增config对象
      "config": {
        "commitizen": {
          "path": "node_modules/cz-customizable"
        }
      },
      "lint-staged": {
        "./src/**/*.{js,jsx,ts,tsx,vue}": [
          "prettier --write",
          "eslint --fix",
          "git add."
        ]
    }
    }
```

## 4.7、 .editorconfig配置文件

  ```bash
    # top-most EditorConfig file
    root = true

    [*.{js,jsx,ts,tsx,vue}]
    indent_style = space
    indent_size = 2
    end_of_line = crlf
    charset = utf-8
    trim_trailing_whitespace = false
    insert_final_newline = false
    max_line_length = 100
  ```
