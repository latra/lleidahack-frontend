import React from "react";
import { useState } from "react";

import MetaTest from "src/components/others/MetaTest";
import {
  getAllUsers,
  getUserById,
  getUserByEmail,
  getUserByNickname,
  getUserByPhone,
  getUserByCode,
} from "src/services/UserService";
import {
  signupHacker,
  getAllHackers,
  getHackerById,
  updateHacker,
  banHackerById,
  unbanHackerById,
  deleteHacker,
  getHackerEvents,
  getHackerGroups,
} from "src/services/HackerService";
import {
  getAllHackerGroups,
  getHackerGroupById,
  updateHackerGroup,
  deleteHackerGroup,
  addHackerGroup,
  getHackerGroupMembers,
  addHackerToGroup,
  removeHackerFromGroup,
  addHackerToGroupByCode,
} from "src/services/HackerGroupService";
import {
  signupLleidaHacker,
  getAllLleidaHackers,
  getLleidaHackerById,
  updateLleidaHacker,
  deleteLleidaHacker,
  acceptLleidaHacker,
  rejectLleidaHacker,
  activateLleidaHacker,
  deactivateLleidaHacker,
} from "src/services/LleidaHackerService";
import {
  getAllLleidaHackerGroups,
  getLleidaHackerGroupById,
  deleteLleidaHackerGroup,
  addLleidaHackerGroup,
  getLleidaHackerGroupMembers,
  addLleidaHackerToGroup,
  removeLleidaHackerFromGroup,
  setLleidaHackerGroupLeader,
} from "src/services/LleidaHackerGroupService";
import {
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
  addCompany,
  getCompanyUsers,
  addUserToCompany,
  removeUserFromCompany,
  getCompanyEvents,
} from "src/services/CompanyService";
import {
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  createEvent,
  getEventIsHackerRegistered,
  getEventIsHackerAccepted,
  getEventMeals,
  getEventParticipants,
  getEventSponsors,
  getEventGroups,
  addEventGroup,
  removeEventGroup,
  addEventSponsor,
  removeEventSponsor,
  getHackeps,
  getEventHackerGroup,
} from "src/services/EventService";
import {
  addDailyhack,
  updateDailyhack,
  getDailyhackById,
  deleteDailyhack,
  getDailyhacks,
  registerHackerToEvent,
  unregisterHackerToEvent,
  participateHackerToEvent,
  unparticipateHackerToEvent,
  acceptHackerToEvent,
  acceptGroupToEvent,
  rejectHackerToEvent,
  rejectGroupToEvent,
  getPendingHackers,
  getPendingHackersGruped,
  getRejectedHackers,
  getEventStatus,
  hackerEatsFoodFrom,
} from "src/services/EventManagementService";
import {
  login,
  resetPassword,
  confirmResetPassword,
  refreshToken,
  me,
  verify,
  resendVerification,
  checkToken,
} from "src/services/AuthenticationService";
import {
  signupCompanyUser,
  getAllCompanyUsers,
  getCompanyUserById,
  updateCompanyUser,
  deleteCompanyUser,
} from "src/services/CompanyUserService";
import {
  getMeals,
  getMealById,
  updateMeal,
  deleteMeal,
  createMeal,
} from "src/services/MealService";

const Testing = () => {
  const [autoTest, setAutoTest] = useState(false);

  const [user] = useState({
    name: "string",
    nickname: "elver",
    password: "12345678a",
    birthdate: "2003-06-20",
    food_restrictions: "NO",
    email: "joelros2000@gmail.com",
    telephone: "693931391",
    address: "casa",
    shirt_size: "L",
    image: "https://i.ytimg.com/vi/viszafbV3lg/hqdefault.jpg",
    is_image_url: true,
    code: "",
  });

  const [hacker, setHacker] = useState({
    name: "aaaaaaaa",
    nickname: "elver",
    password: "12345678a",
    birthdate: "2003-06-20",
    food_restrictions: "NO",
    email: "joelros2000@gmail.com",
    telephone: "693931391",
    address: "casa",
    shirt_size: "L",
    image: "https://i.ytimg.com/vi/viszafbV3lg/hqdefault.jpg",
    is_image_url: true,
    banned: true,
    github: "string",
    linkedin: "string",
    id: 29,
  });

  const [grup] = useState({
    name: "string",
    description: "string",
    id: 2,
    members: [
      {
        name: "aaaaaaaa",
        nickname: "elver",
        password: "12345678a",
        birthdate: "2003-06-20",
        food_restrictions: "NO",
        email: "joelros2000@gmail.com",
        telephone: "693931391",
        address: "casa",
        shirt_size: "L",
        image: "https://i.ytimg.com/vi/viszafbV3lg/hqdefault.jpg",
        is_image_url: true,
        banned: true,
        github: "string",
        linkedin: "string",
        id: 29,
      },
    ],
    leader: 0,
  });

  const [lleidahacker] = useState({
    name: "joel",
    id: 6,
    nickname: "elver",
    password: "12345678a",
    birthdate: "2003-06-20",
    food_restrictions: "NO",
    email: "joelros2001@gmail.com",
    telephone: "693931391",
    address: "casa",
    shirt_size: "L",
    image: "https://i.ytimg.com/vi/viszafbV3lg/hqdefault.jpg",
    is_image_url: true,
    role: "string",
    nif: "48255629L",
    student: true,
    active: true,
    github: "a",
  });

  const [event] = useState({
    name: "string",
    id: 1,
    description: "string",
    start_date: "2023-08-08",
    end_date: "2023-08-08",
    location: "string",
    archived: true,
    price: 0,
    max_participants: 0,
    max_sponsors: 0,
  });

  const [company] = useState({
    name: "string",
    description: "string",
    website: "string",
    logo: "string",
    address: "string",
    telephone: "string",
    companyId: 1,
    users: [
      {
        name: "string",
        nickname: "string",
        password: "string",
        birthdate: "2023-08-08",
        food_restrictions: "string",
        email: "joelros2003@gmail.com",
        telephone: "string",
        address: "string",
        shirt_size: "string",
        image: "https://i.ytimg.com/vi/viszafbV3lg/hqdefault.jpg",
        is_image_url: true,
        banned: true,
        role: "string",
        nif: "48255629L",
        student: true,
        active: true,
        github: "string",
        linkedin: "string",
        company_id: 1,
      },
    ],
  });

  const [companyUser] = useState({
    name: "string",
    nickname: "string",
    password: "string",
    birthdate: "2023-08-08",
    food_restrictions: "string",
    email: "joelros2003@gmail.com",
    telephone: "string",
    address: "string",
    shirt_size: "string",
    image: "https://i.ytimg.com/vi/viszafbV3lg/hqdefault.jpg",
    is_image_url: true,
    role: "string",
    company_id: 1,
    id: 1,
  });

  const [meal] = useState({
    name: "macarrons",
    description: "macarrons (amb lleteta",
    event_id: 1,
    id: 1,
  });

  const url = "https://google.es";

  const Fuctions = [
    {
      name: "user",
      left: 0,
      comentaris: "funcionen sense bearer",
      body: [
        {
          body: getAllUsers,
          params: [],
          status: false,
        },
        {
          body: getUserById,
          params: [user.id],
          status: false,
        },
        {
          body: getUserByCode,
          params: [user.code],
          status: false,
        },
      ],
    },
    {
      name: "hacker",
      left: 0,
      comentaris: "funcionen sense bearer",
      body: [
        {
          body: signupHacker,
          params: [hacker],
          status: false,
        },
        {
          body: getAllHackers,
          params: [],
          status: true,
        },
        {
          body: getHackerById,
          params: [74],
          status: true,
        },
        {
          body: updateHacker,
          params: [hacker],
          status: false,
        },
        {
          body: banHackerById,
          params: [74],
          status: false,
        },
        {
          body: unbanHackerById,
          params: [74],
          status: false,
        },
        {
          body: deleteHacker,
          params: [hacker.id],
          status: false,
        },
        {
          body: getHackerEvents,
          params: [hacker.id],
          status: false,
        },
        {
          body: getHackerGroups,
          params: [hacker.id],
          status: false,
        },
      ],
    },
    {
      name: "hackerGroup",
      left: 0,
      comentaris: "funcionen sense bearer",
      body: [
        {
          body: getAllHackerGroups,
          params: [],
          status: true,
        },
        {
          body: getHackerGroupById,
          params: [grup.id],
          status: true,
        },
        {
          body: updateHackerGroup,
          params: [grup],
          status: false,
        },
        {
          body: deleteHackerGroup,
          params: [grup.id],
          status: false,
        },
        {
          body: addHackerGroup,
          params: [grup],
          status: false,
        },
        {
          body: getHackerGroupMembers,
          params: [grup.id],
          status: true,
        },
        {
          body: addHackerToGroup,
          params: [hacker.id, grup.id],
          status: false,
        },
        {
          body: removeHackerFromGroup,
          params: [hacker.id, grup.id],
          status: false,
        },
        {
          body: addHackerToGroupByCode,
          params: [hacker.id, grup.id],
          status: false,
        },
      ],
    },
    {
      name: "lleidaHacker",
      left: 0,
      comentaris: "funcionen sense bearer",
      body: [
        {
          body: signupLleidaHacker,
          params: [lleidahacker],
          status: false,
        },
        {
          body: getAllLleidaHackers,
          params: [],
          status: false,
        },
        {
          body: getLleidaHackerById,
          params: [lleidahacker.id],
          status: false,
        },
        {
          body: updateLleidaHacker,
          params: [lleidahacker],
          status: false,
        },
        {
          body: deleteLleidaHacker,
          params: [lleidahacker.id],
          status: false,
        },
        {
          body: acceptLleidaHacker,
          params: [lleidahacker.id],
          status: false,
        },
        {
          body: rejectLleidaHacker,
          params: [lleidahacker.id],
          status: false,
        },
        {
          body: activateLleidaHacker,
          params: [lleidahacker.id],
          status: false,
        },
        {
          body: deactivateLleidaHacker,
          params: [lleidahacker.id],
          status: false,
        },
      ],
    },
    {
      name: "lleidahacker group",
      left: 0,
      comentaris: "funcionen sense bearer",
      body: [
        {
          body: getAllLleidaHackerGroups,
          params: [],
          status: false,
        },
        {
          body: getLleidaHackerGroupById,
          params: [grup.id],
          status: false,
        },
        {
          body: deleteLleidaHackerGroup,
          params: [7],
          status: true,
        },
        {
          body: addLleidaHackerGroup,
          params: [grup],
          status: true,
        },
        {
          body: getLleidaHackerGroupMembers,
          params: [4],
          status: true,
        },
        {
          body: addLleidaHackerToGroup,
          params: [lleidahacker.id, 6],
          status: false,
        },
        {
          body: removeLleidaHackerFromGroup,
          params: [lleidahacker.id, grup.id],
          status: false,
        },
        {
          body: setLleidaHackerGroupLeader,
          params: [lleidahacker.id, grup.id],
          status: false,
        },
      ],
    },
    {
      name: "company",
      left: 0,
      comentaris: "",
      body: [
        {
          body: getAllCompanies,
          params: [],
          status: true,
        },
        {
          body: getCompanyById,
          params: [1],
          status: false,
        },
        {
          body: updateCompany,
          params: [companyUser],
          status: false,
        },
        {
          body: deleteCompany,
          params: [companyUser.id],
          status: false,
        },
        {
          body: addCompany,
          params: [company],
          status: false,
        },
        {
          body: getCompanyUsers,
          params: [company.id],
          status: false,
        },
        {
          body: addUserToCompany,
          params: [companyUser, company.id],
          status: false,
        },
        {
          body: removeUserFromCompany,
          params: [companyUser.id, company.id],
          status: false,
        },
        {
          body: getCompanyEvents,
          params: [company.id],
          status: false,
        },
      ],
    },
    {
      name: "event",
      left: 0,
      comentaris: "",
      body: [
        {
          body: getEvents,
          params: [],
          status: true,
        },
        {
          body: getEventById,
          params: [event.id],
          status: true,
        },
        {
          body: updateEvent,
          params: [event],
          status: false,
        },
        {
          body: deleteEvent,
          params: [event.id],
          status: false,
        },
        {
          body: createEvent,
          params: [event],
          status: false,
        },
        {
          body: getEventIsHackerRegistered,
          params: [event.id, hacker.id],
          status: false,
        },
        {
          body: getEventIsHackerAccepted,
          params: [event.id, hacker.id],
          status: false,
        },
        {
          body: getEventMeals,
          params: [event.id, company.id],
          status: false,
        },
        {
          body: getEventParticipants,
          params: [event.id],
          status: false,
        },
        {
          body: getEventSponsors,
          params: [event.id],
          status: false,
        },
        {
          body: getEventGroups,
          params: [event.id],
          status: false,
        },
        {
          body: addEventGroup,
          params: [event.id, grup.id],
          status: false,
        },
        {
          body: removeEventGroup,
          params: [event.id, grup.id],
          status: false,
        },
        {
          body: addEventSponsor,
          params: [event.id, company.id],
          status: false,
        },
        {
          body: removeEventSponsor,
          params: [event.id, company.id],
          status: false,
        },
        {
          body: getHackeps,
          params: [],
          status: false,
        },
        {
          body: getEventHackerGroup,
          params: [event.id, hacker.id],
          status: false,
        },
      ],
    },
    {
      name: "event management",
      left: 0,
      comentaris: "",
      body: [
        {
          body: addDailyhack,
          params: [event.id, hacker.id, url],
          status: false,
        },
        {
          body: updateDailyhack,
          params: [event.id, hacker.id, url],
          status: false,
        },
        {
          body: getDailyhackById,
          params: [event.id, hacker.id],
          status: false,
        },
        {
          body: deleteDailyhack,
          params: [event.id, hacker.id],
          status: false,
        },
        {
          body: getDailyhacks,
          params: [event.id],
          status: false,
        },
        {
          body: registerHackerToEvent,
          params: [hacker.id, event.id],
          status: false,
        },
        {
          body: unregisterHackerToEvent,
          params: [hacker.id, event.id],
          status: false,
        },
        {
          body: participateHackerToEvent,
          params: [hacker.id, event.id],
          status: false,
        },
        {
          body: unparticipateHackerToEvent,
          params: [hacker.id, event.id],
          status: false,
        },
        {
          body: acceptHackerToEvent,
          params: [hacker.id, event.id],
          status: false,
        },
        {
          body: acceptGroupToEvent,
          params: [grup.id, event.id],
          status: false,
        },
        {
          body: rejectHackerToEvent,
          params: [hacker.id, event.id],
          status: false,
        },
        {
          body: rejectGroupToEvent,
          params: [grup.id, event.id],
          status: false,
        },
        {
          body: getPendingHackers,
          params: [event.id],
          status: false,
        },
        {
          body: getPendingHackersGruped,
          params: [event.id],
          status: false,
        },
        {
          body: getRejectedHackers,
          params: [event.id],
          status: false,
        },
        {
          body: getEventStatus,
          params: [event.id],
          status: false,
        },
        {
          body: hackerEatsFoodFrom,
          params: [hacker.id, 1, event.id],
          status: false,
        },
      ],
    },
    {
      name: "auth",
      left: 0,
      comentaris: "",
      body: [
        {
          body: login,
          params: [hacker],
          status: true,
        },
        {
          body: resetPassword,
          params: ["joelros2003@gmail.com"],
          status: true,
        },
        {
          body: confirmResetPassword,
          params: ["", "123456789aA"], //token
          status: true,
        },
        {
          body: refreshToken,
          params: [],
          status: true,
        },
        {
          body: me,
          params: [],
          status: true,
        },
        {
          body: verify,
          params: [""], //token
          status: true,
        },
        {
          body: resendVerification,
          params: [hacker.email],
          status: true,
        },
        {
          body: checkToken,
          params: [],
          status: true,
        },
      ],
    },
    {
      name: "company user",
      left: 0,
      comentaris: "",
      body: [
        {
          body: signupCompanyUser,
          params: [companyUser],
          status: false,
        },
        {
          body: getAllCompanyUsers,
          params: [],
          status: false,
        },
        {
          body: getCompanyUserById,
          params: [companyUser.id],
          status: false,
        },
        {
          body: updateCompanyUser,
          params: [companyUser],
          status: false,
        },
        {
          body: deleteCompanyUser,
          params: [companyUser.id],
          status: false,
        },
      ],
    },
    {
      name: "meal",
      left: 0,
      comentaris: "",
      body: [
        {
          body: getMeals,
          params: [event.id],
          status: false,
        },
        {
          body: getMealById,
          params: [],
          status: false,
        },
        {
          body: updateMeal,
          params: [event, meal],
          status: false,
        },
        {
          body: deleteMeal,
          params: [event, meal.id],
          status: false,
        },
        {
          body: createMeal,
          params: [meal],
          status: false,
        },
      ],
    },
  ];

  const redoUser = () => {
    setHacker((prevObj) => ({
      ...prevObj,
      nickname: `${Math.random()}`,
      password: `${Math.random()}`,
      email: `provausuari@${Math.random()}`,
      id: 0,
    }));
  };
  const changeID = () => {
    setHacker((prevObj) => ({
      ...prevObj,
      id: parseInt(prompt("id:")),
    }));
  };
  return (
    <div>
      <button onClick={() => setAutoTest(!autoTest)}>
        testingmode: {autoTest ? "auto" : "manual"}
      </button>
      <h1>User rn</h1>
      <p>
        id: {hacker.id}
        <br />
        nick: {hacker.nickname}
        <br />
        pass: {hacker.password}
        <br />
        email: {hacker.email}
      </p>
      <button onClick={() => redoUser()}>redoUser</button>
      <button onClick={() => changeID()}>changeId</button>
      <MetaTest functionsList={Fuctions} autotest={autoTest} />
    </div>
  );
};

export default Testing;
