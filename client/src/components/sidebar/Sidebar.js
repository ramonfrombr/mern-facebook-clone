import React from "react";

import ForumIcon from "@material-ui/icons/Forum";

import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

import MessageIcon from "@mui/icons-material/Message";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PeopleIcon from "@mui/icons-material/People";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
//import PsychologyIcon from '@material-ui/icons/Psychology';

import { Us, Br, Es, Fr, It, De, Cn, Jp } from "react-flags-select";

const Sidebar = () => {
  return (
    <div className="sticky top-12 h-[calc(100vh+50px)] flex-[3] overflow-y-scroll">
      <div className="p-5">
        <ul className="m-0 w-full list-none p-0">
          <li className="flex cursor-pointer items-center py-3 px-5 hover:bg-white [&>svg]:mr-3">
            <ForumIcon /> Feed
          </li>
          <li className="flex cursor-pointer items-center py-3 px-5 hover:bg-white [&>svg]:mr-3">
            <MessageIcon /> Chats
          </li>
          <li className="flex cursor-pointer items-center py-3 px-5 hover:bg-white [&>svg]:mr-3">
            <PlayCircleIcon /> Videos
          </li>
          <li className="flex cursor-pointer items-center py-3 px-5 hover:bg-white [&>svg]:mr-3">
            <PeopleIcon /> Groups
          </li>
          <li className="flex cursor-pointer items-center py-3 px-5 hover:bg-white [&>svg]:mr-3">
            <BookmarkIcon /> Bookmarks
          </li>
          <li className="flex cursor-pointer items-center py-3 px-5 hover:bg-white [&>svg]:mr-3">
            <HelpOutlineIcon /> Questions
          </li>
          <li className="flex cursor-pointer items-center py-3 px-5 hover:bg-white [&>svg]:mr-3">
            <WorkOutlineIcon /> Jobs
          </li>
          <li className="flex cursor-pointer items-center py-3 px-5 hover:bg-white [&>svg]:mr-3">
            <EventIcon /> Events
          </li>
          <li className="flex cursor-pointer items-center py-3 px-5 hover:bg-white [&>svg]:mr-3">
            <SchoolIcon /> Courses
          </li>
        </ul>

        <button className="w-36 cursor-pointer rounded-md border-0 bg-gray-200 p-3 font-medium">
          Exibir Mais
        </button>

        <hr className="my-5" />

        <ul className="m-0 w-full list-none p-0">
          <li className="mb-4 flex items-center">
            <img
              className="mr-2 h-8 w-8 rounded-full object-cover"
              src="/assets/pessoa/2.jpeg"
            />
            <span>Jane Doe</span>
          </li>

          <li className="mb-4 flex items-center">
            <img
              className="mr-2 h-8 w-8 rounded-full object-cover"
              src="/assets/pessoa/2.jpeg"
            />
            <span>Jane Doe</span>
          </li>

          <li className="mb-4 flex items-center">
            <img
              className="mr-2 h-8 w-8 rounded-full object-cover"
              src="/assets/pessoa/2.jpeg"
            />
            <span>Jane Doe</span>
          </li>

          <li className="mb-4 flex items-center">
            <img
              className="mr-2 h-8 w-8 rounded-full object-cover"
              src="/assets/pessoa/2.jpeg"
            />
            <span>Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
