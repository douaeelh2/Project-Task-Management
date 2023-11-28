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
  Button
  } from "@material-tailwind/react";
  import {PencilSquareIcon,EyeIcon ,TrashIcon,MagnifyingGlassIcon,Cog6ToothIcon  } from "@heroicons/react/24/solid";
  import { authorsTableData } from "@/data";

  
  import { Link } from "react-router-dom";

  export function UserTable() {
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
            <Input label="Search By Name"/>
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
                  {["author","project","task","email", "employed", "manage"].map((el) => (
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
                {authorsTableData.map(
                  ({ img, name , project , task, email, job, date }, key) => {
                    const className = `py-3 px-5 ${
                      key === authorsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;
  
                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar src={img} alt={name} size="sm" variant="rounded" />
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {name}
                              </Typography>
                              <Typography className="text-xs font-normal text-blue-gray-500">
                                {job}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-bold text-blue-gray-600">
                            {project}
                          </Typography>
                          
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {task}
                          </Typography>
                          
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {email}
                          </Typography>
                          
                        </td>
                        
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {date}
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
                            <Link to="../users/show">
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
  