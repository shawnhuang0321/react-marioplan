const initState = {
  projects: [
    {
      id: '1',
      title: 'Chrissy Costanza',
      content: 'Lead vocals of Against The Current'
    },
    {
      id: '2',
      title: 'Will Ferri',
      content: 'Drums of Against The Current'
    },
    {
      id: '3',
      title: 'Dan Gow',
      content: 'Lead guitar of Against The Current'
    },
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log(action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log(action.error);
      return state;
    default:
      return state;
  }
};

export default projectReducer;