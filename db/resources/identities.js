import bcrypt from 'bcryptjs';

export default async () => {
  return [
    {
      email: 'maria.constantin@primadevelopment.ro',
      name: 'Maria Constantin',
      role: 'project-manager',
      __t: 'project-manager',
      password: bcrypt.hashSync('supersecretpassword'),
      profilePicture: 'https://chesscoders.fra1.digitaloceanspaces.com/profile-placeholder.png',
      active: true,
      confirmed: true,
    },
    {
      email: 'cristian.lupu@primadevelopment.ro',
      name: 'Cristian Lupu',
      role: 'site-manager',
      __t: 'site-manager',
      password: bcrypt.hashSync('supersecretpassword'),
      profilePicture: 'https://chesscoders.fra1.digitaloceanspaces.com/profile-placeholder2.png',
      active: true,
      confirmed: true,
    },
  ];
};
