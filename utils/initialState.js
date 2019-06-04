export const initialState = () => [
  {
    id: "1",
    createdDate: 1559670653398,
    description: "Et vanlig bilde",
    url: "https://www.bekk.no/",
    comments: [
      {
        id: "2",
        createdDate: 1559670668735,
        text: "Dette er en kommentar"
      }
    ],
    likes: [
      {
        username: "ola.nordmann"
      }
    ]
  }
];
