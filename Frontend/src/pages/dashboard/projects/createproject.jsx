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
  ordersOverviewData,
  projectsData,
} from "@/data";
import { CheckCircleIcon, ClockIcon,PencilSquareIcon,EyeIcon ,TrashIcon,MagnifyingGlassIcon  } from "@heroicons/react/24/solid";
import axios from "axios";
import AuthorsTableData from "@/data/authors-table-data";


export function CreateProject() {
  const { authorsTableData, dataLoaded } = AuthorsTableData();
  const [Projectdata,setProjectdata]=React.useState({
    name:'',
    enddate:'',
    startdate:'',
    // members: [
    //   { id: '', name: '' },
    //   { id: '', name: '' }, 
    //   { id: '', name: '' }, 
    // ],
    description:''
  })
  const members=[
    "salma",
    "wiame",
    "reda"
  ]
  const handlechanges=(e)=>{
    const {name,value}=e.target
    console.log(value)
    // const updatedMembers = [...prevProjectdata.members];
    // updatedMembers[index] = {
    //     id: selectedUser.id,
    //     name: `${selectedUser.firstname} ${selectedUser.lastname}`,
    //   };
    setProjectdata({
      ...Projectdata,
      [name]:value
    })
  }
  // const handlechangeselect=(e,index)=>{
  //   setProjectdata({
  //     ...Projectdata,
  //     [name]:value
  //   })
  // }

  // const handleMemberChange=(selectedUserId,index)=>{
  //   const selectedUser = authorsTableData.find(user => user.id === selectedUserId);
  //   setProjectdata((prevProjectdata) => {
  //     const updatedMembers = [...prevProjectdata.members];
  //     updatedMembers[index] = {
  //       id: selectedUser.id,
  //       name: `${selectedUser.firstname} ${selectedUser.lastname}`,
  //     };
  //     return({
  //       ...Projectdata,
  //       members:updatedMembers
  //     })
  //   })
  // console.log(Projectdata.members[0].id); // Assurez-vous que la valeur est correcte ici
  
  // }

 
  return (

  <div className="mt-12 mb-8 flex flex-col gap-12">
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
                    Create New Project
                    </Typography>
                  </div>
                </CardHeader>

                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                  <form className="mx-auto max-w-xl ">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <Typography variant="h6" color="blue-gray" className="mb-3">
                        Name
                      </Typography>
                      <Input
                        name="name"
                        value={Projectdata.name}
                        onChange={handlechanges}
                        size="sm"
                        placeholder="Project Name"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                    <Typography variant="h6" color="blue-gray" className="mb-3">
                      Start Date
                    </Typography>
                    <Input
                      name="startdate"
                      value={Projectdata.startdate}
                      onChange={handlechanges}
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
                        name="enddate"
                        value={Projectdata.enddate}
                        onChange={handlechanges}
                        size="md"
                        type="date"
                        placeholder="Date"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <Typography variant="h6" color="blue-gray" className="mb-3">
                        member 1
                      </Typography>
                      <Select 
                        name="member1"
                        size="md" 
                        // value={Projectdata.members[0].firstname}
                        // onChange={(e) => handlechangeselect(e, 0)}
                        >
                        { members.map(user => 
                          <Option key={user} value={user}>{user}</Option>)}
                      </Select>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <Typography variant="h6" color="blue-gray" className="mb-3">
                      member 2
                      </Typography>
                       {/* <Select 
                        name="member2"
                        size="md" 
                        // value={Projectdata.members[1].name}
                        // onChange={(e) => handleMemberChange(e, 1)}
                        >
                        {members.map(user=>
                          <Option value={user}>{user}</Option>
                          )}
                      </Select> */}
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <Typography variant="h6" color="blue-gray" className="mb-3">
                      member 3
                      </Typography>
                      {/* <Select 
                        name="member3"
                        size="md" 
                        value={Projectdata.members[2].name}
                        onChange={(e) => handleMemberChange(e, 2)}
                        >
                        {authorsTableData.map(user=>
                          <Option value={user.id}>{user.firstname} {user.lastname}</Option>
                          )}
                      </Select> */}
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <Typography variant="h6" color="blue-gray" className="mb-3">
                      member 4
                      </Typography>
                      {/* <Select 
                        name="member3"
                        size="md" 
                        value={Projectdata.members[2].name}
                        onChange={(e) => handleMemberChange(e, 2)}
                        >
                        {authorsTableData.map(user=>
                          <Option value={user.id}>{user.firstname} {user.lastname}</Option>
                          )}
                      </Select> */}
                    </div>

                  </div>
                  <Typography variant="h6" color="blue-gray" className="mb-3 mt-6">
                       Description
                  </Typography>             
                  <Textarea 
                    name="description"
                    label="Project Description" 
                    value={Projectdata.description}
                    onChange={handlechanges}
                    /> 
                  <div class="col-span-6 sm:col-full ml-4 mt-4 mb-4">
                    <Button variant="gradient" color="black" >
                      Create Project
                    </Button>          
                  </div>
                </form>
                </CardBody>
              </div>
          </Card> 
    </div>

  </div>

      
  );
}

export default CreateProject;