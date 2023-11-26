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
import { usersTableData, } from "@/data";
const UserItem = usersTableData.find(User => User.name === "John Michael");
const userName = UserItem.name;
const userImg = UserItem.img;
const UserProjects = () => {
  return (
    <div className='w-full'>
      <ol className='list-decimal p-1'>
        {UserItem.project.map(project => (
          <li key={project.id} className='flex flex-col my-2'>
            <span>{project.projectName}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};
const UserTasks = () => {
  return (
    <div className='w-full'>
      <ul className='list-decimal p-1'>
        {UserItem.task.map(task => (
          <li key={task.id} className='flex flex-col my-2'>
            <span>{task.taskName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
const userEmail = UserItem.email;
const userJob = UserItem.job;
const userDate = UserItem.date;

export function ShowUser() {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 flex items-center justify-between p-6 border-b-2 mb-2"
      >
        <div className="flex items-center justify-between gap-4">
          <Typography variant="h5" color="blue-gray" className="mb-1">
          User Informations
          </Typography>      
        </div>      
      </CardHeader>
      <CardBody className="overflow px-0 pt-0 pb-2">
      <div className="flex flex-wrap">
        <div className="w-1/5 min-w-100px">
          <div className="w-full pl-10">
            <Avatar
              src={userImg} 
              alt={userName}
              size="xxl"
              variant="circular"
              className='m-2 justify-center'
            />
          </div>
        </div>
        <div class="w-4/5">
          <div className="flex flex-wrap mx-5 mb-5">
            <ShowDetails title={"User Name"} taskdata={userName} className="w-1/2 my-2 px-10 min-min-h-20" /> 
            <ShowDetails title={"User Email"} taskdata={userEmail} className="w-1/2 my-2 px-10 min-h-20"/> 
            <ShowDetails title={"User Job"} taskdata={userJob} className="w-1/2 my-2 px-10 min-h-20"/> 
            <ShowDetails title={"Date"} taskdata={userDate} className="w-1/2 my-2 px-10 min-h-20"/> 
            <ShowDetails title={"User Projects"} taskdata={<UserProjects/>} className="w-1/2 my-2 px-10 min-h-20 border-b-2"/> 
            <ShowDetails title={"User Tasks"} taskdata={<UserTasks />} className="w-1/2 my-2 px-10 min-h-20 border-b-2"/> 
            <ul className='flex flex-wrap w-full justify-around p-1'>
                <li className='flex flex-col my-2'><ShowDetails title={"CreatedBy"} taskdata={"CreatedBy"} className="w-1/4 my-2 px-10 min-h-20"/></li>
                <li className='flex flex-col my-2'><ShowDetails title={"UpdateBy"} taskdata={"UpdateBy"} className="w-1/4 my-2 px-10 min-h-20"/></li>
                <li className='flex flex-col my-2'><ShowDetails title={"CreatedAt"} taskdata={"CreatedAt"} className="w-1/4 my-2 px-5 min-h-20"/></li>
                <li className='flex flex-col my-2'><ShowDetails title={"UpdatedAt"} taskdata={"UpdatedAt"} className="w-1/4 my-2 px-5 min-h-20"/></li>
            </ul>
          </div>          
        </div>
      </div>        

      </CardBody>
    </Card>
    
  </div>
  )
}

