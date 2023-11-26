import React from 'react'
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button
} from "@material-tailwind/react";

import{
  ShowDetails,
} from "@/widgets/layout/ShowDetails";
import { Link } from "react-router-dom";
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
        <div className="flex items-center justify-between w-full">
          <Typography variant="h5" color="blue-gray" className="mb-1">
            Task Informations
          </Typography>   
          <div className="flex items-center">
            <div className="ml-auto">
              <Link to="../tasks/edit" className="ml-2">
              <Button variant="gradient" color="black">
                Edit
              </Button>

              </Link>
              <Link to="../tasks/delete" className="ml-2">
                <Button variant="gradient" color="red">
                  Delete
                </Button>
              </Link>
            </div>
          </div>   
        </div>      
      </CardHeader>
      <CardBody className="overflow px-4 py-4">
      <div class="flex flex-wrap mx-5 mb-5">
        <ShowDetails title={"Task Name"} taskdata={TaskName} className="w-1/2 mb-1 px-10 h-20" /> 
        <ShowDetails title={"Project"} taskdata={TaskProject} className="w-1/2 mb-1 px-10 h-20"/> 
        <ShowDetails title={"Duration"} taskdata={TaskDuration} className="w-1/2 mb-1 px-10 h-20"/> 
        <ShowDetails title={"Member"} taskdata={TaskUesr} className="w-1/2 mb-1 px-10"/> 
        <ShowDetails title={"Desciption"} taskdata={TaskProject} className="w-full px-10 h-40 border-b-2"/> 
        <ShowDetails title={"CreatedBy"} taskdata={"CreatedBy"} className="w-1/4 mt-4 mb-1 px-10 h-20"/>
        <ShowDetails title={"UpdateBy"} taskdata={"UpdateBy"} className="w-1/4 mt-4 mb-1 px-10 h-20"/>
        <ShowDetails title={"CreatedAt"} taskdata={"CreatedAt"} className="w-1/4 mt-4 mb-1 px-10 h-20"/>
        <ShowDetails title={"UpdatedAt"} taskdata={"UpdatedAt"} className="w-1/4 mt-4 mb-1 px-10 h-20"/>
      </div>
      </CardBody>
    </Card>
    
  </div>
  )
}
