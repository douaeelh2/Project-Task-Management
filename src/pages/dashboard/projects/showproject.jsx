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
import { Link } from "react-router-dom";
import {
  projectsTableData,
} from "@/data";

const projectItem = projectsTableData.find(Project => Project.project === "Material XD Version");
const ProjectName = projectItem.project;
const Members = () => {
  return (
    <div className='w-full'>
      <ul className='flex justify-between p-5'>
        {projectItem.members.map(member => (
          <li key={member.project} className='flex flex-col'>
            <Avatar
                  src={member.img} 
                  alt={member.project}
                  size="lg"
                  variant="circular"
                  className='m-2 justify-center'
                />
            <span>{member.project}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}; 
const category = projectItem.category;
const Desciption = projectItem.description;
const duration = projectItem.duration;



export function ShowProject() {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <div class="flex justify-end mr-5">
          <Link to="../projects/edit" class="ml-2">
              <Button variant="gradient" color="black">
                 Edit
              </Button>
          </Link>
      </div>
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 flex items-center justify-between p-6 border-b-2 mb-2"
      >
        <div className="flex items-center justify-between gap-4">
          <Typography variant="h5" color="blue-gray" className="mb-1">
          Project Informations
          </Typography>      
        </div>      
      </CardHeader>
      <CardBody className="overflow px-0 pt-0 pb-2">
      <div class="flex flex-wrap mx-5 mb-5">
        <ShowDetails title={"Project Name"} taskdata={ProjectName} className="w-1/2 mb-1 px-10 h-20" /> 
        <ShowDetails title={"category"} taskdata={category} className="w-1/2 mb-1  px-10 h-20"/> 
        <ShowDetails title={"Duration"} taskdata={duration} className="w-1/2 mb-1 px-10 h-20"/> 
        <ShowDetails title={"Desciption"} taskdata={Desciption} className="w-full mb-1 px-10 h-40 border-b-2 mb-2"/> 
        <ShowDetails title={"Team members"} taskdata={<Members />} className="w-full mb-1 px-10 h-40 border-b-2 mb-2"/> 
        <ShowDetails title={"CreatedBy"} taskdata={"CreatedBy"} className="w-1/4 mb-1 px-10 h-20"/>
        <ShowDetails title={"UpdateBy"} taskdata={"UpdateBy"} className="w-1/4 mb-1 px-10 h-20"/>
        <ShowDetails title={"CreatedAt"} taskdata={"CreatedAt"} className="w-1/4 mb-1 px-10 h-20"/>
        <ShowDetails title={"UpdatedAt"} taskdata={"UpdatedAt"} className="w-1/4 mb-1 px-10 h-20"/>
      </div>
      </CardBody>
    </Card>
    
  </div>
  )
}
