# Project-Task-Management


## Table of Contents
- [About](#about)
- [Authors](#authors)
- [Installation](#installation)
- [Usage](#usage)
   - [Screenshots](#screenshots)

## About 
Project-Task-Management is a comprehensive management site that enables teams to collaborate efficiently by tracking projects, tasks, and users. 
With a user-friendly interface, our site aims to simplify project planning, task assignment, and overall project management.

### Technologies Used
Project-Task-Management is developed using the following technologies:
- *React:* A modern JavaScript library for building interactive user interfaces.
- *Laravel:* An elegant PHP framework for rapid web development and building robust applications.
- *REST API:* Utilized for seamless communication and data exchange between the front-end and back-end.
- *Tailwind CSS:* A utility-first CSS framework that makes it easy to create modern and responsive designs.
- *Material-UI:* A React component library that implements Material Design for React.

## Authors
-*EL HILA Douae* 

-*EL HASSNAOUI Salma* 

-*REZOUKI Badr*  

## Installation 
### Run the following commands to install all dependencies

Install node_modules command in your first terminal : 
```
cd Frontend
```
```
npm install
```

Install Laravel Composer command in your second terminal : 

```
cd Backend
```

```
composer install
```

Create .env file just command in your second terminal :
```
cp .env.example .env
```

Configure your database settings in the .env file:

```
DB_DATABASE=db_Project_Task_Management
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

Run the database migration command in your second terminal : 

```
php artisan migrate
```

Start running the server command in your second terminal :

 ```
php artisan serve
```

Compiles and reloads front-end resources command in your first terminal : 

 ```
npm run dev
```
To use the react select, run the following command : 

 ```
npm install react-select
```

# Usage
   ## Sign In and Home Screenshots

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/douaeelh2/Project-Task-Management/assets/127549220/d046e5b1-010b-4787-9469-ca491eb181b6" alt="Sign In" width="1200"/>
    </td>
    <td align="center">
      <img src="https://github.com/douaeelh2/Project-Task-Management/assets/127549220/317a6d56-c1ad-44eb-8133-c39ac6891af0" alt="Sign In" width="1200"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/douaeelh2/Project-Task-Management/assets/127549220/23be3fb0-7ca9-4789-9e95-52e45d49e94f" alt="Sign In" width="1200"/>
    </td>
    <td align="center">
      <img src="https://github.com/douaeelh2/Project-Task-Management/assets/127549220/10d3b27d-a8a5-4df1-9ffd-5e625dba3507" alt="Home" width="1200"/>
    </td>
  </tr>
</table>

   ### Sign In Page
   This page serves as the entry point for user authentication. Users, particularly administrator, can sign in to access the system. The page includes input fields for        email and password, with error handling mechanisms for empty inputs or invalid data.
   ### Home Page
   The home page is the central hub of the application, providing an overview of essential information and features. It serves as a dashboard for the admin, displaying 
   cards project statistics, users projects and tasks table , and quick access to important functionalities for showing each row data

  ## User Table , Show and Create User and Profile Screenshots
  
 <table>
  <tr>
    <td align="center">
      <img src="https://github.com/douaeelh2/Project-Task-Management/assets/127549220/281f5372-bff4-472e-ac99-9be999741ba2" alt="User Table" width="1200"/>
    </td>
      <td align="center">
      <img src="https://github.com/douaeelh2/Project-Task-Management/assets/127549220/c934d8c9-34f9-443b-b5b9-40995f167821" alt="Show User" width="1200"/>
    </td>
   
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/douaeelh2/Project-Task-Management/assets/127549220/d3e812b9-8f1b-4bb2-b98e-7c9a727dae39" alt="Create User" width="1200"/>
    </td>
    <td align="center">
      <img src="https://github.com/douaeelh2/Project-Task-Management/assets/127549220/c8e17f3d-2baa-43cf-8c19-28fb3618c1d8" alt="User Profil" width="1200"/>
    </td>
  </tr>
</table>

 ### Users Table Page
 This page presents all users in the system. Admin can efficiently manage : view user details and delete user . The table may include sorting and filtering options for better user 
 experience
 
 ### Show User Page
 The Show User page offers detailed information about a specific user account. Admin can view user details, such as personal informations , projects and tasks.

 ### Create User Page 
 This page is designed for administrator to effortlessly add new users to the system. It features a form for inputting key user details. The page ensures data integrity 
 with robust validation, handling empty inputs, and facilitating secure of new users. 

 ### Profile Page
 The Profile page is dedicated to each user's personal account settings. It enables all users to update their profiles, change passwords, and manage account 
 preferences.

   ##  Projects Table and Projects filter Screenshots
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/douaeelh2/Project-Task-Management/assets/127985387/2f75e1c3-b3fb-4ddf-8f66-1a0efc58f5dc" alt="Sign In" width="1200"/>
    </td>
    <td align="center">
      <img src="https://github.com/douaeelh2/Project-Task-Management/assets/127985387/42bd7678-8b83-4e0b-928d-431058ec504b" alt="Sign In" width="1200"/>
    </td>
  </tr>
</table>


 ### Projects Table Page
This page displays a comprehensive table with details of existing projects, including name, category, members, duration, status, and a management section providing options for editing, deleting, or showing detailed information.It also Enables project filtering based on their names, offering a search functionality to streamline locating a specific project.


##  Show , Add , Edit Project Screenshots

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/douaeelh2/Project-Task-Management/assets/127985387/d84191a1-e96d-4c6f-a8f8-22fc796a3d14" alt="Sign In" width="1200"/>
    </td>
    <td align="center">
      <img src="https://github.com/douaeelh2/Project-Task-Management/assets/127985387/67c98598-3812-4e11-8678-fe87e17631a2" alt="Sign In" width="1200"/>
    </td>
  </tr>
   <tr>
    <td align="center">
      <img src="https://github.com/douaeelh2/Project-Task-Management/assets/127985387/76bab20e-0c25-4f69-b234-fd633f47bdab" alt="Sign In" width="1200"/>
    </td>
  </tr>
</table>


 ### Show Project Page
This page Presents a detailed view of all information regarding a specific project, offering a comprehensive overview of its details, status, members, and other relevant information.

 ### Add Project Page 
 This page Presents an intuitive form for adding a new project, facilitating the input of required information for creating a new project.

 ### Edit Project Page
 The Edit Project page Provides an interactive form for editing the details of an existing project, offering a user-friendly experience for updating project information.


 
##  Tasks Table ,Edit, Show task Screenshots

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/douaeelh2/Project-Task-Management/assets/100560080/8df7b8d2-8fca-458f-ad50-f2e5370a4074" alt="Sign In" width="1200"/>
    </td>
    <td align="center">
      <img src="https://github.com/douaeelh2/Project-Task-Management/assets/100560080/a5741a2b-84b1-4f8e-835c-9fb7748d7dc1" alt="Sign In" width="1200"/>
    </td>
  </tr>
   <tr>
       <td align="center">
      <img src="https://github.com/douaeelh2/Project-Task-Management/assets/100560080/2f9f1617-2028-450c-b75c-5570a943e048" alt="Sign In" width="1200"/>
    </td>
  </tr>
</table>
 
### User Tasks Table Page
A simple user can only view the list of their tasks.
 
### Show , Edit Task Pages
He has the ability to review the details of a task and modify status of task.

### Admin Tasks Table Pages
 The admin can view all users tasks across all projects.

### Create a New Task Pages 
Only the admin has the ability to create a task.

### Show , Edit and Delete Task Pages
 The admin can also view the details of a task and has the authority to delete or edit it.
