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
import axios from "axios";
import AuthorsTableData from "@/data/authors-table-data";
import UsersTableData from "@/data/users-data";
import Loading from "@/layouts/loading";
import CreateData from "@/api/CreateData";
import { Link } from "react-router-dom";

export function CreateProject() {

  const { authorsTableData, dataLoaded } = UsersTableData();
  const [Projectdata,setProjectdata]=React.useState({
    name:'',
    category:'',
    datestart:'',
    dateend:'',
    id1:'',
    id2:'',
    id3:'',
    id4:'',
    description:''
  })
  
  const handlechanges=(e)=>{
    const {name,value}=e.target
    setProjectdata({
      ...Projectdata,
      [name]:value
    })
  }

  const handlechangeselect=(value,index)=>{
    const x="id"+index
    setProjectdata({
      ...Projectdata,
      [x]:value
    })
  }

  const handlecreateproject =async()=>{
      try{
        const project=await CreateData(Projectdata,'project')
        console.log('project created successfully:', project)
      }
      catch(error){
        if (error.response && error.response.data && error.response.data.errors) {
          const errorMessages = Object.values(error.response.data.errors);
          setError(errorMessages[0]);
          console.log(errorMessages[0]);
        } else {
          if (!Projectdata.datestart) {
            console.error('Error: Datestart is null');
          }
          console.error('Failed to create project:', error);
        }
      }
  }
  
 if(dataLoaded) return <Loading/>
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
                        Category
                      </Typography>
                      <Input
                        name="category"
                        value={Projectdata.category}
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
                      name="datestart"
                      value={Projectdata.datestart}
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
                        name="dateend"
                        value={Projectdata.dateend}
                        onChange={handlechanges}
                        size="md"
                        type="date"
                        placeholder="Date"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <Typography variant="h6" color="blue-gray" className="mb-3">
                      Choose Member 1
                      </Typography>
                      <Select 
                        name="member1"
                        size="md" 
                        value={Projectdata.id1}
                        onChange={e=>handlechangeselect(e,1)}
                        >
                        {authorsTableData
                        .map(user => 
                          <Option key={user.id} value={user.id}>{user.id} {user.firstname} {user.lastname}</Option>)}
                      </Select>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <Typography variant="h6" color="blue-gray" className="mb-3">
                      Choose Member 2
                      </Typography>
                      <Select 
                        name="member2"
                        size="md" 
                        value={Projectdata.id2}
                        onChange={e=>handlechangeselect(e,2)}
                        >
                        {authorsTableData
                        .map(user => 
                          <Option key={user.id} value={user.id}>{user.id} {user.firstname} {user.lastname}</Option>)}
                      </Select>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <Typography variant="h6" color="blue-gray" className="mb-3">
                      Choose Member 3
                      </Typography>
                      <Select 
                        name="member3"
                        size="md" 
                        value={Projectdata.id3}
                        onChange={e=>handlechangeselect(e,3)}
                        >
                        {authorsTableData
                        .map(user => 
                          <Option key={user.id} value={user.id}>{user.id} {user.firstname} {user.lastname}</Option>)}
                      </Select>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <Typography variant="h6" color="blue-gray" className="mb-3">
                      Choose Member 4
                      </Typography>
                      <Select 
                        name="member4"
                        size="md" 
                        value={Projectdata.id4}
                        onChange={e=>handlechangeselect(e,4)}
                        >
                        {authorsTableData
                        .map(user => 
                          <Option key={user.id} value={user.id}>{user.id} {user.firstname} {user.lastname}</Option>)}
                      </Select>
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
                    <Link to="../projects/table">
                      <Button 
                        variant="gradient" 
                        color="black"
                        onClick={handlecreateproject} >
                        Create Project
                      </Button>  
                      </Link>        
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