# To-Do List Application

This is a task management application that allows users to organize and manage their daily tasks.
The app provides a simple and intuitive interface for creating, editing, and deleting tasks. 
It is designed to help users keep track of their to-dos, with all tasks saved locally in the browser using LocalStorage, so tasks remain even after a page refresh.


## What this project does

- Create tasks: Users can add new tasks by providing the task name, author, and selecting the task status (e.g., "In Progress", "Deadline", or "Error").
  
- Edit tasks: Each task can be edited to change the task name, author, and status. Users can quickly modify their tasks directly from the task list.
  
- Delete tasks: Users can remove tasks that are no longer needed, keeping their task list clean and organized.

- Task sorting: Tasks are automatically sorted so that the most recent tasks are displayed at the top of the list.
  
- Task persistence: The application uses LocalStorage to save tasks. This means tasks are preserved even after the page is refreshed or the browser is closed, ensuring users don't lose their data.

- Form validation: The app includes form validation to ensure all fields are filled in before a task is added, improving user experience and preventing incomplete tasks.

## Key Features

1. User-friendly Interface: The app has a simple and clean interface, making it easy to use.
2. Persistent Data: Tasks are saved in LocalStorage, so they are not lost after refreshing the page.
3. Edit and Delete Capabilities: Users can modify existing tasks or remove them from the list.
4. Dynamic Task List: The task list is automatically updated and re-rendered every time a task is added, edited, or deleted.

## How it works

1. Add a Task: Users input the task name, author, and select the task's status from a dropdown menu.
   Once the "Add" button is clicked, the task is added to the list and saved in LocalStorage.
  
3. Edit a Task: Each task has an "Edit" button. When clicked, it opens a form that allows the user to modify the task details.
   After making changes, clicking "Save" will update the task in both the list and LocalStorage.

5. Delete a Task: Users can delete a task by clicking the "Delete" button next to the task.
   This removes the task from both the list and LocalStorage.

## Why this project is useful

This application is a practical solution for anyone looking to organize their tasks without the need for an account or online storage. 
It offers a lightweight, local task management solution for personal use. 
The app is ideal for users who need a simple and efficient way to manage their to-do lists without relying on external services.
