# web-app-template-2
A starter template for the build process for a web client.
This template includes babel, so ES6 is supported and compiled down to ES5.

## Prerequisites
- node v. 5+
- npm
- git-scm
- gulp installed globally



# web-app-template
A starter template for the build process for a web client.
This template includes babel, so ES6 is supported and compiled down to ES5.
This template should work equally well wether you develop on Windows, Mac and Linux.

##Computer wide setup
You need to do this once on your dev-machine. (Safe to do multiple times)
- Install node.js from https://nodejs.org/
- Install the git command line from https://git-scm.com/downloads
  - Select the option "Use Windows command prompt" (on Windows), use defaults for everything else.
- Install a good code editor. (I used Visual Studio Code for this template.)
- Open command prompt
  - run `npm install -g gulp` (You might need to use sudo on macs: `sudo npm install -g gulp`)

##Setup a new web project
Download or clone this project template, and remove the `.git` folder

```
git clone https://github.com/aeinbu/web-app-template-2.git
cd web-app-template-2
npm update
````

##Update an existing web project
Do this if after you cloned/checked out a project, or if there are missing script references. (Safe to do multiple times)
- Open command prompt in the web project folder in the filesystem
  - run `npm update`

##Adding a new library to a project
This is how you add a new JavaScript library to a project.
- Open command prompt in the web project folder in the filesystem
  - For npm run `npm install npm_lib_to_inst --save` (Replace npm_lib_to_inst with the name of the new reference)

##Running the website on your dev-computer
- Open command prompt in the web project folder in the filesystem
  - run `gulp serve`
- Open a browser and navigate to `http://localhost:9000/`

##Building the project
- Open command prompt in the web project folder in the filesystem
  - run `gulp build`
The outputs can be found in the dist folder

