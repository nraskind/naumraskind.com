const courseList = [
  {
    courseName: "Database Management Systems",
    courseCode: "EECS 484",
    semester: "Fall 2022",
    topics: ["Query Languages", "Database Design", "Query Optimization"],
  },
  {
    courseName: "Introduction to Computer Security",
    courseCode: "EECS 388",
    semester: "Fall 2022",
    topics: [
      "Crypotgraphy",
      "Building, Using, and Managing Secure Systems",
      "Computer Forensics",
    ],
  },
  {
    courseName: "Web Systems",
    courseCode: "EECS 485",
    semester: "Winter 2022",
    topics: [
      "Fullstack Web Development",
      "Distributed Systems",
      "Threading and Parallelization",
    ],
    projects: ["Google Search Engine Clone", "Instagram Clone (React, Flask)"],
  },
  {
    courseName: "Machine Learning",
    courseCode: "EECS 445",
    semester: "Winter 2022",
    topics: [
      "Supervised learning: neural networks, regression, kernal methods, regularization",
      "Unsupervized learning: clustering, density estimation, dimensionality, and reduction",
      "Python libraries: numpy, pytorch, and sklearn",
    ],
    projects: ["Reddit post sentiment classifier", "Dog breed classifier"],
  },
  {
    courseName: "Theory of Computation",
    courseCode: "EECS 376",
    semester: "Fall 2021",
    topics: [
      "Algorithm Design",
      "Probability and Cryptography",
      "Decidability and Polynomial Time Computability",
    ],
  },
  {
    courseName: "Introduction to Computer Design",
    courseCode: "EECS 370",
    semester: "Fall 2021",
    topics: [
      "Computer Hardware",
      "Circuits and Logic Gates",
      "Low Level Programming (C, Assembly)",
    ],
    projects: [
      "Assembler and Linker",
      "Cache Simulator",
      "Multiplication and Combination in Assembly",
    ],
  },
  {
    courseName: "Data Structures and Algorithms",
    courseCode: "EECS 281",
    semester: "Spring 2021",
    topics: ["Sorting", "Searching", "Time Complexity"],
    projects: [
      "BFS/DFS maze solver",
      "Stock market simulator",
      "C++ SQL emulator",
    ],
  },
];

export default courseList;
