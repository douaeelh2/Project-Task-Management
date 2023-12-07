import {
    HomeIcon,
    UserCircleIcon,
    TableCellsIcon,
    InformationCircleIcon,
    ServerStackIcon,
    RectangleStackIcon,
    Cog6ToothIcon,
    UsersIcon,
    ClipboardDocumentListIcon 
  } from "@heroicons/react/24/solid";
  import { Profile, TaskTable,EditTask , ShowTask } from "@/pages/dashboard";
  
  const icon = {
    className: "w-5 h-5 text-inherit",
  };
  
  export const routesUser = [
    {
      layout: "dashboard",
      pages: [
        {
          icon: <ClipboardDocumentListIcon  {...icon} />,
          name: "tasks",
          path: "/tasks/table",
          element: <TaskTable />,
        },
        {
          icon: <UserCircleIcon {...icon} />,
          name: "profile",
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/tasks/edit",
          element: <EditTask />,
        },
        {
          path: "/tasks/show",
          element: <ShowTask />,
        },
      ],
    },
    
    
    
  ];
  
  export default routesUser;
  