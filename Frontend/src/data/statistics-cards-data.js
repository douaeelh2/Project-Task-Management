import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  UserGroupIcon,
  ChartBarIcon,
  CheckIcon,
   ClockIcon, 
   CheckCircleIcon, 
   TagIcon
} from "@heroicons/react/24/solid";
import AuthorsTableData from "@/data/authors-table-data";
import ProjectsTabledata from "@/data/projects-table-data";
// let CompletedProjects = 0;

// function calcul (){
//   const {projects , loader}= ProjectsTabledata()
//   const { authorsTableData, dataLoaded } = AuthorsTableData();
//   CompletedProjects=projects.filter(project=>project.status==="completed").length;

// }
// calcul();
export const statisticsCardsData = [
  
  {
    color: "gray",
    icon: UsersIcon,
    title: "Total Users",
    value: "56",
  },
  {
    color: "gray",
    icon: CheckCircleIcon,
    title: "Completed Projects",
    value: "CompletedProjects",
  },
  {
    color: "gray",
    icon: ClockIcon,
    title: "In Progress Projects",
    value: "25",
  },
  {
    color: "gray",
    icon: UserGroupIcon,
    title: "Total Groups",
    value: "23",
  },
];

export default statisticsCardsData;
