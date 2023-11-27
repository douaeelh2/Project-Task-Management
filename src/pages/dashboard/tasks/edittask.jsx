import React from 'react'
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Input,
  Textarea,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";

export function EditTask() {
  return (
<div className="mt-10 mb-8 flex flex-col gap-12">
        <Card>
        <div class="ml-6 mr-6">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <Typography variant="h5" color="blue-gray" className="mb-1">
              Edit Task
              </Typography>
            </div>
            
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <form className="mx-auto max-w-xl ">
            <div class="grid grid-cols-6 gap-6">

              <div class="col-span-6 sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Task Name
                </Typography>
                <Input
                  size="sm"
                  defaultValue="nametask"
                  placeholder="TaskName"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Project
                </Typography>
                <Select size="md" label="Select Project">
                  <Option>Poject 1 </Option>
                  <Option>Poject 2 </Option>
                  <Option>Poject 3 </Option>
                  <Option>Poject 4 </Option>
                  <Option>Poject 5 </Option>
                </Select>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Start Date
                </Typography>
                <Input
                  size="md"
                  type="date"
                  placeholder="name@mail.com"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              
              <div class="col-span-6 sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  End Date
                </Typography>
                <Input
                  size="md"
                  type="date"
                  placeholder="name@mail.com"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Select User
                </Typography>
                <Select size="md">
                  <Option>USER 1 HTML</Option>
                  <Option>USER 2  React</Option>
                  <Option>USER 3 Vue</Option>
                  <Option>UESR 4 Angular</Option>
                  <Option>USER 5 Svelte</Option>
                </Select>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Status
                </Typography>
                <Select size="md">
                  <Option>Pending</Option>
                  <Option>Completed</Option>
                </Select>
              </div>

            </div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
                  Description 
            </Typography>             
            <Textarea label="Message" /> 
            <div class="col-span-6 sm:col-full ml-4 mt-4 mb-4">
              <Button variant="gradient" color="black" >
              Edit
              </Button>          
            </div>
          </form>
        </CardBody>
        </div>
        </Card> 
    </div>  
  )
}
export default EditTask;

