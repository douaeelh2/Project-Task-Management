import React from 'react'
import {
  Typography,
  Card,
  CardHeader,
  CardBody,

} from "@material-tailwind/react";


import {
  tasksTableData,
} from "@/data";

function ShowDetails({title}, {taskData}){
  return(
    <div className='w-1/2 p-1rem'>
      <Typography variant="h6" color="blue" className="mb-1">
        {title}
      </Typography>
      <Typography variant="h6" color="black" className="mb-1">
        {taskData}
      </Typography>
    </div>
  );
}
export function ShowTask() {
  const TaskItem = tasksTableData.find(Task=> Task.task === "Building applications for iOS");
  const TaskName = TaskItem.task;
  const TaskProject = TaskItem.project;
  const TaskDuration= TaskItem.duration;
  const TaskUesr = TaskItem.user;
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 flex items-center justify-between p-6"
      >
        <div className="flex items-center justify-between gap-4">
          <Typography variant="h5" color="blue-gray" className="mb-1">
          Task Informations
          </Typography>
        </div>
        
      </CardHeader>
      <CardBody className="overflow px-0 pt-0 pb-2">
      <div class="flex flex-wrap mx-5 mb-5">
        <ShowDetails title={"Task Name"} taskData={TaskName}/> 
        <ShowDetails title={"Project"} taskData={"TaskProject"}/> 
        <ShowDetails title={"Duration"} taskData={"TaskDuration"}/> 
        <ShowDetails title={"Member"} taskData={" "}/> 
        <ShowDetails title={"Desciption"} taskData={"TaskProject"}/> 
      </div>
      </CardBody>
    </Card>
    
  </div>
  )
}
