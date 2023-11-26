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

import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import { CheckCircleIcon, ClockIcon,PencilSquareIcon,EyeIcon ,TrashIcon,MagnifyingGlassIcon  } from "@heroicons/react/24/solid";


export function EditProject() {
  return (

    <div className="mt-10 mb-8 flex flex-col gap-12">
            <Card>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 flex items-center justify-between p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <Typography variant="h5" color="blue-gray" className="mb-1">
                  Edit Project
                  </Typography>
                </div>
                
              </CardHeader>
              <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                <form className="mx-auto max-w-xl ">
                <div class="grid grid-cols-6 gap-6">

                  <div class="col-span-6 sm:col-span-3">
                    <Typography variant="h6" color="blue-gray" className="mb-3">
                      Project Name
                    </Typography>
                    <Input
                      size="sm"
                      placeholder="Project name"
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
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
                      Team
                    </Typography>
                    <Select size="md" >
                      <Option>Font-end Team</Option>
                      <Option>Back-end Team</Option>
                      <Option>API Team</Option>
                    </Select>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <Typography variant="h6" color="blue-gray" className="mb-3">
                      Status
                    </Typography>
                    <Select size="md" >
                      <Option>Pending</Option>
                      <Option>Completed</Option>
                    </Select>
                  </div>

                </div>
                <Typography variant="h6" color="blue-gray" className="mb-3 mt-4">
                     Project Description
                </Typography>             
                <Textarea label="Message" /> 
                <div class="col-span-6 sm:col-full ml-4 mt-4 mb-4">
                  <Button variant="gradient" color="black" >
                    Edit
                  </Button>          
                </div>
              </form>
            </CardBody>
          </Card> 
    </div>

  )
}

