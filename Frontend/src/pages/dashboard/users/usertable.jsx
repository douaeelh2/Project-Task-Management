import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  IconButton,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { EyeIcon, TrashIcon, MagnifyingGlassIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import AuthorsTableData from "@/data/authors-table-data";
import Loading from "@/layouts/loading";

export function UserTable() {
  const [filter,setfilter]=React.useState('');

  const { authorsTableData, dataLoaded } = AuthorsTableData();
  
  if (!dataLoaded) {
    return <Loading />;
  }

  var usersnewdata=authorsTableData.filter(user=>{
  return (user.firstname.toLowerCase().includes(filter.toLowerCase())  ||
    user.lastname.toLowerCase().includes(filter.toLowerCase()) )
  })
  console.log(usersnewdata)
    return (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <div class="flex justify-end mr-5">
          <Link to="../users/create" class="ml-2">
              <Button variant="gradient" color="black">
                 + New User 
              </Button>
          </Link>
      </div>
        <Card>
        <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <Typography variant="h5" color="blue-gray" className="mb-1">
                Users Table
              </Typography>
            </div>
            <div className="flex items-center justify-between mr-5 gap-4">
              <Input 
                  label="Search By Name" 
                  value={filter}
                  onChange={e=>setfilter(e.target.value)}
                      />
              <Link to=".">
                  <IconButton variant="gradient" color="black">
                    <MagnifyingGlassIcon className="h-5 w-5 text-white" />
                  </IconButton>
              </Link>
            </div>
            
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["user","email", "phone number", "manage"].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
              {usersnewdata?.map((user, key) => {
              const className = `py-3 px-5 ${
              key === authorsTableData.length - 1 ? '' : 'border-b border-blue-gray-50'
              }`;
                    return (
                      <tr key={key}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar src={user.img} alt={`${user.firstname} ${user.lastname}`} size="sm" variant="rounded" />
                            <div>
                              <Typography variant="small" color="blue-gray" className="font-semibold">
                                {`${user.firstname} ${user.lastname}`}
                              </Typography>
                              <Typography className="text-xs font-normal text-blue-gray-500">{user.designation}</Typography>
                            </div>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {user.email}
                          </Typography>
                          
                        </td>
                        
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {user.phone}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Menu placement="bottom">
                            <MenuHandler>
                              <IconButton variant="text" color="blue-gray">
                                <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
                              </IconButton>
                            </MenuHandler>
                            <MenuList className="w-max border-0">
                            <Link to={`../users/show/${user.id}`}>
                              <MenuItem className="flex items-center gap-3">
                                <EyeIcon className="h-5 w-5 text-blue-gray-500" />
                                <div>
                                  <Typography
                                    variant="small"
                                    color="text-blue-gray-500"
                                    className="font-normal"
                                  >
                                    Show
                                  </Typography>
                                </div>
                              </MenuItem>
                            </Link>
                              <Link to=".">
                              <MenuItem className="flex items-center gap-3">
                                  <TrashIcon className="h-5 w-5 text-blue-gray-500" />
                                <div>
                                  <Typography
                                    variant="small"
                                    color="text-blue-gray-500"
                                    className="font-normal"
                                  >
                                    Delete
                                  </Typography>
                                </div>
                              </MenuItem>
                              </Link>
                            </MenuList>
                          </Menu>
                      </td>
                       
                      </tr>
                    );
                  }
                )}
              </tbody>
              </table>
            
          </CardBody>
        </Card>
        
      </div>
    );
  }
  
  export default UserTable;