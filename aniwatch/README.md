These files will automatically be replaced by the github action if a new version is found.

To create a custom/altered version

* Clone the https://github.com/ghoshRitesh12/aniwatch project or whatever fork.
* Make changes
* Copy over the `tsup.electron.config.ts` into the checked out project
* `cd` into the new project
* Run `yarn install`
* Run `NODE_ENV=production yarn tsup --config tsup.electron.config.ts --out-dir dist-electron && rsync -a dist-electron/ ../`
* Update the last_build_version.txt to be `{current lib version} SDS_v{number}`
  * This will make that the github action only replaces the lib if the lib itself has a new version
  * This also make that the SDS app pulls new version if either the lib or sds made changes