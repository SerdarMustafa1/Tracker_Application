# Locate Me

Locate-Me is a simple tracker application built using React Native and Expo.

It allows the user to track their own movements in real-time and shows the path they have taken.

## Installation

Clone the repo

```bash
git clone https://github.com/SerdarMustafa1/trackerApplication.git
```

```bash
cd tracker
```

```bash
npm install
```

You will also need to install expo-cli:

```bash
npm install -g expo-cli
```

**Some macOS users encounter issues if they do not have Watchman installed on their machine, so if you are using a Mac we recommend that you install it. [Download and install Watchman.](https://facebook.github.io/watchman/docs/install.html)**

## Usage

## UPDATE --- The server is now running on heroku so you can just follow the instructions for running the app via Expo on your device or an emulator. 

You will need to run three seperate terminals:

1. Tracks folder - This is your front end in Expo for your phone or emulator. 

Run by using

```bash
npm run start
```

2. Tracks-Server folder - This will run your node/Express server

```bash
npm run start
```

3. ngrok - to expose a webserver from your local machine

```bash
ngrok http 3000
```

To run on an iOS simulator, follow the instructions available on the [Expo website.](https://docs.expo.io/versions/v36.0.0/workflow/ios-simulator/)

## Dependencies:

[ngrok](https://ngrok.com/docs)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)
