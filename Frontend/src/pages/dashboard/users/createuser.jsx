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
export function CreateUser() {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
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
              Create New User
              </Typography>
          </div>
            
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <form className="mx-auto max-w-xl ">
            <div class="grid grid-cols-6 gap-6">

              <div class="col-span-6 sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  User Name
                </Typography>
                <Input
                  size="sm"
                  placeholder="User Name"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  User Email
                </Typography>
                <Input
                  size="sm"
                  placeholder="Email"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  User Password
                </Typography>
                <Input
                  size="sm"
                  placeholder="Password"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                   User Designation
                </Typography>
                <Input
                  size="sm"
                  placeholder="Designation"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  User
                </Typography>
                <Select size="md" label="Select User">
                  <Option>USER 1 HTML</Option>
                  <Option>USER 2  React</Option>
                  <Option>USER 3 Vue</Option>
                  <Option>UESR 4 Angular</Option>
                  <Option>USER 5 Svelte</Option>
                </Select>
              </div>

            </div>


            <div class="col-span-6 sm:col-full ml-4 mt-4 mb-4">
              <Button variant="gradient" color="black" >
              Create the new user
              </Button>          
            </div>
          </form>
        </CardBody>
        </div>
      </Card> 
    </div>
  )
}
export default CreateUser;