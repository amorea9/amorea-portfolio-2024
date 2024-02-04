export interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  ctaText: string;
  year: number;
  role: string;
  ctaLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "OMHU Webshop",
    description: "This solution was build as a group project for 'OMHU', a danish furniture shop. The goal was to help them increase their brand recognition and improve the usability of their webshop.",
    imageSrc: "/Omhu.png",
    imageWidth: 300,
    imageHeight: 300,
    alt: "OMHU webshop pic",
    ctaText: "Visit the Webshop",
    ctaLink: "https://omhu2.vercel.app/",
    year: 2023,
    role: "main dev",
  },
  {
    id: 2,
    title: "ReactTacToe",
    description: "I buildt this classic game in my free time, with the goal of studying race conditions and for an ultimate battle: me vs The Code.",
    imageSrc: "/RTT.png",
    imageWidth: 300,
    imageHeight: 300,
    alt: "ReactTacToe pic",
    ctaText: "Play a match",
    ctaLink: "https://react-tac-toe-app.netlify.app/",
    year: 2023,
    role: "solo dev",
  },
  {
    id: 3,
    title: "CO2kie Bakery",
    description: "This project was a small case assignment with the theme 'sustainability'. Together with another developer, we buildt a website that helps you understand how much CO2 is emitted based on your daily number of google searches.",
    imageSrc: "/cookie-bakery.png",
    imageWidth: 300,
    imageHeight: 300,
    alt: "Cookie Bakery pic",
    ctaText: "Bake some cookies",
    ctaLink: "https://co2okiebakery.netlify.app/",
    year: 2022,
    role: "main dev",
  },
  // Add more projects as needed
];

export default projects;
