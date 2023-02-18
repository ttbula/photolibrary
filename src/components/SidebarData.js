import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import * as CiIcons from 'react-icons/ci';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Early Days',
    path: '/earlydays',
    icon: <AiIcons.AiFillHeart />,
    cName: 'nav-text'
  },
  {
    title: 'Klamath Days',
    path: '/klamath',
    icon: <GiIcons.GiFarmTractor />,
    cName: 'nav-text'
  },
  {
    title: 'CrossCountry',
    path: '/crosscountry',
    icon: <AiIcons.AiFillCar />,
    cName: 'nav-text'
  },
  {
    title: 'Durham',
    path: '/durham',
    icon: <FaIcons.FaRegSadCry />,
    cName: 'nav-text'
  },
  {
    title: 'Marlborough',
    path: '/marlborough',
    icon: <CiIcons.CiBaseball />,
    cName: 'nav-text'
  },
  {
    title: 'Distance',
    path: '/distance',
    icon: <GiIcons.GiPathDistance />,
    cName: 'nav-text'
  },
  {
    title: 'Future',
    path: '/future',
    icon: <FaIcons.FaUmbrellaBeach />,
    cName: 'nav-text'
  }
];