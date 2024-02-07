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
    description: "This solution was built as a group project for 'OMHU', a danish furniture shop. The goal was to help them increase their brand recognition and improve the usability of their webshop.",
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
    description: "I built this classic game in my free time, with the goal of studying race conditions and for an ultimate battle: me vs The Code.",
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
    title: "FooFest Website",
    description:
      "This is the first part of the FooFest project. This website was made for a fictitious festival and its goal is to be a platform where people could browse artists and bands attending the event, book their tickets and build excitement. This was a group project.",
    imageSrc: "/FooFestSite.png",
    imageWidth: 300,
    imageHeight: 300,
    alt: "FooFest Website pic",
    ctaText: "Check out the headliners",
    ctaLink: "https://foofest-booking-2.netlify.app/",
    year: 2023,
    role: "dev",
  },
  {
    id: 4,
    title: "FooFest Companion App",
    description:
      "This is the second part of the FooFest project. The Companion App is thought to be available only to FooFest ticket owners and its goal is to feature live events at the festival and showcase useful information like schedules and artists profiles. Best experienced in mobile view.",
    imageSrc: "/FooFestApp3.png",
    imageWidth: 300,
    imageHeight: 300,
    alt: "FooFest App pic",
    ctaText: "Log in to the app",
    ctaLink: "https://foofest-app-2.netlify.app/",
    year: 2023,
    role: "main dev",
  },
  {
    id: 5,
    title: "CO2kie Bakery",
    description: "This project was a small case assignment with the theme 'sustainability'. Together with another developer, we built a website that helps you understand how much CO2 is emitted based on your daily number of google searches.",
    imageSrc: "/Cookie5.png",
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
