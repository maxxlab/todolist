import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { Box, Toolbar } from '@mui/material';
import List from '@mui/material/List';
import Main from '../Main/Main';
import ListItem from '../List_Item/List_Item';
import Divider from '@mui/material/Divider';
import CreateNewNote from '../CreateNewNote/CreateNewNote';
import { Routes, Route } from 'react-router-dom';
import TaskCard from '../TaskCard/TaskCard';
import {  useSelector } from 'react-redux';
import { useEffect} from 'react';
import { fetchList } from '../../store/slices/listSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';
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
interface Data {
  openNavbar: boolean;
}

interface listProps {
  title: string
}

export default function Navbar({ openNavbar }: Data) {
  const dispatch = useAppDispatch()
  const user  = useSelector((state:any)=> state.user)
  const lists = useSelector((state : any) => state.lists.lists);
  useEffect(()=>{ 
    dispatch(fetchList(user.id))
  }, [dispatch, user.id])
  return (
    <>
      <Box sx={{
        display: 'flex',
        height:`calc(100% - 48px)`,
      }}>
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
            {
              lists.map((list : listProps) => (
                <ListItem title={list.title}></ListItem>
              ))
            }
            {
            <Divider sx={{ my: 1 }} />

            }
            <CreateNewNote></CreateNewNote>
          </List>
        </Drawer>
        <Main>
          <Routes>
            <Route path="/" element={<div></div>} />
            <Route path="/:title" element={<TaskCard />}/>
          </Routes>
        </Main>

      </Box>
    </>
  );
}