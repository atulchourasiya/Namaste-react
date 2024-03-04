# Iginiting The App

- NPM manages package but it doesn't stand for node package manager
- Package.json is the configuration for node package manager
- First thing we will going to install is bundler 
- -D is used to save in dev dependency
- ^ is used to auto update the minor update **1.2.x < 2.0.0**
- ~ is used to auto update the patch version **1.2.x < 1.3.0**
- package-lock.json keeps the track of exact version or package.json can have a appox version or ^ or ~
- Any package we install also has transitive dependency
- package-lock.json as the name suggest lock the exact version of each dependency version with the integrity hash to avoid it is working on my computer problem
- npx parcel index.html
- npx means execute a package
- npm means install the package 
- CDN link is not a good way to integrate react in our project
- npm install react
- npm install react-dom
- Type module remove the error Browser Script can't have import and export
- Cra used webpack as a bundler 
- npx parcel build index.html
- dist used to server the build 
- we can specify browser list on browser list package for browser support
- when we build prod build it will also create dist folder

# Parcel 
- Dev Build 
- Local Server
- HMR - Hot Module Replacement
- File Watching Algo  - Written in C++
- Parcel Caching - Faster build 
- Image Optimization 
- Minification
- Bundling 
- Compressing - Remove white space
- Consistent Hashing 
- Code Splitting 
- Differential Bundling - support older browser
- Diagnostic 
- Error handling 
- Https Support - To test something on ssl
- Tree Shaking - remove extra code 
- Different dev or prod build 


