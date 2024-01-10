import React from 'react'
import {
  Typography,
  Avatar,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";

import{
  ShowDetails,
} from "@/widgets/layout/ShowDetails";
import { CheckCircleIcon, ClockIcon,PencilSquareIcon,EyeIcon ,TrashIcon,MagnifyingGlassIcon,Cog6ToothIcon  } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
// import {
//   projectsTableData,
// } from "@/data";

// const projectItem = projectsTableData.find(Project => Project.project === "Material XD Version");
// const ProjectName = projectItem.project;
// const Members = () => {
//   return (
//     <div className='w-full'>
//       <ul className='flex flex-wrap justify-between p-1'>
//         {projectItem.members.map(member => (
//           <li key={member.project} className='flex flex-col my-2'>
//             <Avatar
//                   src={member.img} 
//                   alt={member.project}
//                   size="lg"
//                   variant="circular"
//                   className='m-2 justify-center'
//                 />
//             <span>{member.project}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }; 
// const category = projectItem.category;
// const Description = projectItem.description;
// const duration = projectItem.duration;



export function ShowProject() {
  return (
    <div className="mt-10 mb-8 flex flex-col gap-12">  
    {/* <Card>
        <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex items-center justify-between p-4 border-b-2 mb-2"
      >
        <div className="flex items-center justify-between w-full">
          <Typography variant="h5" color="blue-gray" className="mb-1">
            Project Informations
          </Typography>   
          <div className="flex items-center">
            <div className="ml-auto">
              <Link to="../projects/edit" className="ml-2">
              <Button variant="gradient" color="black">
                Edit
              </Button>

              </Link>
              <Link to="../projects/delete" className="ml-2">
                <Button variant="gradient" color="red">
                  Delete
                </Button>
              </Link>
            </div>
          </div>   
        </div>      
      </CardHeader>
      <CardBody className="overflow-x-auto px-0 sm:px-6 py-4">
      <div class="flex flex-wrap mx-5 mb-5 px-6 md:px-10">
        <ShowDetails title={"Project Name"} taskdata={ProjectName} className="w-1/2 mb-1 px-3 py-3" /> 
        <ShowDetails title={"Category"} taskdata={category} className="w-1/2 mb-1 px-3 py-3"/> 
        <ShowDetails title={"Duration"} taskdata={duration} className="w-1/2 mb-1 px-3 py-3"/> 
        <ShowDetails title={"Description"} taskdata={Description} className="w-1/2 mb-1 px-3 py-3"/> 
        <ShowDetails title={"Team members"} taskdata={<Members />} className="w-full border-b-2 border-t-2 px-3 py-4"/> 
        <ShowDetails title={"CreatedBy"} taskdata={"CreatedBy"} className="w-1/4 mt-4 mb-1 px-3 py-3"/>
        <ShowDetails title={"UpdateBy"} taskdata={"UpdateBy"} className="w-1/4 mt-4 mb-1 px-3 py-3"/>
        <ShowDetails title={"CreatedAt"} taskdata={"CreatedAt"} className="w-1/4 mt-4 mb-1 px-3 py-3"/>
        <ShowDetails title={"UpdatedAt"} taskdata={"UpdatedAt"} className="w-1/4 mt-4 mb-1 px-3 py-3"/>
      </div>
      </CardBody>
    </Card> */}
    
  </div>
  )
}