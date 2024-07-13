const initialState = {
  isModal: false,
  allGroups: [
    {
      id: 1,
      groupName: 'Emotions',
      words: 15,
      learningCurve: 4,
      isStarred: false,
      isRaised: false,
    },
    {
      id: 2,
      groupName: 'Presentation',
      words: 13,
      learningCurve: 1,
      isStarred: true,
      isRaised: false,
    },
    {
      id: 3,
      groupName: 'Music',
      words: 25,
      learningCurve: 3,
      isRaised: true,
      isStarred: false,
    },
    {
      id: 4,
      groupName: 'Human Relationship',
      words: 4,
      learningCurve: 1,
      isRaised: false,
      isStarred: false,
    },
    {
      id: 5,
      groupName: 'Board Games',
      words: 42,
      learningCurve: 1,
      isRaised: false,
      isStarred: false,
    },
    {
      id: 6,
      groupName: 'Interview Preparation',
      words: 17,
      learningCurve: 5,
      isRaised: false,
      isStarred: false,
    },
    {
      id: 7,
      groupName: 'Travel',
      words: 13,
      learningCurve: 3,
      isRaised: false,
      isStarred: false,
    },
  ],
};

const stateMachine = (state, action) => {
  switch (action.type) {
    case 'openModal':
      return {
        ...state,
        isModal: true,
      };
    case 'closeModal':
      return {
        ...state,
        isModal: false,
      };
  }
};

export { stateMachine, initialState };
