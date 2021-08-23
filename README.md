# Turquoise Application


### RUN PROJECT

1. Open the `TurquoiseApp` directory
2. Run `npm install` in rootFolder. This should download module for the project.
2. Run `react-native link` in rootFolder. This step is to Linked Icon.
3. Run `npx react-native run-android` in rootFolder


### RUN PRODUCTION
1. Open the `TurquoiseApp` directory
2. To check if project is running smoothly in release mode, run this command
`npx react-native run-android --variant=release`


### BUILD PRODUCTION
1. Open the `TurquoiseApp` directory
2. Go to android directory with `cd android`
3. Run `./gradlew clean`
4. To build APK release, run this command `./gradlew assembleRelease`
5. Find file of the Application is at `android/app/build/outputsapk/release/app-release.apk`

### APP FILE WITHOUT BUILD/RUN
Go to `app-release/TurquoiseApp.apk` 