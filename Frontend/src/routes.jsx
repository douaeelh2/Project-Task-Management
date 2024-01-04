import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  UsersIcon,
  ClipboardDocumentListIcon 
} from "@heroicons/react/24/solid";
import { Home, Profile, UserTable , ProjectTable , TaskTable, CreateProject, EditProject , 

  ShowProject , CreateTask , EditTask , ShowTask , CreateUser , ShowUser
  } from "@/pages/dashboard";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "admin",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "home",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "projects",
        path: "/projects/table",
        element: <ProjectTable />,
      },
      {
        icon: <ClipboardDocumentListIcon  {...icon} />,
        name: "tasks",
        path: "/tasks/table",
        element: <TaskTable />,
      },
      {
        icon: <UsersIcon {...icon} />,
        name: "users",
        path: "/users/table",
        element: <UserTable />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/projects/create",
        element: <CreateProject />,
      },
      {
        path: "/projects/edit",
        element: <EditProject />,
      },
      {
        path: "/projects/show/:id",
        element: <ShowProject />,
      },

      {
        path: "/tasks/create",
        element: <CreateTask />,
      },
      {
        path: "/tasks/edit",
        element: <EditTask />,
      },
      {
        path: "/tasks/show/:id",
        element: <ShowTask />,
      },
      {
        path: "/users/create",
        element: <CreateUser />,
      },
      {
        path: "/users/show/:id",
        element: <ShowUser />,
      },
    ],
  },
  
  
  
];

export default routes;
