# Tickets:

## Summary

* Get all tickets (admin)
  + Get all unpaid tickets (admin)
  + Get all paid tickets (admin)
* Get a specific ticket (user or admin)

* Create a ticket for an event (user or admin)

* Checkout the ticket (Stripe payment stuff)
* Pay for a ticket with cash (admin)

* Delete a ticket (user or admin)

> Note: Many of these endpoints will - when the request is sent - return response data (tickets) in json format. 
> Please check the models for detailed descriptions of the accessible fields of this data.
> (Another reason to check is if the models update and some of these endpoint descriptions become out of date)

> Also, user or admin means either the person associated with the user/account, or the admin has privileges to access the endpoint.
> Non-admin means anyone can access the endpoint - you don't have to be an admin for it.

## Endpoints

01. Get all tickets
      - Request: `GET /tickets`
      - Response: `{ "data": [{ ticket1 }, { ticket2 }, ...] }`
      - Explanation:
         - Gets all the tickets in the database

02. Get all unpaid tickets
      - Request: `GET /tickets/unpaidTickets`
      - Response: `{ "data": [{ ticket1 }, { ticket2 }, ...] }`
      - Explanation:
         - Gets all the tickets in the database that have not been paid for

03. Get all paid tickets
      - Request: `GET /tickets/paidTickets`
      - Response: `{ "data": [{ ticket1 }, { ticket2 }, ...] }`
      - Explanation:
         - Gets all the tickets in the database that have confirmed to be paid

04. Get a specific ticket
      - Request: `GET /tickets/:ticketId`
      - Response: `{ "data": { eventId: "eventId", userId: "userId", registrationDate: registrationDate, waitlist: waitlistNumber, isPaid: true | false, paymentType: "paymentType" | null } }`
      - Explanation:
         - Get a specific ticket in the database given the ticketId

05. Create a ticket for a certain event
      - Request: `POST /tickets/:eventId/:userId { eventId: "eventId", userId: "userId", registrationDate: registrationDate, waitlist: waitlistNumber, isPaid: false, paymentType: null }`
      - Response: `{ "data": { eventId: "eventId", userId: "userId", registrationDate: registrationDate, waitlist: waitlistNumber, isPaid: false, paymentType: null } }`
      - Explanation:
         - Creates a ticket for a certain event given the eventId and userId (corresponding to the user registering for an event)

06. Pay for a ticket online
      - Request: `PATCH /tickets/:ticketId/pay` or whatever Stripe URL thing it is?
      - Response: `{ "data": { eventId: "eventId", userId: "userId", registrationDate: registrationDate, waitlist: waitlistNumber, isPaid: true, paymentType: "stripe" } }`
      - Explanation:
         - Redirects to the payment page? Stripe stuff
         - On SUCCESS, update ticket with isPaid status true and paymentType "stripe"

07. Pay for a ticket with cash
      - Request: `PATCH /tickets/:ticketId/paymentStatus`
      - Response: `{ "data": { eventId: "eventId", userId: "userId", registrationDate: registrationDate, waitList: true | false, isPaid: true, paymentType: "cash" } }`
      - Explanation:
         - Updates a ticket so the isPaid status is true and paymentType "cash" corresponding to when a user pays in person for the event with cash

08. Delete a ticket 
      - Request: `DELETE /tickets/:eventId`
      - Response: `{ "data": {}} }`
      - Explanation:
         - Deletes a ticket from the database, representing a withdrawal from an event
