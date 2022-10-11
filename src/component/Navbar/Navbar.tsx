import { styled} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import {Box, Toolbar} from '@mui/material';
import List from '@mui/material/List';
import Main from '../Main/Main';
import { listItem } from '../List_Item/List_Item';
import Divider from '@mui/material/Divider';
import {CreateNewNote} from '../CreateNewNote/CreateNewNote'
const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(0)
        }),
      },
    }),
  );
  interface Data{
    openNavbar:boolean;
  }
  export default function Navbar({openNavbar}:Data){
    return(
      <>
        <Box sx={{ display: 'flex' }}>
            <Drawer variant="permanent" open={openNavbar}>
                <Toolbar
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',

                    }}
                >
                </Toolbar>
                <List component="nav" sx={{ 
              ...(!openNavbar && { display: 'none' })
            }}>
                    {listItem}
                    <Divider sx={{ my: 1 }} />
                    {CreateNewNote}
                </List>
            </Drawer>
        <Main/>
      </Box>
    </>
    );
  }