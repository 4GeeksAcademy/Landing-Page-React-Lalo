import React from "react";
import Card from "./Card";

const info = [
    {
        title: 'Title 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        id: 1,
    },
    {
        title: 'Title 2',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        id: 2,
    },
     {
        title: 'Title 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        id: 3,
    },
    {
        title: 'Title 4',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        id: 4,
    },
];

const DataCard = () =>{
  const insertCardData = info.map((card) => {
    return (
      <div key={card.id} className='col-md-6 col-lg-3'>
        <Card
          title={card.title}
          description={card.description}
        />
      </div>
    );
  });

  return (
    <div className='container'>
      <div className='row'>{insertCardData}</div>
    </div>
  );
};

export default DataCard;