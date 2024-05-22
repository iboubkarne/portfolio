// import images
import Hero_person from "./assets/images/Hero/portimage.jpg";

import figma from "./assets/images/Skills/figma.png";
import laravel from "./assets/images/Skills/laravel.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import tailwind from "./assets/images/Skills/tailwind.png"
import HTML5 from "./assets/images/Skills/pngwing.com (4).png"
import CSS from "./assets/images/Skills/pngwing.com (5).png"
import Bootstrap from "./assets/images/Skills/pngwing.com (8).png"
import JavaScript from "./assets/images/Skills/pngwing.com (6).png"
import C from "./assets/images/Skills/pngwing.com (12).png"
import PHP from "./assets/images/Skills/pngwing.com (11).png"
import MYSQL from "./assets/images/Skills/pngwing.com (7).png"
import Mongodb from "./assets/images/Skills/pngwing.com (3).png"
import GITHUB from "./assets/images/Skills/pngwing.com (9).png"
import GITLAB from "./assets/images/Skills/pngwing.com (10).png"
import WordPress from "./assets/images/Skills/pngwing.com (13).png"
import json from "./assets/images/Skills/pngwing.com (14).png"





import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "HAITAM",
    LastName: "IBOUBKARNE",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "15+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
     
    
      {
        name: "c++",
        para: "",
        logo: C,
      },
      {
        name: "Python",
        para: "",
        logo: python,
      },
     
      
      {
        name: "HTML5",
        para: "",
        logo: HTML5,
      },
      {
        name: "CSS",
        para: "",
        logo: CSS,
      },
      
      {
        name: "Bootstrap",
        para: "",
        logo: Bootstrap,
      },
      {
        name: "tailwind",
        para: "",
        logo: tailwind,
      },
      {
        name: "JavaScript",
        para: "",
        logo: JavaScript,
      },  {
        name: "Node js",
        para: "",
        logo: nodejs,
      },
     
      {
        name: "React js",
        para: "",
        logo: reactjs,
      },
      // {
      //   name: " json",
      //   para: "",
      //   logo: json,
      // },
      {
        name: "Figma",
        para: "",
        logo: figma,
      },
      {
        name: "WordPress",
        para: "",
        logo: WordPress,
      },
     
      {
        name: "PHP",
        para: "",
        logo: PHP,
      },
      {
        name: "LARAVEL",
        para: "",
        logo: laravel,
      },
      {
        name: "MYSQL",
        para: "",
        logo: MYSQL,
      },
      {
        name: "Mongodb",
        para: "",
        logo: Mongodb,
      },
      {
        name: "github",
        para: "",
        logo: GITHUB,
      },
      {
        name: "gitlab",
        para: "",
        logo: GITLAB,
      },

    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "haitamiboubkarne@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+212 682 977 296",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "haitam-ibou",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
