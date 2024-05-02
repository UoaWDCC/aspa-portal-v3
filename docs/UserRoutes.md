# Users:

## Summary

* Get all users (admin)
  + Get all user names (admin)
  + Get number of users (non-admin)

* Get user based on ID (user or admin)

* Get all events for a particular user (user or admin)
  + Get upcoming events for particular user (user or admin)
  + Get past events for a particular user (user or admin)

* Get all tickets for a certain user (user or admin)
  + Get all unpaid tickets for a certain user (user or admin)
  + Get all paid tickets for a certain user (user or admin)

* Create a user (non-admin)

* Update a user i.e., user details (user or admin)
  + Update user into admin (admin)

* Delete a user (user or admin)

> Note: user or admin means either the person associated with the user/account, or the admin has privileges to access the endpoint.
> Non-admin means anyone can access the endpoint - you don't have to be an admin for it.

---

### Future endpoints?

* Get number of points user has (user or admin)
* Add single point to user points (???)
* Remove number of user points (???)

## Endpoints

01. Get all users
      - Request: `GET /users`
      - Response: `{ "data": [{ user1 }, { user2 }, ...] }`
      - Explanation:
         - Gets all users in the database

02. Get all user names
      - Request: `GET /users/allNames`
      - Response: `{ "data": [fullName1, fullName2, ...] }`
      - Explanation:
         - Gets the full names of all users in the database

03. Get total number of users
      - Request: `GET /users/totalNumber`
      - Response: `{ "data": totalNumber }`
      - Explanation:
         - Gets the number of users in the database

04. Get a specific user based on userId
      - Request: `GET /users/:userId`
      - Response: `{ "data": { firstName: "firstName", lastName: "lastName", email: "email", role: "role", university: "university", studentId: studentId, skillLevel: "skillLevel"} }`
      - Explanation:
           - Gets a user from the database given the userId

05. Get all events for a specific user
      - Request: `GET /users/:userId/allEvents`
      - Response: `{ "data": [{ event1 }, { event2 }, ...] }`
      - Explanation:
         - Get all the events a user has registered for (past and upcoming), based on their userId.
         - (Backend logic) Checks all tickets with userId corresponding to user, and returns events corresponding to each ticket eventId?

06. Get upcoming events for a specific user
      - Request: `GET /users/:userId/upcomingEvents`
      - Response: `{ "data": [{ event1 }, { event2 }, ...] }`
      - Explanation:
         - Get the upcoming events a user has registered for, given their userId.

07. Get past events for a specific user
      - Request: `GET /users/:userId/pastEvents`
      - Response: `{ "data": [{ event1 }, { event2 }, ...] }`
      - Explanation:
         - Get the past events a user has registered for, given their userId.

08. Get all tickets for a certain user
      - Request: `GET /users/:userId/allTickets`
      - Response: `{ "data": [{ ticket1 }, { ticket2 }, ...] }`
      - Explanation:
         - Get all tickets for events a certain user has registered for

09. Get unpaid tickets for a certain user
      - Request: `GET /users/:userId/unpaidTickets`
      - Response: `{ "data": [{ ticket1 }, { ticket2 }, ...] }`
      - Explanation:
         - Get unpaid tickets for events a certain user has registered for

10. Get paid tickets for a certain user
      - Request: `GET /users/:userId/paidTickets`
      - Response: `{ "data": [{ ticket1 }, { ticket2 }, ...] }`
      - Explanation:
         - Get paid tickets for events a certain user has registered for

11. Create a user
      - Request: `POST /users { firstName: "firstName", lastName: "lastName", email: "email", role: "role", university: "university", studentId: studentId, skillLevel: "skillLevel"}`
      - Response: `{ "data": { firstName: "firstName", lastName: "lastName", email: "email", role: "role", university: "university", studentId: studentId, skillLevel: "skillLevel"} }`
      - Explanation:
         - Creates a user in the database and returns it in the response if successful

12. Update user details
      - Request: `PUT /users/:userId { firstName: "firstName", lastName: "lastName", email: "email", university: "university", studentId: studentId, skillLevel: "skillLevel"}`
      - Response: `{ "data": { firstName: "firstName", lastName: "lastName", email: "email", role: "role", university: "university", studentId: studentId, skillLevel: "skillLevel"} }`
      - Explanation:
         - Given fields in the request body, updates a user accordingly
         - (Bakend logic) Should implement check so non-admins cannot update the user into an admin

13. Update user to admin
      - Request: `PATCH /users/:userId/admin`
      - Response: `{ "data": { firstName: "firstName", lastName: "lastName", email: "email", role: "admin", university: "university", studentId: studentId, skillLevel: "skillLevel"} }`
      - Explanation:
         - Updates a user into admin (changes the admin role)
         - REQUIRES admin privileges and should check for this

14. Delete a user
      - Request: `DELETE /users/:userId`
      - Response: `{ "data": {} }`
      - Explanation:
         - Deletes a user from the database given the userId
         - Status code `204` No Content on successful deletion
