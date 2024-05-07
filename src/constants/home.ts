interface CareerList {
  website: string;
  imageUrl: string;
  role: string;
  companyName: string;
  location: string;
  startWork: string;
  endWork: string;
  ariaLabel: string;
}

export const CAREERS_LIST: CareerList[] = [
  {
    website: "https://service.bridgenote.asia/",
    imageUrl:
      "https://res.cloudinary.com/dtgzydbp2/image/upload/v1715067999/bridgenote.webp",
    role: "Frontend Developer",
    companyName: "Bridgenote Indonesia",
    location: "Mega Kuningan, South Jakarta 12950",
    startWork: "Nov 2023",
    endWork: "Present",
    ariaLabel: "Visit the Bridgenote Indonesia Company Profile",
  },
  {
    website: "https://www.vads.co.id/",
    imageUrl:
      "https://res.cloudinary.com/dtgzydbp2/image/upload/v1715068239/vads.webp",
    role: "Fullstack Developer",
    companyName: "VADS Indonesia",
    location: "Nariba Office, Mampang South Jakarta 12790",
    startWork: "Sep 2022",
    endWork: "Nov 2023",
    ariaLabel: "Visit the VADS Indonesia Company Profile",
  },
  {
    website: "https://oss.go.id/",
    imageUrl:
      "https://res.cloudinary.com/dtgzydbp2/image/upload/v1715068273/oss.svg",
    role: "Frontend Developer",
    companyName: "Ministry of Investments",
    location: "Jl. Jenderal Gatot Subroto No.44, Jakarta 12190",
    startWork: "Oct 2021",
    endWork: "Sep 2022",
    ariaLabel: "Visit the Ministry of Investments Profile",
  },
  {
    website: "https://new.yesdok.com/id",
    imageUrl:
      "https://res.cloudinary.com/dtgzydbp2/image/upload/v1715068309/yesdok.webp",
    role: "Frontend Developer",
    companyName: "Yesdok Indonesia",
    location: "Kelapa Gading, North Jakarta 14240",
    startWork: "Aug 2020",
    endWork: "Sep 2021",
    ariaLabel: "Visit the Yesdok Indonesia Company Profile",
  },
];
