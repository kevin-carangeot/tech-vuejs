# Vue 3 CRUD User Test

## Goal
Create a user edit modal by clicking Edit button in the list. The user data to edit must be stored in a Pinia store.

## Context
- The project uses Vue 3 (Composition API) and Pinia for state management.
- CRUD operations are performed on the public API https://dummyjson.com/users.
- The UsersCrud.vue component displays the user list and allows creation/deletion.
- A Pinia store (userStore) already exists but is unused.

## What to do
**Feel free to refactor the code as you wish.**
1. **Create a user edit modal**
   - When clicking "Edit", the modal should open with pre-filled fields.
   - The data to edit must be retrieved from the Pinia store.
   - Closing the modal must reset the store.
2. **Update the user**
   - On validation, call the API (PUT) to save the changes.
   - Update the user list in UsersCrud.vue after editing.
3. **Polish the user experience**
   - Show error messages if the API fails.
   - Handle modal closing (button or outside click).


## Bonus
- Modal open/close animation.
- Refactor to make the modal reusable.

## Getting started
- Install dependencies: `npm install`
- Start the project: `npm run dev` or with Docker Compose


```bash
docker-compose up --build
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

Good luck !
