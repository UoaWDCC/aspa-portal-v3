# Ticket Routes:

This markdown file outlines and explains all ticket-related endpoints, 
as well as indicating the "weakest" role that is able to access the endpoint, 
i.e., 
guests (no role/session) can only access endpoints with (user/guest), 
users can access (user) and (user/guest) endpoints, 
and admins can access all endpoints.

This markdown file outlines and explains all ticket-related endpoints, 
as well as indicating the "weakest" role that is able to access the endpoint, 
i.e., 
guests (no role/session) can only access endpoints with (user/guest), 
users can access (user) and (user/guest) endpoints, 
and admins can access all endpoints.

## Summary

* Get all tickets (admin)
  + Get all unpaid tickets (admin)
  + Get all paid tickets (admin)

* Get a specific ticket (THE user)

* Create a ticket for an event (THE user)

* Checkout the ticket (???)
* Pay for a ticket with cash (admin)

* Delete a ticket (THE user)

> Note: Many of these endpoints returns data in the http response 
> (specifically, events, users, and tickets) as a (or array of) json object(s).
> PLEASE check the schema.prisma file for the specific accessible fields
> of these json objects (including optional ones) - it should be the source of truth for telling
> you what fields you can access from each of these objects (apart from using console.log()).

> Additional note: I added some syntax here where (THE user) means that 
> only the user associated with the resource they are requesting can 
> access the endpoint, not any other user

## Endpoints

01. Get all tickets (admin)
      - Request: `GET /tickets`
      - Response: `{ "data": [{ ticket1 }, { ticket2 }, ...] }`
      - Explanation:
         - Gets all the tickets in the database

02. Get all unpaid tickets (admin)
      - Request: `GET /tickets/unpaidTickets`
      - Response: `{ "data": [{ ticket1 }, { ticket2 }, ...] }`
      - Explanation:
         - Gets all the tickets in the database that have not been paid for

03. Get all paid tickets (admin)
      - Request: `GET /tickets/paidTickets`
      - Response: `{ "data": [{ ticket1 }, { ticket2 }, ...] }`
      - Explanation:
         - Gets all the tickets in the database that have confirmed to be paid

04. Get a specific ticket (THE user)
      - Request: `GET /tickets/:ticketId`
      - Response: `{ "data": { id: "id", userId: "userId", eventId: "eventId", isPaid: true | false, paymentDateTime: dateTime | null, paymentMethod: "paymentMethod" | null, paymentAmount: double } }`
      - Explanation:
         - Get a specific ticket in the database given the ticketId

05. Create a ticket for a certain event (THE user)
      - Request: `POST /tickets/:eventId/:userId { userId: "userId", eventId: "eventId" }`
      - Response: `{ "data": { id: "id", userId: "userId", eventId: "eventId", isPaid: false, paymentDateTime: null, paymentMethod: null, paymentAmount: double } }`
      - Explanation:
         - Creates a ticket for a certain event given the eventId and userId (corresponding to the user registering for an event)
         - (Meta) maybe we don't use null placeholder values? May need to change

06. Pay for a ticket online (???)
      - Request: `PATCH /tickets/:ticketId/pay` or whatever Stripe URL thing it is?
      - Response: `{ "data": { id: "id", userId: "userId", eventId: "eventId", isPaid: true, paymentDateTime: dateTime, paymentMethod: "stripe", paymentAmount: double } }`
      - Explanation:
         - Redirects to the payment page? Stripe stuff
         - On SUCCESS, update ticket with isPaid status true and paymentType "stripe"

07. Pay for a ticket with cash (admin)
      - Request: `PATCH /tickets/:ticketId/paymentStatus`
      - Response: `{ "data": { id: "id", userId: "userId", eventId: "eventId", isPaid: true, paymentDateTime: dateTime, paymentMethod: "cash", paymentAmount: double } }`
      - Explanation:
         - Updates a ticket so the isPaid status is true and paymentType "cash" corresponding to when a user pays in person for the event with cash

08. Delete a ticket (THE user)
      - Request: `DELETE /tickets/:eventId`
      - Response: `{ "data": {}} }`
      - Explanation:
         - Deletes a ticket from the database, representing a withdrawal from an event
