import React from 'react';

const UserCards = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.picture} alt={`${user.name.first} ${user.name.last}`} />
      <div>
        <h3>{`${user.name.first} ${user.name.last}`}</h3>
        <p>{`${user.location.city}, ${user.location.country}`}</p>
      </div>
    </div>
  );
};

export default UserCards;
