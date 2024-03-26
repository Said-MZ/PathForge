interface Step {
  name: string;
  description: string;
  resources: {
    resourceName: string;
    resourceLink: string;
  }[];
  color: string;
  textColor: string;
}

interface Block {
  blockNumber: number;
  blockContent: Step[];
}

interface Roadmap {
  id: number;
  name: string;
  blocks: Block[];
}

interface Resource {
  resourceName: string;
  resourceLink: string;
}

interface BlockContent {
  name: string;
  description: string;
  resources: Resource[];
  color: string;
  textColor: string;
}

interface Block {
  blockNumber: number;
  blockContent: BlockContent[];
}

interface Roadmap {
  id: number;
  name: string;
  description: string;
  category: string;
  sharedBy: {
    name: string;
    avatar: string;
  };
  blocks: Block[];
}

//  temporary data
// ------------------
const roadmaps: Roadmap[] = [
  {
    id: 1,
    name: "front end",
    description:
      "Learn front end development roadmap with the latest technologies.",
    category: "programming",
    sharedBy: {
      name: "John Doe",
      avatar: "https://randomuser",
    },
    blocks: [
      {
        blockNumber: 1,
        blockContent: [
          {
            name: "Internet",
            description: "lorem ipsum sit amit dolor etc etc ",
            resources: [
              {
                resourceName: "w3schools",
                resourceLink: "https://www.w3schools.com/",
              },
              {
                resourceName: "MDN",
                resourceLink: "https://developer.mozilla.org/en-US/",
              },
            ],
            color: "fefefe",
            textColor: "000",
          },
        ],
      },
      {
        blockNumber: 2,
        blockContent: [
          {
            name: "HTML",
            description: "lorem ipsum sit amit dolor etc etc ",
            resources: [
              {
                resourceName: "w3schools",
                resourceLink: "https://www.w3schools.com/html/",
              },
              {
                resourceName: "MDN",
                resourceLink:
                  "https://developer.mozilla.org/en-US/docs/Web/HTML",
              },
            ],
            color: "E44D26",
            textColor: "000",
          },
          {
            name: "CSS",
            description: "lorem ipsum sit amit dolor etc etc ",
            resources: [
              {
                resourceName: "w3schools",
                resourceLink: "https://www.w3schools.com/css/",
              },
              {
                resourceName: "MDN",
                resourceLink:
                  "https://developer.mozilla.org/en-US/docs/Web/CSS",
              },
            ],
            color: "264de4",
            textColor: "fff",
          },

          {
            name: "JavaScript",
            description: "lorem ipsum sit amit dolor etc etc ",
            resources: [
              {
                resourceName: "w3schools",
                resourceLink: "https://www.w3schools.com/js/",
              },
              {
                resourceName: "MDN",
                resourceLink:
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
            ],
            color: "f0db4f",
            textColor: "000",
          },
        ],
      },
      {
        blockNumber: 3,
        blockContent: [
          {
            name: "React",
            description: "lorem ipsum sit amit dolor etc etc ",
            resources: [
              {
                resourceName: "w3schools",
                resourceLink: "https://www.w3schools.com/react/",
              },
              {
                resourceName: "MDN",
                resourceLink:
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
            ],
            color: "2392fb",
            textColor: "000",
          },
          {
            name: "Next.js",
            description: "lorem ipsum sit amit dolor etc etc ",
            resources: [
              {
                resourceName: "w3schools",
                resourceLink: "https://www.w3schools.com/nextjs/",
              },
              {
                resourceName: "MDN",
                resourceLink:
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
            ],
            color: "191919",
            textColor: "fff",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "back end",
    description:
      "Learn back end development roadmap with the latest technologies.",
    category: "programming",
    sharedBy: {
      name: "John Doe",
      avatar: "https://randomuser",
    },
    blocks: [
      {
        blockNumber: 1,
        blockContent: [
          {
            name: "Node.js",
            description: "lorem ipsum sit amit dolor etc etc ",
            resources: [
              {
                resourceName: "w3schools",
                resourceLink: "https://www.w3schools.com/nodejs/",
              },
              {
                resourceName: "MDN",
                resourceLink:
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
            ],
            color: "165100",
            textColor: "fefefe",
          },
          {
            name: "Express.js",
            description: "lorem ipsum sit amit dolor etc etc ",
            resources: [
              {
                resourceName: "w3schools",
                resourceLink: "https://www.w3schools.com/express/",
              },
              {
                resourceName: "MDN",
                resourceLink:
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
            ],
            color: "fefefe",
            textColor: "000",
          },
        ],
      },
      {
        blockNumber: 2,
        blockContent: [
          {
            name: "MongoDB",
            description: "lorem ipsum sit amit dolor etc etc ",
            resources: [
              {
                resourceName: "w3schools",
                resourceLink: "https://www.w3schools.com/mongodb/",
              },
              {
                resourceName: "MDN",
                resourceLink:
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
            ],
            color: "139952",
            textColor: "fefefe",
          },
          {
            name: "PostgreSQL",
            description: "lorem ipsum sit amit dolor etc etc ",
            resources: [
              {
                resourceName: "w3schools",
                resourceLink: "https://www.w3schools.com/postgresql/",
              },
              {
                resourceName: "MDN",
                resourceLink:
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
            ],
            color: "336791",
            textColor: "fefefe",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "تعلم النحو",
    description: "تعلم النحو العربي بأحدث التقنيات.",
    category: "لغة عربية",
    sharedBy: {
      name: "Ahmad Ali",
      avatar: "https://randomuser",
    },
    blocks: [
      {
        blockNumber: 1,
        blockContent: [
          {
            name: "الإسم",
            description: "lorem ipsum sit amit dolor etc etc ",
            resources: [
              {
                resourceName: "w3schools",
                resourceLink: "https://www.w3schools.com/",
              },
              {
                resourceName: "MDN",
                resourceLink: "https://developer.mozilla.org/en-US/",
              },
            ],
            color: "fefefe",
            textColor: "000",
          },
        ],
      },
      {
        blockNumber: 2,
        blockContent: [
          {
            name: "الفعل",
            description: "lorem ipsum sit amit dolor etc etc ",
            resources: [
              {
                resourceName: "w3schools",
                resourceLink: "https://www.w3schools.com/html/",
              },
              {
                resourceName: "MDN",
                resourceLink:
                  "https://developer.mozilla.org/en-US/docs/Web/HTML",
              },
            ],
            color: "fefefe",
            textColor: "000",
          },
          {
            name: "الحرف",
            description: "lorem ipsum sit amit dolor etc etc ",
            resources: [
              {
                resourceName: "w3schools",
                resourceLink: "https://www.w3schools.com/css/",
              },
              {
                resourceName: "MDN",
                resourceLink:
                  "https://developer.mozilla.org/en-US/docs/Web/CSS",
              },
            ],
            color: "fefefe",
            textColor: "000",
          },

          {
            name: "الجملة",
            description: "lorem ipsum sit amit dolor etc etc ",
            resources: [
              {
                resourceName: "w3schools",
                resourceLink: "https://www.w3schools.com/js/",
              },
              {
                resourceName: "MDN",
                resourceLink:
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
            ],
            color: "fefefe",
            textColor: "000",
          },
        ],
      },
      {
        blockNumber: 3,
        blockContent: [
          {
            name: "التعبير",
            description: "lorem ipsum sit amit dolor etc etc ",
            resources: [
              {
                resourceName: "w3schools",
                resourceLink: "https://www.w3schools.com/react/",
              },
              {
                resourceName: "MDN",
                resourceLink:
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
            ],
            color: "fefefe",
            textColor: "000",
          },
          {
            name: "الكلمة",
            description: "lorem ipsum sit amit dolor etc etc ",
            resources: [
              {
                resourceName: "w3schools",
                resourceLink: "https://www.w3schools.com/nextjs/",
              },
              {
                resourceName: "MDN",
                resourceLink:
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
            ],
            color: "fefefe",
            textColor: "000",
          },
        ],
      },
    ],
  },
];
// ------------------

export { roadmaps };
