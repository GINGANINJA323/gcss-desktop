# GCSS Electron

Based on a previous project, the [GCSS](https://github.com/GINGANINJA323/gcss), this program is an Electron based cloud save manager. It allows users to use a Git repo for storing game saves.

## Basic setup

As this program uses a Git repo to store saves, it will need some setup on Github in order to work. You'll need:

1. A [GitHub](https://github.com/) account
2. A private GitHub repository
3. A GitHub Personal Access Token (see PAT Setup).

When the program starts for the first time, it will ask for information such as your username, repo name and PAT. These are written to a local settings file (your PAT is not stored in the GitHub repo, it is used as authentication when talking to the GitHub REST API for reading/writing save files and metadata).

The structure of the save repo will look like this

- game_folder_1
-- game_manifest.json
-- game_1_save
- game_folder_2
-- game_manifest.json
-- game_2_save
- base_manifest.json

A folder is created for each game the program manages. Inside is a manifest indicating the latest save file, as well as the save file itself. The `base_manifest.json` file records a list of the games managed as well as the hostname of the systems interacting with the repo and the relevant save locations. This means that the systems you upload and download from can work out where saves can be found and stored when syncing across multiple devices. It is encouraged to have a private GitHub repo so that this data is not publicly available (it will contain file paths of your system/s.);

This information is kept in the repo so that clients can obtain the information on what games are stored without having to go through game setup on every client. Instead, once setup on one client, the information can be pulled from the repo on other clients, and then only the local path for that client needs to be added in order for the system to synchronise that client's saves.

## Developer setup

To run the GCSS for development purposes, you'll need the following:

1. Node version 22 or higher.
2. NPM (ships with NodeJS)
3. An IDE or script editor (VSCode is recommended, this project has VSCode specific infrastructure for ease of use).

Clone the repo, then open it in your script editor/IDE. Run `npm install` to acquire the dependencies, then use one of the following scripts to start the program:

 - `npm start`: starts the program in electron, similar to a packaged version of the program.
 - `npm run dev`: Starts the program in the browser with live reloading. This can be used to test changes in realtime.

 Additionally, VSCode tasks have been added and can be used to run the above scripts more conveniently. To run VSCode tasks, press `Cmd+p` followed by entering `task ` at which point VSCode should display the list of project tasks:

  - `task Start (prod)`: Equivalent to `npm start`
  - `task Start (dev)`: Equivalent to `npm run dev`

 The program is written primarily in TypeScript, but uses JavaScript for the webpack configs and the electron entrypoint (`public/main.js`).

 Webpack configs are seperated for development and live, and can be found in the project's root folder.

 We use webpack for bundling, babel for transpilation and ReactJS for the code itself. React code for the project can be found in the `src` folder.