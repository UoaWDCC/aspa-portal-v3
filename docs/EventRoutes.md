# Event Routes:

This markdown file outlines and explains all event-related endpoints, 
as well as indicating the "weakest" role that is able to access the endpoint, 
i.e., 
guests can only access endpoints with (user/guest), 
users can access (user) and (user/guest) endpoints, 
and admins can access all endpoints.

## Summary

* Get all events (user/guest)
  + Get all past events (user/guest)
  + Get all upcoming events (user/guest)

* Get a specific event (user/guest)

* Get all members for a certain event (admin)

* Get all tickets for a certain event (admin)
  + Get all unpaid tickets for a certain event (admin)
  + Get all paid tickets for a certain event (admin)
  + Get number of tickets for a certain event (user/guest)

* Create an event (admin)

* Update an event (admin)

* Delete an event (admin)

> Note: Many of these endpoints returns data in the http response 
> (specifically, events, users, and tickets) as a (or array of) json object(s).
> PLEASE check the schema.prisma file for the specific accessible fields
> of these json objects - it should be the source of truth for telling
> you what fields you can access from each of these objects (apart from using console.log()).

## Endpoints

01. Get all events (user/guest)
      - Request: `GET /events`
      - Response: `{ "data": [{ event1 }, { event2 }, ...] }`
      - Explanation:
         - Gets all events in the database

02. Get all past events (user/guest)
      - Request: `GET /events/past`
      - Response: `{ "data": [{ event1 }, { event2 }, ...] }`
      - Explanation:
         - Gets all events with eventTime's before the current date

03. Get all upcoming events (user/guest)
      - Request: `GET /events/upcoming`
      - Response: `{ "data": [{ event1 }, { event2 }, ...] }`
      - Explanation:
         - Gets all events with eventTime's after the current date

04. Get specific event based on eventId (user/guest)
      - Request: `GET /events/:eventId`
      - Response: `{ "data": { id: "id", name: "name", dateTime: dateTime, venue: "location", description: "description", price: price, createdBy: "exec", attendingExec: "attendingExec" } }`
      - Explanation:
         - Gets a specific event given its eventId, i.e., `GET {url}/events/123` gets the event with the eventId `123` .

05. Get all users registered for a certain event (admin)
      - Request: `GET /events/:eventId/members`
      - Response: `{ "data": [{ user1 }, { user2 }, ...] }`
      - Explanation:
         - Gets all users that have registered for a certain event (given eventId)

06. Get all tickets for a certain event (admin)
      - Request: `GET /events/:eventId/allTickets`
      - Response: `{ "data": [{ ticket1 }, { ticket2 }, ...] }`
      - Explanation:
         - Gets all tickets registered for a certain event

07. Get unpaid tickets for a certain event (admin)
      - Request: `GET /events/:eventId/unpaidTickets`
      - Response: `{ "data": [{ ticket1 }, { ticket2 }, ...] }`
      - Explanation:
         - Gets all tickets registered for a certain event that haven't been paid for

08. Get paid tickets for a certain event (admin)
      - Request: `GET /events/:eventId/paidTickets`
      - Response: `{ "data": [{ ticket1 }, { ticket2 }, ...] }`
      - Explanation:
         - Gets all tickets registered for a certain event that have confirmed to be paid

08. Get number of tickets for a certain event (user/guest)
      - Request: `GET /events/:eventId/totalTicketNumber`
      - Response: `{ "data": totalTicketNumber }`
      - Explanation:
         - Gets total number of tickets for an event

09. Create an event (admin)
      - Request: `POST /events { name: "name", dateTime: dateTime, venue: "location", description: "description", price: price, createdBy: "exec", attendingExec: "attendingExec" }`
      - Response: `{ "data": { id: "id", name: "name", dateTime: dateTime, venue: "location", description: "description", price: price, createdBy: "exec", attendingExec: "attendingExec" } }`
      - Explanation:
         - Creates an event given event title, description, location, time, and price fields, and returns it in the response

10. Update an event (admin)
      - Request: `PUT /events/:eventId { name: "name", dateTime: dateTime, venue: "location", description: "description", price: price, createdBy: "exec", attendingExec: "attendingExec" }`
      - Response: `{ "data": { id: "id", name: "name", dateTime: dateTime, venue: "location", description: "description", price: price, createdBy: "exec", attendingExec: "attendingExec" } }`
      - Explanation:
         - Given fields in the request body, updates an event accordingly and returns the updated event in the response

11. Delete an event (admin)
      - Request: `DELETE /events/:eventId`
      - Response: `{ "data": {} }`
      - Explanation:
         - Deletes an event
