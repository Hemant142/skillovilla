import React, { useState } from 'react';
import UserCards from './UserCard';

const UserListWidget = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    `${user.name.first} ${user.name.last} ${user.location.city} ${user.location.country}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-list-widget">
      <input
        type="text"
        placeholder="Search by name/location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="user-cards">
        {filteredUsers.map(user => (
          <UserCards key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserListWidget;
