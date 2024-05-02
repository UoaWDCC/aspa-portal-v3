# Events:

## Summary

* Get all events (non-admin)
  + Get all upcoming events (non-admin)
  + Get all past events (non-admin)

* Get all members for a certain event (admin)
* Get a specific event (non-admin)
  + Get specific event's max number of people (non-admin)

* Get all tickets for a certain event (admin)
  + Get all unpaid tickets for a certain event (admin)
  + Get all paid tickets for a certain event (admin)
  + Get number of tickets for a certain event (non-admin)

* Create an event (admin)

* Update an event (admin)

* Delete an event (admin)

> Note: Many of these endpoints will - when the request is sent - return response data (generally events, or users) in json format. 
> Please check the event and user models for detailed descriptions of the accessible fields of this data.
> (Another reason to check is if the models update and some of these endpoint descriptions become out of date)

## Endpoints

01. Get all events
      - Request: `GET /events`
      - Response: `{ "data": [{ event1 }, { event2 }, ...] }`
      - Explanation:
         - Gets all events in the database represented as json objects
         - Does NOT require admin privileges

02. Get all past events
      - Request: `GET /events/past`
      - Response: `{ "data": [{ event1 }, { event2 }, ...] }`
      - Explanation:
         - Gets all events with eventTime's before the current date, represented as json objects
         - Does NOT require admin privileges

03. Get all upcoming events
      - Request: `GET /events/upcoming`
      - Response: `{ "data": [{ event1 }, { event2 }, ...] }`
      - Explanation:
         - Gets all events with eventTime's after the current date, represented as json objects
         - Does NOT require admin privileges

04. Get specific event based on eventId
      - Request: `GET /events/:eventId`
      - Response: `{ "data": { eventTitle: "title", eventDescription: "description", eventLocation: "location", eventTime: time, eventPrice: price, maxSize: maxSize } }`
      - Explanation:
         - Gets a specific event given its eventId, i.e., `GET {url}/events/123` gets the event with the eventId `123` .
         - Does NOT require admin privileges

04. Get specific event's max number of people
      - Request: `GET /events/:eventId`
      - Response: `{ "data": maxSize (Number)}`
      - Explanation:
         - Gets a specific event's max number of people allowed to the event given its eventId

05. Get all users registered for a certain event
      - Request: `GET /events/:eventId/members`
      - Response: `{ "data": [{ user1 }, { user2 }, ...] }`
      - Explanation:
         - Gets all users that have registered for a certain event (given eventId)
         - REQUIRES admin privileges

06. Get all tickets for a certain event
      - Request: `GET /events/:eventId/allTickets`
      - Response: `{ "data": [{ ticket1 }, { ticket2 }, ...] }`
      - Explanation:
         - Gets all tickets registered for a certain event

07. Get unpaid tickets for a certain event
      - Request: `GET /events/:eventId/unpaidTickets`
      - Response: `{ "data": [{ ticket1 }, { ticket2 }, ...] }`
      - Explanation:
         - Gets all tickets registered for a certain event that haven't been paid for

08. Get paid tickets for a certain event
      - Request: `GET /events/:eventId/paidTickets`
      - Response: `{ "data": [{ ticket1 }, { ticket2 }, ...] }`
      - Explanation:
         - Gets all tickets registered for a certain event that have confirmed to be paid

08. Get number of tickets for a certain event
      - Request: `GET /events/:eventId/totalTicketNumber`
      - Response: `{ "data": totalTicketNumber (Number) }`
      - Explanation:
         - Gets total number of tickets for an event

09. Create an event
      - Request: `POST /events { eventTitle: "title", eventDescription: "description", eventLocation: "location", eventTime: time, eventPrice: price, maxSize: maxSize }`
      - Response: `{ "data": { eventTitle: "title", eventDescription: "description", eventLocation: "location", eventTime: time, eventPrice: price, maxSize: maxSize } }`
      - Explanation:
         - Creates an event given event title, description, location, time, and price fields, and returns it in the response
         - REQUIRES admin privileges

10. Update an event
      - Request: `PUT /events/:eventId { eventTitle: "title", eventDescription: "description", eventLocation: "location", eventTime: time, eventPrice: price, maxSize: maxSize, maxSize: maxSize }`
      - Response: `{ "data": { eventTitle: "title", eventDescription: "description", eventLocation: "location", eventTime: time, eventPrice: price, maxSize: maxSize } }`
      - Explanation:
         - Given fields in the request body, updates an event accordingly and returns the updated event in the response
         - REQUIRES admin privileges

11. Delete an event
      - Request: `DELETE /events/:eventId`
      - Response: `{ "data": {} }`
      - Explanation:
         - Deletes an event
         - REQUIRES admin privileges
         - Status code `204` No Content on successful deletion
