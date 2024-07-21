const initialState = {
  isModal: false,
  words: [
    {
      id: 1,
      word: 'Border',
      definition: 'Граница',
      isStarred: false,
      isRaised: false,
      isCompleted: false,
    },
    {
      id: 2,
      word: 'Airplane',
      definition: 'Самолет',
      isStarred: false,
      isRaised: true,
      isCompleted: false,
    },
    {
      id: 3,
      word: 'Embark',
      definition: 'Посадка в самолет',
      isStarred: false,
      isRaised: false,
      isCompleted: true,
    },
    {
      id: 4,
      word: 'Custom',
      definition: 'Таможня',
      isStarred: false,
      isRaised: false,
      isCompleted: false,
    },
    {
      id: 5,
      word: 'Presentation',
      definition: 'Презентация',
      isStarred: true,
      isRaised: false,
      isCompleted: false,
    },
    {
      id: 6,
      word: 'Ticket',
      definition: 'Билет',
      isStarred: false,
      isRaised: false,
      isCompleted: false,
    },
    {
      id: 7,
      word: 'Luggage',
      definition: 'Багаж',
      isStarred: false,
      isRaised: false,
      isCompleted: false,
    },
    {
      id: 8,
      word: 'Passport',
      definition: 'Паспорт',
      isStarred: false,
      isRaised: false,
      isCompleted: false,
    },
    {
      id: 9,
      word: 'Handbag',
      definition: 'Ручная кладь',
      isStarred: false,
      isRaised: false,
      isCompleted: false,
    },
    {
      id: 10,
      word: 'Arrival',
      definition: 'Прибытие',
      isStarred: false,
      isRaised: false,
      isCompleted: false,
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
