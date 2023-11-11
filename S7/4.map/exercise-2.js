const users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
  ];
  
  const modifiedUsers = users.map (user => {
    if (user.name.startsWith ('A')) {
      return { ...user, name: 'Anacleto' };
    }
    return user;
  });
  
  console.log(modifiedUsers);
  