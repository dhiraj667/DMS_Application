import React from "react";
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
const SideBar = (props) => {
  const { items, onSelectItem } = props;
  console.log(items);
  return (
    <>
      <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800  w-[15%] ">
        <div className="flex flex-col mx-2 my-6 ">
          {items !== undefined ? (
            <>
              <nav id="">
                <ul class="list-unstyled components mt-5 ml-2">
                  <h5 className="h5 text-white font-bold ml-2 uppercase">
                    Department
                  </h5>
                  <li className="mt-1 pt-0">
                    {items.map((item, index) => (
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
                            onSelectItem(item.departmentName);
                          }}
                        />
                        <label className="text-white fw-bold h6 mx-1.5 line-clamp-1">
                          {item.departmentName}
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
            <PopoverContent className="w-60 p-2">
              <div className="flex items-center gap-4 border-b border-blue-gray-50 pb-4 mb-4 p-2">
                <Avatar
                  src="https://media.licdn.com/dms/image/D4D03AQE637KOOeM_Dg/profile-displayphoto-shrink_800_800/0/1669046380943?e=2147483647&v=beta&t=E6yZnlNrOJcVIMamXtfvIVUEUG2YAYDgNo3ImlSz6FA"
                  alt="candice wu"
                />
                <div>
                  <Typography variant="h6" color="blue-gray">
                    Sadanand Fulari
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    Admin
                  </Typography>
                </div>
              </div>
              <List className="p-0">
                <a href="#" className="text-initial">
                  <ListItem>
                    {/* <ListItemPrefix></ListItemPrefix> */}
                    {/* ABC Construction */}{" "}
                    <h4 className="bold">Edit Account</h4>
                  </ListItem>
                </a>
                <div className="">
                  <ListItem>
                    <ListItemPrefix>
                      {/* <SolidIcons.EnvelopeIcon className="w-5 h-5" /> */}
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
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </ListItemPrefix>
                    <Typography variant="h6" color="blue-gray">
                      <h3 className="ml-2">Logout</h3>
                    </Typography>
                  </ListItem>
                </div>
              </List>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      {/* </aside> */}
    </>
  );
};

export default SideBar;
