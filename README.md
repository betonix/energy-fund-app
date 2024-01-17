# Fund App 🌟

## Description

📲 A React Native application crafted to simplify fund transfers, featuring styled components, React Contexts, and React Hooks. Compatible with both Android and iOS platforms.

## Preview

Here's a sneak peek at the Renewable Energy Fund App in action:

- **Sign Up and Login:**
  ![](https://github.com/betonix/energy-fund-app/blob/main/gifs/gif1.gif)

- **Dashboard and Chart Interaction:**
  ![](https://github.com/betonix/energy-fund-app/blob/main/gifs/gif2.gif)

- **Easy Money Transfer:**
  ![](https://github.com/betonix/energy-fund-app/blob/main/gifs/gif1.gif)

## Features

- **Sign Up:**

  - ✨ Sign-up form with a success screen upon registration.
  - 📝 Users must agree to terms and conditions to enable the submission button.
  - 💾 Save user data in the state manager for authentication on the login page.

- **Login:**

  - 🔐 Login form with redirection to the home screen after a successful authentication check.

- **Dashboard:**

  - 📊 Chart plotted with mocked data, clickable, and dynamically changing values.
  - 💰 Current account balance stored in the state.

- **Send Money:**
  - 💸 Alert confirming money sent and value subtracted from the current account balance after submission.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- 🚀 Node.js
- 📦 npm (Node Package Manager)
- ⚛️ React Native CLI

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

````bash
# using npm
npm start

# OR using Yarn
yarn start


## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
````

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```
