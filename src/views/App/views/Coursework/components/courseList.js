const courseList = [
  {
    courseName: "Database Management Systems",
    courseCode: "EECS 484",
    semester: "Fall 2022",
    topics: ["Query languages", "Database design", "Query optimization"],
  },
  {
    courseName: "Introduction to Computer Security",
    courseCode: "EECS 388",
    semester: "Fall 2022",
    topics: [
      "Crypotgraphy",
      "Building, using, and managing secure systems",
      "Computer forensics",
    ],
  },
  {
    courseName: "Web Systems",
    courseCode: "EECS 485",
    semester: "Winter 2022",
    topics: [
      "Fullstack web development",
      "Distributed systems",
      "Threading and parallelization",
    ],
    projects: ["Google search engine clone", "Instagram clone (react, flask)"],
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
    courseName: "Introduction to Computer Organization",
    courseCode: "EECS 370",
    semester: "Fall 2021",
    topics: [
      "Computer hardware",
      "Circuits and logic gates",
      "Low level programming (C, assembly)",
    ],
    projects: [
      "Assembler and linker",
      "Cache simulator",
      "Multiplication and combination in assembly",
    ],
  },
  {
    courseName: "Theory of Computation",
    courseCode: "EECS 376",
    semester: "Fall 2021",
    topics: [
      "Algorithm design",
      "Probability and cryptography",
      "Decidability and polynomial time computability",
    ],
  },
  {
    courseName: "Data Structures and Algorithms",
    courseCode: "EECS 281",
    semester: "Spring 2021",
    topics: [
      "Data Structures: lists, stacks, queues, priority queues, hash tables, trees, etc.",
      "Algorithms: greedy, divide and conquer, dynamic programming, etc.",
      "Searching and sorting",
    ],
    projects: [
      "BFS/DFS maze solver",
      "Stock market simulator",
      "C++ SQL emulator",
    ],
  },
];

export default courseList;
