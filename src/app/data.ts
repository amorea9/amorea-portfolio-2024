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
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cookie Bakery",
    description: "Description of Cookie",
    imageSrc: "/cookie-bakery.png",
    imageWidth: 300,
    imageHeight: 300,
    alt: "Cookie Bakery image",
    cta: "Have a cookie here!",
    year: 2022,
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
  },
  // Add more projects as needed
];

export default projects;
