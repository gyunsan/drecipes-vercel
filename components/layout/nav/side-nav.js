import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { fontFamily, fontStyle } from '@mui/system';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from '@mui/material';



export default function SideNav() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  // const { history } = props;
  const itemsList = [
    {
      text: 'Home',
      icon: <HomeRoundedIcon />,
      link: '/'
    },
    {
      text: 'Recipes',
      icon: <MenuBookIcon />,
      link: '/recipes'
    }, {
      text: 'About',
      icon: <InfoIcon />,
      link: '/about'
    }, {
      text: 'Contact',
      icon: <MailIcon />,
      link: '/contact'
    }
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListItemButton>
        <ArrowBackIosNewRoundedIcon fontSize='large' />
        <div style={{ fontSize: '25px' }}>Menu</div>
      </ListItemButton>
      <Divider />

      <List>
        {itemsList.map((item) => {
          const { text, icon, link } = item;
          return (
            <Link href={link} key={text}> <ListItem key={text} disablePadding>
              <ListItemButton>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            </Link>);
        })}
      </List>
      <Divider />
      <List>
        {['Terms', 'Privacy', 'Cookies'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );



  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer('left', true)} />

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}