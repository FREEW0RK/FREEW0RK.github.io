# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment
As Organization:
1. create new Branch e.g. gh-pages
2. go back on main branch
        add after project name a:  DEPLOYMENT BRANCH in docusaurus.config.json 
        deploymentBranch: 'gh-pages', // The branch of the docs repo to publish.


Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

MICROSOFT:
```
$  cmd /C "set GIT_USER=FreeworkEarth&& yarn deploy"
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
