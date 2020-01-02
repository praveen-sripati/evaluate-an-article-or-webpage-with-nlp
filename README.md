# Evaluate an article or webpage with NLP

Its a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. It takes URL as input and uses nlp to extract information such as Title, Author, Image, Article, Video Links and Publish date of the article or webpage.

  - Type URL in the input box
  - See the extracted information below it
  - Magic!

## Tech

This project uses a number of open source projects to work properly:

* **Node.js** - JavaScript runtime environment that executes JavaScript code outside of a browser.
* **Express** - Fast node.js network app framework
* **Webpack** - JavaScript module bundler
* **Jest** - Delightful JavaScript testing framework


## Installation

`cd` into your new folder and run:
- `npm install`

### Setting up the API

We are using [Aylien API]("https://aylien.com/") to extract information of an article or webpage with Natural Language Processing. The following is the steps for setting up this API as follows:

### Step 1: Signup for an API key
First, you will need to go [here](https://developer.aylien.com/signup). Signing up will get you an API key. The API is free to use up to 1000 requests per day or 333 intensive requests. It is free to check how many requests you have remaining for the day.

### Step 2: Install the SDK
Next you'll need to get the SDK. SDKs will be available for all the major languages and platforms, for instance the Aylien SDK brings together a bunch of tools and functions that will make it possible to interface with their API from our server and is available for Node, Python, PHP, Go, Ruby and many others. We are going to use the Node one, the page is available [here](https://docs.aylien.com/textapi/sdks/#sdks). You get 1000 free requests per day.

### Step 3: Require the SDK package
Install the SDK in your project and then we'll be ready to set up your server/index.js file.

### Step 4: Environment Variables
Next we need to declare our API keys, which will look something like this:
```
// set aylien API credentias
var textapi = new aylien({
  application_id: "your-api-id",
  application_key: "your-key"
});
```

...but there's a problem with this. We are about to put our personal API keys into a file, but when we push, this file is going to be available PUBLICLY on Github. Private keys, visible publicly are never a good thing. So, we have to figure out a way to make that not happen. The way we will do that is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and won't be visible when you push to a different environment like Github.

- [ ] Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
```
API_ID=**************************
API_KEY=**************************
```
- [ ] Add this code to the very top of your server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of it, an example might look like this:
```
console.log(`Your API key is ${process.env.API_KEY}`);
```
...Not that you would want to do that. This means that our updated API credential settings will look like this:
```javascript
// set aylien API credentials
// NOTICE that textapi is the name I used, but it is arbitrary.
// You could call it aylienapi, nlp, or anything else,
//   just make sure to make that change universally!
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});
```

### Step 5: Using the API

We're ready to go! The API has a lot of different endpoints you can take a look at [here](https://docs.aylien.com/textapi/endpoints/#api-endpoints). And you can see how using the SDK simplifies the requests we need to make.

I won't provide further examples here, as it's up to you to create the various requests and make sure your server is set up appropriately.

## Run

- [ ]  **For Developer Mode** - `npm run build-dev`  ||  **For Production Mode** - `npm run build-prod`
- [ ] To start the server you should run `npm run start` command in CLI
- [ ] The server should start on your browser on port [8081]('http://localhost:8081/')
- [ ] To test the project use the following command: `npm run test`

## License
[MIT](LICENSE)

