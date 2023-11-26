import React from 'react'
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

import{
  ShowDetails,
} from "@/widgets/layout/ShowDetails";

import {
  tasksTableData,
} from "@/data";

const TaskItem = tasksTableData.find(Task=> Task.task === "Building applications for iOS");
const TaskName = TaskItem.task;
const TaskProject = TaskItem.project;
const TaskDuration= TaskItem.duration;
const TaskUesr = TaskItem.user;


export function ShowTask() {

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
          Task Informations
          </Typography>
        </div>
        
      </CardHeader>
      <CardBody className="overflow px-0 pt-0 pb-2">
      <div class="flex flex-wrap mx-5 mb-5">
        <ShowDetails title={"Task Name"} taskdata={TaskName} className="w-1/2 my-2 px-10 min-h-20" /> 
        <ShowDetails title={"Project"} taskdata={TaskProject} className="w-1/2 my-2 px-10 min-h-20"/> 
        <ShowDetails title={"Duration"} taskdata={TaskDuration} className="w-1/2 my-2 px-10 min-h-20"/> 
        <ShowDetails title={"Member"} taskdata={TaskUesr} className="w-1/2 my-2 px-10 min-h-20"/> 
        <ShowDetails title={"Desciption"} taskdata={TaskProject} className="w-full my-2 pb-4 px-10 min-h-40 border-b-2 mb-2"/> 
        <ul className='flex flex-wrap w-full justify-around p-1'>
            <li className='flex flex-col my-2'><ShowDetails title={"CreatedBy"} taskdata={"CreatedBy"} className="w-1/4 my-2 px-10 min-h-20"/></li>
            <li className='flex flex-col my-2'><ShowDetails title={"UpdateBy"} taskdata={"UpdateBy"} className="w-1/4 my-2 px-10 min-h-20"/></li>
            <li className='flex flex-col my-2'><ShowDetails title={"CreatedAt"} taskdata={"CreatedAt"} className="w-1/4 my-2 px-5 min-h-20"/></li>
            <li className='flex flex-col my-2'><ShowDetails title={"UpdatedAt"} taskdata={"UpdatedAt"} className="w-1/4 my-2 px-5 min-h-20"/></li>
        </ul>
      </div>
      </CardBody>
    </Card>
    
  </div>
  )
}
