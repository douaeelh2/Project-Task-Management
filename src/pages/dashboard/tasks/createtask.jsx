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
export function CreateTask() {
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
              Create New Task
              </Typography>
            </div>
            
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <form className="mx-auto max-w-xl ">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h4" color="blue-gray">
                  Enter Informations
                </Typography>
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="TaskName"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Project
                </Typography>
                <Select size="md" label="Select Project">
                  <Option>Poject 1 </Option>
                  <Option>Poject 2  </Option>
                  <Option>Poject 3 </Option>
                  <Option>Poject 4 </Option>
                  <Option>Poject 5 </Option>
                </Select>
                <Typography variant="h6" color="blue-gray" className="-mb-3">
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
                <Typography variant="h6" color="blue-gray" className="-mb-3">
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
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  User
                </Typography>
                <Select size="md" label="Select User">
                  <Option>USER 1 HTML</Option>
                  <Option>USER 2  React</Option>
                  <Option>USER 3 Vue</Option>
                  <Option>UESR 4 Angular</Option>
                  <Option>USER 5 Svelte</Option>
                </Select>
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Status
                </Typography>
                <Select size="md" label="Stauts">
                  <Option>Pending</Option>
                  <Option>Completed</Option>
                  
                </Select>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Description 
              </Typography>             
                <Textarea label="Message" />              
              </div>
              <Button className="mt-6" fullWidth>
                Create a new task
              </Button>
            </form>
          </CardBody>
        </Card>
        
      </div>
  )
}
export default CreateTask;