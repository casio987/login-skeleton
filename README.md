# login-skeleton
A simple web-based application, built with the MERN stack used to learn more about
building backend services, building a full stack project as well as token authentication and encryption.

## Prerequisites
This project requires you to have a database deployed using a MongoDB account. You can do so by following
this [video](https://www.youtube.com/watch?v=S4fi6Qux-4g). 

Once you've done that, clone the repo
``` script
git clone https://github.com/casio987/login-skeleton.git
```

Once you've completed all the steps above, create an `.env` file
for both the `server` and `client` directories, using the `.env.example` provided as a template. The `REACT_APP_API` and `REACT_APP_TOKEN` in the `client` directory refers to the 
url of the server you have running and the name of the item you
will be setting in `sessionStorage` (as your token) respectively.

On the other hand, the variables `PORT`, `MONGODB_URI` and `JWT_SECRET`, in the `server` directory, refers to the port you'll be running your server on, the connection to your [MongoDB database](https://docs.atlas.mongodb.com/connect-to-cluster/) and the secret you'll be using to generate and verify a token respectively.

## Installing
With the repo cloned, navigate into `client` and install the dependencies by running:
``` script
npm install
```
Do the same for `server`.

## Usage
You can check out the [figma designs](https://www.figma.com/file/3GS1aC1AIfVWY3NomxTxKf/login-skeleton-boilerplate?node-id=0%3A1) to see the flow of the intended flow of the project.

## Built With
- React (Web framework)
- MongoDB (Database)
- NodeJS/Express (Backend)
- [Figma](https://www.figma.com/file/3GS1aC1AIfVWY3NomxTxKf/login-skeleton-boilerplate?node-id=0%3A1) (Design)
- Blood, sweat and tears :)

## Warning:
The current implementation:
- does not include refresh token functionality.
- stores token (on the client) in `sessionStorage` and hence will be prone to [XSS attacks](https://owasp.org/www-community/attacks/xss/).
  However, the risks are somewhat 'mitigated' by having the 'item' name being stored in an .env file? (no guarantees XD).
  Alternatively, you can look at using [HTTP only cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) instead.
