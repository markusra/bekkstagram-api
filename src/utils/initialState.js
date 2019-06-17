export const initialState = () => [
  {
    id: '1',
    createdDate: 1559670653398,
    description: 'En rolig morgen med kaffe, crossaint og charts',
    url: 'https://res.cloudinary.com/bekkstagram/image/upload/v1560790936/image_1.jpg',
    username: 'selbekk',
    comments: [
      {
        id: '2',
        createdDate: 1559670668735,
        text: 'Utrolig stilig',
        username: 'markusra',
        likes: [
          {
            username: 'marie.buoen',
          },
        ],
      },
    ],
    likes: [
      {
        username: 'marie.buoen',
      },
      {
        username: 'markusra',
      },
    ],
  },
  {
    id: '2',
    createdDate: 1559670853398,
    description: 'Det jobbes! #awesome',
    url: 'https://res.cloudinary.com/bekkstagram/image/upload/v1560790937/image_2.jpg',
    username: 'selbekk',
    comments: [],
    likes: [],
  },
  {
    id: '3',
    createdDate: 1559671853398,
    description: 'Samarbeid på arbeidsplassen',
    url: 'https://res.cloudinary.com/bekkstagram/image/upload/v1560791359/image_3.jpg',
    username: 'markusra',
    comments: [],
    likes: [],
  },
  {
    id: '4',
    createdDate: 1559671853398,
    description: 'Full kreativ frihet',
    url: 'https://res.cloudinary.com/bekkstagram/image/upload/v1560790936/image_4.jpg',
    username: 'livetibekk',
    comments: [],
    likes: [],
  },
  {
    id: '5',
    createdDate: 1559671883398,
    description: 'Når man ser på pull requests sammen',
    url: 'https://res.cloudinary.com/bekkstagram/image/upload/v1560791141/image_5.jpg',
    username: 'selbekk',
    comments: [],
    likes: [],
  },
];
