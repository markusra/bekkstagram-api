export const initialState = () => [
  {
    id: '1',
    createdDate: 1559670653398,
    description: 'En rolig morgen med kaffe, crossaint og charts',
    url: 'https://www.dropbox.com/s/gf6w881kof602f7/bilde_1.jpg?raw=1',
    username: 'selbekk',
    comments: [
      {
        id: '2',
        createdDate: 1559670668735,
        text: 'Utrolig stilig',
        username: 'markusra',
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
    url: 'https://www.dropbox.com/s/gmjru5d1cos42gc/bilde_2.jpg?raw=1',
    username: 'selbekk',
    comments: [],
    likes: [],
  },
  {
    id: '3',
    createdDate: 1559671853398,
    description: 'Samarbeid på arbeidsplassen',
    url: 'https://www.dropbox.com/s/4y9u8jjblolhyts/bilde_3.jpg?raw=1',
    username: 'markusra',
    comments: [],
    likes: [],
  },
  {
    id: '4',
    createdDate: 1559671853398,
    description: 'Full kreativ frihet',
    url: 'https://www.dropbox.com/s/oeuwy57bny3tzqx/bilde_4.jpg?raw=1',
    username: 'livetibekk',
    comments: [],
    likes: [],
  },
  {
    id: '5',
    createdDate: 1559671883398,
    description: 'Når man ser på pull requests sammen',
    url: 'https://www.dropbox.com/s/mysi9md22i3l8e7/bilde_5.jpg?raw=1',
    username: 'selbekk',
    comments: [],
    likes: [],
  },
];
