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
  import { Profile, EditTask , ShowTask} from "@/pages/dashboard";
  import UserTasks from "./pages/dashboard/tasks/usertasks";
  
  const icon = {
    className: "w-5 h-5 text-inherit",
  };
  
  export const routesUser = [
    {
      layout: "user",
      pages: [
        {
          icon: <ClipboardDocumentListIcon  {...icon} />,
          name: "tasks",
          path: "/tasks",
          element: <UserTasks />,
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
  