import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Avatar,
  Tooltip,
  Input,
  Chip,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,

} from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import {
  projectsTableData,
} from "@/data";
import { CheckCircleIcon, ClockIcon,PencilSquareIcon,EyeIcon ,TrashIcon,MagnifyingGlassIcon,Cog6ToothIcon  } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function ProjectTable() {
  return (

      <div className="mt-12 mb-8 flex flex-col gap-12">
        <div class="flex justify-end mr-5">
          <Link to="../projects/create" class="ml-2">
              <Button variant="gradient" color="black">
                 + New Project 
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
                Projects Table
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
                  {["Projects","Category", "Members", "Duration", "Status" , "Manage"].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-6 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-medium uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {projectsTableData.map(
                  ({project, category , members, duration, status , manage }, key) => {
                    const className = `py-4 px-5 ${
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={project}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {project}
                            </Typography>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography
                            variant="h4"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {category}
                          </Typography>
                        </td>
                        
                        <td className={className}>
                          {members.map(({ img, name }, key) => (
                            <Tooltip key={project} content={project}>
                              <Avatar
                                src={img}
                                alt={project}
                                size="xs"
                                variant="circular"
                                className={`cursor-pointer border-2 border-white ${
                                  key === 0 ? "" : "-ml-2.5"
                                }`}
                              />
                            </Tooltip>
                          ))}
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {duration}
                          </Typography>
                        </td>
                        <td className={className}>
                        <Chip
                          variant="gradient"
                          color={status ? "green" : "blue-gray"}
                          value={status ? "Completed" : "In Progress"}
                          className="py-0.5 px-2 text-[11px] font-medium w-fit"
                        />
                      </td>
                      <td className={className}>
                        
                          <Menu placement="bottom">
                            <MenuHandler>
                              <IconButton variant="text" color="blue-gray">
                                <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
                              </IconButton>
                            </MenuHandler>
                            <MenuList className="w-max border-0">
                                <Link to="../projects/show">
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

                                <Link to="../projects/edit">
                                <MenuItem className="flex items-center gap-3">
                                    <PencilSquareIcon className="h-5 w-5 text-blue-gray-500" />
                                    <div>
                                      <Typography
                                        variant="small"
                                        color="text-blue-gray-500"
                                        className="font-normal"
                                      >
                                        Edit
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

export default ProjectTable;
