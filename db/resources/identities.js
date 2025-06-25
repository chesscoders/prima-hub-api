import bcrypt from 'bcryptjs';

export default async () => {
  return [
    {
      email: 'maria.constantin@primadevelopment.ro',
      name: 'Maria Constantin',
      companyRole: 'Project Manager',
      password: bcrypt.hashSync('supersecretpassword'),
      profilePicture: 'https://chesscoders.fra1.digitaloceanspaces.com/profile-placeholder.png',
      permissions: ['achizitie', 'concept'],
      active: true,
      confirmed: true,
    },
    {
      email: 'cristian.lupu@primadevelopment.ro',
      name: 'Cristian Lupu',
      companyRole: 'Site Manager',
      password: bcrypt.hashSync('supersecretpassword'),
      profilePicture: 'https://chesscoders.fra1.digitaloceanspaces.com/profile-placeholder2.png',
      permissions: ['8', 'remedieri'],
      active: true,
      confirmed: true,
    },
    {
      email: 'adrian.stoichina@primadevelopment.ro',
      name: 'Adrian Stoichina',
      role: 'admin',
      __t: 'admin',
      password: bcrypt.hashSync('supersecretpassword'),
      profilePicture: 'https://chesscoders.fra1.digitaloceanspaces.com/profile-placeholder2.png',
      active: true,
      confirmed: true,
    },
  ];
};
