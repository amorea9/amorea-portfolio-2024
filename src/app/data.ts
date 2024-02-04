export interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  cta: string;
  year: number;
  role: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "OMHU Webshop",
    description: "This solution was build as a project for 'OMHU', a danish furniture shop, to help them increase their brand recognition and popularity. This was a group project.",
    imageSrc: "/cookie-bakery.png",
    imageWidth: 300,
    imageHeight: 300,
    alt: "Cookie Bakery image",
    cta: "Have a cookie here!",
    year: 2022,
    role: "main dev",
  },
  {
    id: 2,
    title: "To do",
    description: "Description of To do",
    imageSrc: "/to-do-list.png",
    imageWidth: 300,
    imageHeight: 300,
    alt: "Cookiww image",
    cta: "Have a to do here!",
    year: 2021,
    role: "designer",
  },
  // Add more projects as needed
];

export default projects;
