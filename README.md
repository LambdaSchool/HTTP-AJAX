# HTTP/AJAX

Topics:

* `axios` package
* AJAX
* Promises

## Instructions

1. Run `yarn install or npm install` inside the root directory of this project.
2. Run `yarn start or npm start` to start the server.
3. The provided server returns a list of friends when a `GET` request is made to [`http://localhost:5000/friends`](http://localhost:5000/friends).
4. In a separate terminal window, run `create-react-app friends` to create your starter React application.
5. Inside your React application, create a component to display the list of friends coming from the server.
6. Add a form to gather information about a new friend.

7. Add a button to save the new friend by making a `POST` request to the same endpoint listed above.
7. Each `friend` should have the following properties:

```js
{
  name: should be a string,
  age: should be a number,
  email: should be a string,
}
```

***

## Stretch Problems

1. Separate the list of friends and the new friend form into different components, and use the appropriate client side routing to access them.
2. Implement Update and Delete functionality.
    - for `update` pass the friend id as a URL paremeter, including the information about the friend inside the body.
    - for `delete` pass the friend id as a URL parameter.
3. Style the friends list, the input field, and make everything look nice.
4. Expand the number of properties that you put on each friend object.
5. Feel free to remove the dummy data on the server or modify it in any way.
