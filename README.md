<h1  align='center'> Activity Dashboard</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/42f9d402-b19e-44b1-be04-7b2f492284ae/deploy-status)](https://app.netlify.com/sites/mystifying-jang-cfea32/deploys)

<h2>Problem Statement:</h2> 
<p>
Task it to design and implement a user interface that allows a user to view a list of hardcoded
users from a mock API server. On clicking on any user, a modal should open which displays
all the time ranges during which they were active on that day, with an option to view all the
periods of activity for different days using a calendar.
</p>

## How to run locally?

```sh
# install all the dependencies
$ yarn install

# start the server
$ yarn start
```

## Where is it deployed?

It is currently deployed at [Netlify](https://www.netlify.com/) with custom domain name set to https://full-throttle.snimesh.com

## Where is the mock API server deployed?

We're using Netlify as the mock API server.
The file `data.json` is placed in the `public/` directory, which is served by Netlify as a static asset.

Thus the server endpoint to fetch the data becomes https://full-throttle.snimesh.com/api/data.json

## Packages used?

- [React](https://reactjs.org/)
- [React-Modal](https://github.com/reactjs/react-modal)
- [FullCalendar](https://fullcalendar.io/)
- [Moment](https://momentjs.com/)
