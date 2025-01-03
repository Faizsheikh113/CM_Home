import { useState, useEffect } from "react";

export interface QuickService {
  id: number;
  name: string;
  icon: any; // Update to ImageSourcePropType if using TypeScript strictly
  description: string;
}

export function useQuickServices() {
  const [quickServices, setQuickServices] = useState<QuickService[]>([]);

  useEffect(() => {
    // Fetch or initialize data
    const services = [
      {
        id: 1,
        name: "Quizzes",
        icon: require("../../assets/images/Quizes.png"),
        description: "Your fun & earn in one place",
      },
      {
        id: 2,
        name: "Health",
        icon: require("../../assets/images/Health.png"),
        description: "Stay healthy, unstoppable!",
      },
      {
        id: 3,
        name: "Baby Care",
        icon: require("../../assets/images/Baby Care.png"),
        description: "Parenting made easier!",
      },
      {
        id: 4,
        name: "Courses",
        icon: require("../../assets/images/Courses.png"),
        description: "Learn smarter, not harder!",
      },
    ];
    setQuickServices(services);
  }, []);

  return quickServices;
}
