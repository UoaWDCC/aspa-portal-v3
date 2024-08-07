# User Routes:

This markdown file outlines and explains all user-related endpoints, 
as well as indicating the "weakest" role that is able to access the endpoint, 
i.e., 
guests (no role/session) can only access endpoints with (user/guest), 
users can access (user) and (user/guest) endpoints, 
and admins can access all endpoints.

## Summary

* Get all users (admin)
  + Get all user names (admin)
  + Get number of users (user/guest)

* Get user based on ID (THE user)

* Get all events for a particular user (THE user)
  + Get upcoming events for particular user (THE user)
  + Get past events for a particular user (THE user)

* Get all tickets for a certain user (THE user)
  + Get all unpaid tickets for a certain user (THE user)
  + Get all paid tickets for a certain user (THE user)

* Create a user (ONLY guest)

* Update a user i.e., user details (THE user)
  + Update user into admin (admin)

* Delete a user (THE user)

> Note: Many of these endpoints returns data in the http response 
> (specifically, events, users, and tickets) as a (or array of) json object(s).
> PLEASE check the schema.prisma file for the specific accessible fields
> of these json objects (including optional ones) - it should be the source of truth for telling
> you what fields you can access from each of these objects (apart from using console.log()).

> Additional note: I added some syntax here where (THE user) means that 
> only the user associated with the resource they are requesting can 
> access the endpoint, not any other user

---

## Endpoints

01. Get all users (admin)
      - Request: `GET /users`
      - Response: `{ "data": [{ user1 }, { user2 }, ...] }`
      - Explanation:
         - Gets all users in the database

02. Get all user names (admin)
      - Request: `GET /users/allNames`
      - Response: `{ "data": [fullName1, fullName2, ...] }`
      - Explanation:
         - Gets the full names of all users in the database

03. Get total number of users (user/guest)
      - Request: `GET /users/totalNumber`
      - Response: `{ "data": totalNumber }`
      - Explanation:
         - Gets the number of users in the database

04. Get a specific user based on userId (THE user)
      - Request: `GET /users/:userId`
      - Response: `{ "data": { id: "id", email: "email", firstName: "firstName", lastName: "lastName", university: "university", studentId: "studentId", upi: "upi", role: "role", skillLevel: "skillLevel", phoneNumber: "phoneNumber"} }`
      - Explanation:
           - Gets a user from the database given the userId

05. Get all events for a specific user (THE user)
      - Request: `GET /users/:userId/allEvents`
      - Response: `{ "data": [{ event1 }, { event2 }, ...] }`
      - Explanation:
         - Get all the events a user has registered for (past and upcoming), based on their userId.
         - (Backend logic) Checks all tickets with userId corresponding to user, and returns events corresponding to each ticket eventId?

06. Get upcoming events for a specific user (THE user)
      - Request: `GET /users/:userId/upcomingEvents`
      - Response: `{ "data": [{ event1 }, { event2 }, ...] }`
      - Explanation:
         - Get the upcoming events a user has registered for, given their userId.

07. Get past events for a specific user (THE user)
      - Request: `GET /users/:userId/pastEvents`
      - Response: `{ "data": [{ event1 }, { event2 }, ...] }`
      - Explanation:
         - Get the past events a user has registered for, given their userId.

08. Get all tickets for a certain user (THE user)
      - Request: `GET /users/:userId/allTickets`
      - Response: `{ "data": [{ ticket1 }, { ticket2 }, ...] }`
      - Explanation:
         - Get all tickets for events a certain user has registered for

09. Get unpaid tickets for a certain user (THE user)
      - Request: `GET /users/:userId/unpaidTickets`
      - Response: `{ "data": [{ ticket1 }, { ticket2 }, ...] }`
      - Explanation:
         - Get unpaid tickets for events a certain user has registered for

10. Get paid tickets for a certain user (THE user)
      - Request: `GET /users/:userId/paidTickets`
      - Response: `{ "data": [{ ticket1 }, { ticket2 }, ...] }`
      - Explanation:
         - Get paid tickets for events a certain user has registered for

11. Create a user (ONLY guest)
      - Request: `POST /users { email: "email", firstName: "firstName", lastName: "lastName", university: "university", studentId: "studentId", upi: "upi", role: "role", skillLevel: "skillLevel", phoneNumber: "phoneNumber"}`
      - Response: `{ "data": { id: "id", email: "email", firstName: "firstName", lastName: "lastName", university: "university", studentId: "studentId", upi: "upi", role: "role", skillLevel: "skillLevel", phoneNumber: "phoneNumber"} }`
      - Explanation:
         - Creates a user in the database and returns it in the response if successful

12. Update user details (THE user)
      - Request: `PUT /users/:userId { email: "email", firstName: "firstName", lastName: "lastName", university: "university", studentId: "studentId", upi: "upi", role: "role", skillLevel: "skillLevel", phoneNumber: "phoneNumber"}`
      - Response: `{ "data": { id: "id", email: "email", firstName: "firstName", lastName: "lastName", university: "university", studentId: "studentId", upi: "upi", role: "role", skillLevel: "skillLevel", phoneNumber: "phoneNumber"} }`
      - Explanation:
         - Given fields in the request body, updates a user accordingly
         - (Backend logic) Should implement check so non-admins cannot update the user into an admin

13. Update user to admin (admin)
      - Request: `PATCH /users/:userId/admin`
      - Response: `{ "data": { id: "id", email: "email", firstName: "firstName", lastName: "lastName", university: "university", studentId: "studentId", upi: "upi", role: "admin", skillLevel: "skillLevel", phoneNumber: "phoneNumber"} }`
      - Explanation:
         - Updates a user into admin (changes the admin role)
         - REQUIRES admin privileges and should check for this

14. Delete a user (THE user)
      - Request: `DELETE /users/:userId`
      - Response: `{ "data": {} }`
      - Explanation:
         - Deletes a user from the database given the userId
