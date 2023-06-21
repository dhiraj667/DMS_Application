import React, { useState } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Avatar,
  Button,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import USERFORM from "../routes/admin/childerns/Users/usersForm";

const SideBar = (props) => {
  const [open, setOpen] = useState(false);
  const { items, items2, onSelectItem, onSelectItem1 } = props;

  const handleOpen = () => setOpen(!open);
  if (!sessionStorage.getItem("loginData")) return;
  const loginData = JSON.parse(sessionStorage.getItem("loginData"));
  // console.log(loginData.user);
  const role = loginData.user.role;
  const user = loginData.user;

  return (
    <>
      <USERFORM open={open} handleOpen={handleOpen} />
      <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800 h-[87vh] w-[15%] ">
        <div className="flex flex-col mx-2 my-6 ">
          {items !== undefined ? (
            <>
              {items.length !== 0 ? (
                <>
                  <nav id="">
                    <ul class="list-unstyled components mt-5 ml-2">
                      <h5 className="h5 text-white font-bold ml-2 uppercase">
                        {items[0].hasOwnProperty("docType")
                          ? "Document Types"
                          : "Departments"}
                      </h5>
                      <li className="mt-1 pt-0">
                        {/* <input type="checkbox" name="" value="All"/><span  className="text-white fw-bold h6 ml-2">ALL</span> */}
                        {items.map((item, index) => (
                          <div className="flex mt-1" key={item._id}>
                            <input
                              id={`radio`}
                              type="radio"
                              className="radio"
                              name="radio"
                              value={item.name || item}
                              //   checked={checked}
                              style={{ cursor: "pointer" }}
                              onChange={() => {
                                onSelectItem(
                                  item.hasOwnProperty("docType")
                                    ? item.docType
                                    : item.hasOwnProperty("departmentName")
                                    ? item.departmentName
                                    : item
                                );
                              }}
                            />
                            <label className="text-white fw-bold h6 mx-1.5 line-clamp-1">
                              {item.hasOwnProperty("docType")
                                ? item.docType
                                : item.hasOwnProperty("departmentName")
                                ? item.departmentName
                                : item}
                            </label>
                            {/* <a href="#">forget password</a> */}
                          </div>
                        ))}
                      </li>
                    </ul>
                  </nav>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
          {items2 !== undefined ? (
            <>
              {items2.length !== 0 ? (
                <>
                  <nav id="">
                    <ul class="list-unstyled components mt-5 ml-2">
                      <h5 className="h5 text-white font-bold ml-2 uppercase">
                        {items2[0].hasOwnProperty("docType")
                          ? "Document Types"
                          : "Departments"}
                      </h5>
                      <li className="mt-1 pt-0">
                        {/* <input type="checkbox" name="" value="All"/><span  className="text-white fw-bold h6 ml-2">ALL</span>, */}
                        {items2.map((item, index) => (
                          <div className="flex mt-1" key={item._id}>
                            <input
                              id={`radio`}
                              type="checkbox"
                              className="radio"
                              name="radio"
                              value={item.name}
                              //   checked={checked}
                              style={{ cursor: "pointer" }}
                              onChange={() => {
                                onSelectItem1(
                                  item.hasOwnProperty("docType")
                                    ? item.docType
                                    : item.departmentName
                                );
                              }}
                            />
                            <label className="text-white fw-bold h6 mx-1.5 line-clamp-1">
                              {item.hasOwnProperty("docType")
                                ? item.docType
                                : item.departmentName}
                            </label>
                            {/* <a href="#">forget password</a> */}
                          </div>
                        ))}
                      </li>
                    </ul>
                  </nav>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="flex justify-end">
          <Popover placement="right">
            <PopoverHandler>
              <Button
                style={{ backgroundColor: "transparent" }}
                className="inline-flex p-3 hover:text-gray-400 justify-center border-gray-700 h-15 w-full border-t hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 px-2"
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="ml-2" x-show="menu">
                  Settings
                </span>
              </Button>
            </PopoverHandler>
            {/* <PopoverContent className="w-60 p-2">
              <div className="flex items-center gap-4 border-b border-blue-gray-50 pb-4 mb-4 p-2">
                <Avatar
                  src="https://media.licdn.com/dms/image/D4D03AQE637KOOeM_Dg/profile-displayphoto-shrink_800_800/0/1669046380943?e=2147483647&v=beta&t=E6yZnlNrOJcVIMamXtfvIVUEUG2YAYDgNo3ImlSz6FA"
                  alt="candice wu"
                />
                <div>
                  <Typography variant="h6" color="blue-gray">
                    {`${user.firstName} ${user.lastName}`}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    {role}
                  </Typography>
                </div>
              </div>
              <List
                className="p-0"
                onClick={() => {
                  handleOpen();
                }}
              >
                <Link to={`/${user._id}`} className="text-initial">
                  <ListItem>
                    <Link to={`${user._id}`}>
                      <h4 className="bold">Edit Account</h4>
                    </Link>
                  </ListItem>
                </Link>
              </List>
            </PopoverContent> */}
          </Popover>
        </div>
      </div>
    </>
  );
};

export default SideBar;
