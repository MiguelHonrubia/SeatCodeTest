# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Run API`

You just need to run the command `yarn run:serve` or `npm run run:server`

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## FOLDER STRUCTURE

- **/public** - Public files (images, favicon, etc)
- **/domain/\*** - folder that contains all interface elements
- - **/domain/assets/\*** - icons, images and css files
- - **/domain/components/\*** - generic components that could be used in multiple modules or layouts
- - - **/components/x/style** - folder that contains the styled components for the component
- - - **/components/x/test** - test folder of the component
- - **/domain/modules/\*** - module folder by entity
- - - **/domain/modules/entity/test\*** - test folder of the module component
- - - **/domain/modules/entity/style\*** - style folder of the module component
- **/infraestructure/\*** - folder that contains everything related to data and data consumption
- - **/infraestructure/core\*** - folder with the data models and all the utils needed as mappers , auxiliar functions, etc
- - - **/infraestructure/core/utils\*** - auxiliar functions
- - - **/infraestructure/core/mappers\*** - data mappers
- - - **/infraestructure/core/models\*** - data models
- - **/infraestructure/data\*** - folder that includes the data consumption
- - - **/infraestructure/data/contexts\*** - contexts to manage the app state globaly
- - - **/infraestructure/data/services\*** - services to consume the data from the api
- - - **/infraestructure/data/providers\*** - middleware to apply any logic

## Styling

For styling I used [Styled-Components](https://styled-components.com/) because it offers the possibility of generating stylized generic components that could be reused, and also offers the possibility of passing parameters to make them dynamic

## API

For the api I used [JSON Server](https://github.com/typicode/json-server#getting-started).
