<h1 align="center">Vite - React template</h1>

<p align="center">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/petergiromagny/vite-react-template?style=for-the-badge">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/petergiromagny/vite-react-template?style=for-the-badge">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/petergiromagny/vite-react-template?style=for-the-badge">
    <img alt="GitHub" src="https://img.shields.io/github/license/petergiromagny/vite-react-template?style=for-the-badge">
</p>

<br>

<div align="center">
    <img align="center" width="110" height="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png" alt="Vite Logo">
    &nbsp;&nbsp;&nbsp;&nbsp;
    <img align="center" width="110" height="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="Vite Logo">
</div>

<br>

<div align="center">
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="Typescript" width="40" height="40"/> 
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
        <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind" width="40" height="40"/>
    </a> 
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">
        <img src="https://comptoir-du-libre.org/img/files/Softwares/Yarn/avatar/Logo-yarn.png" alt="Yarn" width="40" height="40"/>
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://eslint.org/" target="_blank" rel="noreferrer"> 
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/1200px-ESLint_logo.svg.png" alt="ESLint" width="45" height="40"/> 
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://prettier.io/" target="_blank" rel="noreferrer"> 
        <img src="https://cdn.worldvectorlogo.com/logos/prettier-1.svg" alt="Prettier" width="40" height="40"/> 
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://typicode.github.io/husky/#/" target="_blank" rel="noreferrer">
        <span style="font-size: 40px" role="img" aria-label="Husky">🐶</span>
    </a>
</div>
<br>

Template to start a Vite - React App project with all essential configuration (ESLint, Prettier, Husky and Tailwind).

## Install

Use this template to create your project
![Use this template](public/README/use_template.png)

Create a new repository from this template
![Create repository](public/README/create_new_repo.png)

Clone your new repository (HTTPS or SSH clone)
```bash
git clone https://github.com/[your-username]/[your-new-repo-name].git
```
```bash
git clone git@github.com:[your-username]/[your-new-repo-name].git
```


Go to the project directory
```bash
  cd [your-new-repo-name]
```

Install dependencies
```bash
yarn
```
```bash
npm install
```

Start project
```bash
yarn dev
```
```bash
npm run dev
```

## Usage

### ESLint
```bash
yarn lint
```
```bash
npm run lint
```

### Prettier
```bash
yarn prettier
```
```bash
npm run prettier
```

### Husky

Init Husky
```bash
yarn husky:init
```
```bash
npm run husky:init
```

> **Note**
> 
> If you're using <code>npm</code> you have to update Husky pre-commit
> ```bash
> npx husky set .husky/pre-commit "npm run lint && npm run prettier"
> ```

- Edit <code>App.tsx</code> file
- Save and add modification to local repo with: <code>git add App.tsx</code>
- Then commit changes: <code>git commit -m "Update App.jsx"</code>

**In the terminal you gonna see <code>yarn/npm run prettier</code> followed by <code>yarn/npm run lint</code> before changes are committed on local branch**

## Follow me
👤 **Peter Giromagny**

- Instagram: [@ForAllDevkind](https://www.instagram.com/foralldevkind/)
- Github: [@petergiromagny](https://github.com/petergiromagny)
- Website: [petergiromagny.com](https://petergiromagny.com)

Please ⭐️ this repository if this project helped you!

## License

[MIT](https://choosealicense.com/licenses/mit/)