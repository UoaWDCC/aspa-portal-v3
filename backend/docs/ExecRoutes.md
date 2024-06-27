# Exec Routes:

This markdown file outlines and explains all exec-related endpoints.

> Only admins should be allowed to access these endpoints.

## Summary

* Get all execs

* Get exec based on ID

* Get exec based on title

* Create an exec

* Update an exec

* Delete an exec

> Note: Many of these endpoints returns data in the http response 
> (specifically, events, users, and tickets) as a (or array of) json object(s).
> PLEASE check the schema.prisma file for the specific accessible fields
> of these json objects (including optional ones) - it should be the source of truth for telling
> you what fields you can access from each of these objects (apart from using console.log()).

---

## Endpoints

01. Get all execs
      - Request: `GET /execs`
      - Response: `{ "data": [{ exec1 }, { exec2 }, ...] }`
      - Explanation:
         - Gets all execs in the database

02. Get exec based on ID
      - Request: `GET /execs/:execId`
      - Response: `{ "data": { id: "id", name: "name", title: "title", description: "description", imageUrl: "imageUrl"} }`
      - Explanation:
         - Gets a specific exec, given exec ID

03. Get exec based on name
      - Request: `GET /execs/:name`
      - Response: `{ "data": { id: "id", name: "name", title: "title", description: "description", imageUrl: "imageUrl"} }`
      - Explanation:
         - Gets a specific exec, given exec name in titlecase e.g. "Kevin Cheung"

04. Get exec based on title
      - Request: `GET /execs/:title`
      - Response: `{ "data": { id: "id", name: "name", title: "title", description: "description", imageUrl: "imageUrl"} }`
      - Explanation:
         - Gets an exec based on their title/position in the club e.g., president, treasurer

05. Create an exec
      - Request: `POST /execs { name: "name", title: "title", description: "description", imageUrl: "imageUrl"}`
      - Response: `{ "data": { id: "id", name: "name", title: "title", description: "description", imageUrl: "imageUrl"} }`
      - Explanation:
           - Creates an exec in the database

06. Update an exec
      - Request: `PUT /execs/:execId { name: "name", title: "title", description: "description", imageUrl: "imageUrl"}`
      - Response: `{ "data": { id: "id", name: "name", title: "title", description: "description", imageUrl: "imageUrl"} }`
      - Explanation:
         - Updates an exec in the database, given exec ID

07. Delete an exec
      - Request: `DELETE /execs/:execId`
      - Response: `{ "data": {} }`
      - Explanation:
         - Deletes an exec from the database, given their exec ID.
