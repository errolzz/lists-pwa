# React + Redux Starter

A starter kit for a site using:

- Webpack 4  
- React  
- Redux  
- Redux Thunk
- React Redux Router
- React Helmet
- PostCSS Preset Env
- AirBnB ESLint  
  

### Requirements:
- Node 8.9.4+  
- Npm 6.1.0+  


### Setup
Update to latest packages:  
```
npm update --save --dev
```

Install dependencies:  
```
npm install
```


### Development
Start a local development server at http://localhost:8080/, build project, and watch files.
```
npm run dev
```
> You can access the dev build from any device on the network through your network IP address. If you don't know your IP, use this tool to find it https://www.npmjs.com/package/dev-ip  


### Production
Build project to dist/ folder for deployment:
```
npm run dist
```  


### Linting
This starter encourages using the eslint AirBnB linter.  
See how to install and configure it here:  
https://www.npmjs.com/package/eslint-config-airbnb-bundle

- two space indent
- single quote strings
- trailing commas
- semicolons
- many other bug-reducing rules


### Folder Structure
__assets__   
> Contains all static assets. Create folders for fonts, images, etc, in here.  

__components__  
> Small and highly reusable interface elements, these should rarely if ever be connected to redux.  

__constants__  
> Application constants for both scripts and styles.  

__redux__  
> Store related files. There is generally one file per data entity(users, products, etc...). Each redux file contains actions, action creators, and a reducer which gets exported. The store.js file combines the reducers and creates the application store with browser history and thunk for async actions.  

__features__  
> Larger and more complex interface elements which generally do not get re-used. These will often be connected to redux via a Connected wrapper file.

__pages__  
> Top level application views which are rendered by the router.


### Styles
This repo uses a PostCSS preset environment.  
Read about it here: https://github.com/csstools/postcss-preset-env.  


### Internationalization
This repo does not include internationalization features by default.  
The recommended package to handle locale string swapping and formatting is react-intl.  
Full documentation here: https://github.com/yahoo/react-intl/wiki  


### Routing
The server must be able to handle push state urls like localhost:8080/user/bob_ross and serve up the index page from any route.  
This repo provides a basic htaccess file that will allow this.  



