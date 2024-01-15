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
  Alert,
} from "@material-tailwind/react";
import { CheckCircleIcon, ClockIcon,PencilSquareIcon,EyeIcon ,TrashIcon,MagnifyingGlassIcon  } from "@heroicons/react/24/solid";
import ProjectData from "@/data/project-data"
import { Link, useNavigate, useParams } from "react-router-dom";
import UsersTableData from "@/data/users-data"
import Loading from "@/layouts/loading";
import EditData from "@/api/EditData";

export function EditProject() {

  const navigate = useNavigate();
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);
  const { authorsTableData, dataLoaded } = UsersTableData();
  const {id}=useParams()  
  const {projectdata,loader}=ProjectData(id);
  const [editprojectdata,setEditprojectdata]=React.useState([])
  
  React.useEffect(() => {
    if (projectdata && !loader) {
      setEditprojectdata({
        name:projectdata.name,
        category:projectdata.category,
        status:projectdata.status,
        datestart:projectdata.datestart,
        dateend:projectdata.dateend,
        id1:projectdata.users[0].id,
        id2:projectdata.users[1].id,
        id3:projectdata.users[2].id,
        id4:projectdata.users[3].id,
        description:projectdata.description
      })
    }    
  }, [projectdata, loader]);

  const handlechanges=(e)=>{
    const {name,value}=e.target
    setEditprojectdata({
      ...editprojectdata,
      [name]:value
    })
  }
  const handlestatuschange=(e)=>{
    setEditprojectdata({
      ...editprojectdata,
      status:e
    })
  }
  const handlechangeselect=(value,index)=>{
    const x="id"+index
    setEditprojectdata({
      ...editprojectdata,
      [x]:value
    })
    console.log(editprojectdata)

  }

  const handleeditproject =async()=>{
    try{
      const project=await EditData(editprojectdata,id,'project')
      console.log('project updated successfully:', project)
      setError(null)
      setSuccess("project updated successfully")
      setTimeout(() => {
        navigate('/admin/projects/table');
      }, 2000);
    }
    catch(error){
      if (error.response && error.response.data && error.response.data.errors) {
        const errorMessages = Object.values(error.response.data.errors);
        setError(errorMessages[0]);
        console.log(errorMessages[0]);
      } else {
        console.error('Failed to update proect:', error);
      }
    }
}
  if(dataLoaded) return <Loading />
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
                Edit Project
              </Typography>
            </div>   
          </CardHeader>

          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <form className="mx-auto max-w-xl ">
              <div class="grid grid-cols-6 gap-6">
                {error && (
                  <div className="col-span-6 sm:col-full mt-4 mb-4">
                    <Alert variant="ghost" className="bg-red-500 bg-opacity-20 text-red-700">
                      <span>{error}</span>
                    </Alert>
                  </div>
                )}
                {success && (
                  <div className="col-span-6 sm:col-full mt-4 mb-4">
                    <Alert variant="ghost" className="bg-green-500 bg-opacity-20 text-green-700">
                      <span>{success}</span>
                    </Alert>
                  </div>
                )}
                <div class="col-span-6 sm:col-span-3">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Name
                  </Typography>
                  <Input
                    name="name"
                    value={editprojectdata.name}
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
                    value={editprojectdata.category}
                    onChange={handlechanges}
                    size="sm"
                    placeholder="Project Name"
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Status
                  </Typography>
                  <Select
                  name="status"
                  size="md" 
                  value={editprojectdata.status}
                  onChange={handlestatuschange}
                  >
                    <Option value="not started">Not Started</Option>
                    <Option value="in progress">In Progress</Option>
                    <Option value="pending">Pending</Option>
                    <Option value="completed">Completed</Option>
                  </Select>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Start Date
                  </Typography>
                  <Input
                    name="startdate"
                    value={editprojectdata.datestart}
                    onChange={handlechanges}
                    size="md"
                    type="date"
                    placeholder="Date"
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    End Date
                  </Typography>
                  <Input
                    name="enddate"
                    value={editprojectdata.dateend}
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
                    value={editprojectdata.id1}
                    onChange={e=>handlechangeselect(e,1)}
                    >
                    {authorsTableData
                    .map(user => 
                      <Option key={user.id} value={user.id}>{user.id} {user.firstname} {user.lastname}</Option>)}
                  </Select>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                  member 2
                  </Typography>
                  <Select 
                    name="member2"
                    size="md" 
                    value={editprojectdata.id2}
                    onChange={e=>handlechangeselect(e,2)}
                    >
                    {authorsTableData
                    .map(user => 
                      <Option key={user.id} value={user.id}>{user.id} {user.firstname} {user.lastname}</Option>)}
                  </Select>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                  member 3
                  </Typography>
                  <Select 
                    name="member3"
                    size="md" 
                    value={editprojectdata.id3}
                    onChange={e=>handlechangeselect(e,3)}
                    >
                    {authorsTableData
                    .map(user => 
                      <Option key={user.id} value={user.id}>{user.id} {user.firstname} {user.lastname}</Option>)}
                  </Select>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                  member 4
                  </Typography>
                  <Select 
                    name="member4"
                    size="md" 
                    value={editprojectdata.id4}
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
                value={editprojectdata.description}
                onChange={handlechanges}
                /> 

                <div class="col-span-6 sm:col-full ml-4 mt-4 mb-4">
                    <Button 
                      variant="gradient" 
                      color="black"
                      onClick={handleeditproject} >
                      Update Project
                    </Button>   
                </div>

              </form>
            </CardBody>
            </div>
          </Card> 
    </div>
  )
}