# Clay Frontend Coding Assignment

This is a repo for the frontend coding assignment challenge at Clay.

## Usage

I have used a template called [React Kickstarter]([https://github.com/anujit/react-kickstarter](https://github.com/anujit/react-kickstarter)) which I had created earlier, taking into consideration some commonly used deps.

To install dependencies -

`yarn install`

To run the application -

`yarn start`

To run tests - 

`yarn test`

To create a production bundle -

`yarn build`

## Implementation Details
I have created two flows - **Admin flow** and **User flow**. I have used the concept of **Role Based Access Control (RBAC)** using React and Redux to distinguish between the frontend views to be used for both the flows:

Admin is allowed to access all the links - **Manage Access**, **Manage Resources**, **Open Doors** and **Events**

Users can only access  - **Open Doors** and **Events**

Username for Admin flow is **admin**

Usernames for User flow are **user1**, **user2**, **user3**, **user4**
user3 is **not** allowed to open 'Door 2 - Lobby Door'

For simulating the backend, I have used `axios-mock-adapter`. So basically, every single REST API call made from the frontend using an `axios` instance is mocked. **Interceptors are used to add the api token** which is stored in sessionStorage. Every api call is logged in the console.

I have made the choice of Redux as the state management library, keeping in mind future possible extensions and scalability. The same could have been achieved using React 16's Context feature.

**Please note that**, since mock apis are used, there are no real CRUD operations in the backend. So, although different user interactions from the frontend result in api calls like POST, DELETE, PATCH from the frontend, reloading the page will always load the same data.

**Also, note that,** for the same reason of mock backend, there is no consistency between the Admin and User flows. Meaning, any changes made for other users by the admin will not reflect in the user flow.

## Possible improvements and enhancements

I can see the below possible enhancements which can be done (which I have left out for lack of time) -

- Adding React 16 features like Hooks
- Adding more unit tests
- Using `react-intl`
- I have tried my best to visualize the application based on the description provided. However, some visual design reference and narrowing down the exact criteria would help overcome some of the limitations :smiley: