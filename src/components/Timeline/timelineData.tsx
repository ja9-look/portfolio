import babyphoto from "../../assets/babyphoto.png";

interface TimelineItem {
  id: number;
  name: string;
  startDate: Date;
  description: string;
  location: string;
  imageSrc: string;
  professionalExperience: boolean;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    name: "Birth",
    startDate: new Date("1995"),
    description: "",
    location: "Hong Kong",
    imageSrc: babyphoto,
    professionalExperience: false,
  },
  {
    id: 2,
    name: "International School",
    startDate: new Date("1998"),
    description: "",
    location: "Hong Kong",
    imageSrc: "",
    professionalExperience: false,
  },
  {
    id: 3,
    name: "Boarding School",
    startDate: new Date("2006"),
    description: "",
    location: "Belfast, Northern Ireland",
    imageSrc: "",
    professionalExperience: false,
  },
  {
    id: 4,
    name: "Programme Assistant",
    startDate: new Date("2014"),
    description: "",
    location: "Vancouver, Canada",
    imageSrc: "",
    professionalExperience: true,
  },
  {
    id: 5,
    name: "University",
    startDate: new Date("2014"),
    description: "",
    location: "Sophia-Antipolis, France",
    imageSrc: "",
    professionalExperience: false,
  },
  {
    id: 6,
    name: "Marketing Executive",
    startDate: new Date("2017"),
    description: "",
    location: "Antibes, France",
    imageSrc: "",
    professionalExperience: true,
  },
  {
    id: 7,
    name: "E-Communications Executive",
    startDate: new Date("2017"),
    description: "",
    location: "London, United Kingdom",
    imageSrc: "",
    professionalExperience: true,
  },
  {
    id: 8,
    name: "Full-stack Software Engineer Bootcamp",
    startDate: new Date("2018"),
    description: "",
    location: "London, United Kingdom",
    imageSrc: "",
    professionalExperience: false,
  },
  {
    id: 9,
    name: "Software Engineer",
    startDate: new Date("2019"),
    description: "",
    location: "London, United Kingdom",
    imageSrc: "",
    professionalExperience: true,
  },

  {
    id: 10,
    name: "Ambassador",
    startDate: new Date("2021"),
    description: "",
    location: "London, United Kingdom",
    imageSrc: "",
    professionalExperience: true,
  },
  {
    id: 11,
    name: "Developer Evangelist",
    startDate: new Date("2022"),
    description: "",
    location: "London, United Kingdom",
    imageSrc: "",
    professionalExperience: true,
  },
  {
    id: 12,
    name: "Lead Interview Coach",
    startDate: new Date("2023"),
    description: "",
    location: "",
    imageSrc: "",
    professionalExperience: true,
  },
  {
    id: 13,
    name: "Senior Consultant, Solutions Engineering",
    startDate: new Date("2023"),
    description: "",
    location: "London, United Kingdom",
    imageSrc: "",
    professionalExperience: true,
  },
];

export default timelineData;