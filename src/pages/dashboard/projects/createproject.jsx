import React from "react";
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

import { CheckCircleIcon, ClockIcon,PencilSquareIcon,EyeIcon ,TrashIcon,MagnifyingGlassIcon  } from "@heroicons/react/24/solid";


export function CreateProject() {
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
              Create Projects
              </Typography>
            </div>
            
          </CardHeader>
          <CardBody className="overflow px-0 pt-0 pb-2">
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
                  placeholder="ProjectName"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Category
                </Typography>
                <Select size="md" label="Catagory">
                  <Option>Web Development</Option>
                  <Option>Network Security</Option>
                  <Option>Graphic Design</Option>
                  <Option>Mobile Development</Option>
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
                  Team
                </Typography>
                <Select size="md" label="Select Team">
                  <Option>Font-end Team</Option>
                  <Option>Back-end Team</Option>
                  <Option>API Team</Option>
                </Select>
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Status
                </Typography>
                <Select size="md" label="Stauts">
                  <Option>Pending</Option>
                  <Option>Preparing</Option>
                  <Option>Processing</Option>
                  <Option>Completed</Option>
                </Select>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Description 
              </Typography>             
                <Textarea label="Message" />              
              </div>
              <Button className="mt-6" fullWidth>
                Create a new prject
              </Button>
            </form>
          </CardBody>
        </Card>
        
      </div>

      
  );
}

export default CreateProject;
