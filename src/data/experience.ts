export interface Experience {
  id: number;
  company: string;
  location: string;
  position: string;
  period: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 3,
    company: "Aiems",
    location: "Dubai, UAE",
    position: "Software Engineering & Marketing Manager",
    period: "March 2024 - Present",
    startDate: "2024-03",
    endDate: "Present",
    current: true,
    achievements: [
      "Lead full-cycle web development projects from requirement gathering, workflow diagrams, documentation, coding, testing to final delivery",
      "Designed and implemented e-commerce websites and corporate portals, improving client online presence and increasing engagement by 35%",
      "Automated marketing workflows using n8n, reducing manual tasks by 50% and improving campaign efficiency",
      "Integrated AI voice agent (VoicHub) for customer interaction, increasing response rate by 40%",
      "Developed social media campaigns and created marketing materials, boosting brand awareness by 30%",
      "Managed cross-functional teams and ensured all projects met quality standards and deadlines"
    ]
  },
  {
    id: 2,
    company: "The Hope International",
    location: "Amman, Jordan",
    position: "Software Engineering",
    period: "February 2022 - September 2024",
    startDate: "2022-02",
    endDate: "2024-09",
    achievements: [
      "Led development of hospital management system using C# .NET, improving data accessibility and reducing manual processes by 40%",
      "Designed and deployed multiple professional web applications using React.js, enhancing user engagement and performance by 35%",
      "Developed and maintained fully functional e-commerce systems, integrating secure payment gateways and product APIs with Amazon",
      "Built and optimized SQL Plus database structures, improving query efficiency by 30% and ensuring data integrity",
      "Created comprehensive technical documentation for all developed systems, ensuring smooth handover and maintenance",
      "Collaborated with cross-functional teams to deliver projects on time and within scope, maintaining 98% delivery success rate"
    ]
  },
  {
    id: 1,
    company: "Future Applied Computer Technology",
    location: "Amman, Jordan",
    position: "Software Engineering",
    period: "June 2020 - January 2022",
    startDate: "2020-06",
    endDate: "2022-01",
    achievements: [
      "Developed and maintained C# MVC web modules, improving overall system performance by 25% through optimized code and bug fixes",
      "Enhanced company's Information Management System, resulting in 30% faster data processing and better task organization",
      "Built and debugged Android applications using Android Studio, reducing crash rates by 20% through efficient troubleshooting",
      "Collaborated in Jordan Islamic Bank project, successfully delivering 100% of assigned modules within project deadlines",
      "Improved code quality and efficiency by implementing reusable components and following clean code principles, boosting team productivity by 15%"
    ]
  }
];
