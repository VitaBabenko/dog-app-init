import { NavLink } from 'react-router-dom';
import { StyledButton } from './NavBar.styled';

const headerMenu = [
  {
    id: 1,
    title: 'Main',
    path: '/'
  },
  {
    id: 2,
    title: 'Breeds',
    path: '/breeds'
  },
  {
    id: 3,
    title: 'Vote',
    path: '/vote'
  },
  {
    id: 4,
    title: 'History',
    path: '/history'
  },
  {
    id: 5,
    title: 'Your uploads',
    path: '/upload'
  }
];

export const NavBar = () => (
  <>
    {headerMenu.map(item => (
      <NavLink to={item.path} key={item.id}>
        {({ isActive }) => (
          <StyledButton
            variant={isActive ? 'contained' : 'text'}
            key={item.path}
          >
            {item.title}
          </StyledButton>
        )}
      </NavLink>
    ))}
  </>
);
