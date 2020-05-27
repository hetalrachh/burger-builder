This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Burger builder** is a ReactJs-Redux based project deployed on firebase. 

Redux is used to remove the use of local state in every component and rather have a centralized state for the entire application. The centralized state consist of the ingredients and the order level details of the user.Firebase real time data base is used to store these ingredients and order level details of the user in the database in JSON format.

Firebase hosting platform is also used to host the application.

Some important components of the application are:

1. Burger: This consist sof the the build controls displayed, burger ingredients and the order summary.

2. Logo: This component consists of the logo of the burger that is displayed at the appbar of the application.

3. Navigation:  It consists of the navigation itema such as the appbar with the "Burger builder" and "Authenticate" links and the side drawer that gets displayed when operated on small size devices.

4. Order: This consists of the order details and the checkout summary of the application.

5. UI: This component consists of the all the common UI controls used over the application like buttons, backdrop, spinner.

Some inportant containers of the application are:

1. Authentication: This container handles the authentication part of the user like the signup and sign.

2. BurgerBuilder: This container holds the Burger, build controls, order summary components.

3. Checkout: This container consist of the checkout form which accepts details of the user before the user places an order for the burger.

4. Orders: This container displays all the orders placed by the user.

Finally, the important part of the application i.e. store consists of actions and reducers.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
