import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const headerMenu = [
  {
    title: 'Main',
    path: '/'
  },
  {
    title: 'Breeds',
    path: '/breed'
  },
  {
    title: 'Vote',
    path: '/vote'
  },
  {
    title: 'History',
    path: '/history'
  },
  {
    title: 'Your uploads',
    path: '/upload'
  }
];

export const NavBar = () => (
  <>
    {headerMenu.map(item => (
      <NavLink to={item.path}>
        {({ isActive }) => (
          <Button
            variant={isActive ? 'contained' : 'text'}
            sx={{
              padding: '4px 10px',
              marginRight: '50px'
            }}
          >
            {item.title}
          </Button>
        )}
      </NavLink>
    ))}
  </>
);
