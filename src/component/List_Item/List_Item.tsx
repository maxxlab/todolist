import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import Menu from '../Menu/Menu';

import { Link, useParams } from 'react-router-dom';
import ListOptions from './ListOptions';
import { useSelector } from 'react-redux';
interface listProps {
    id: string,
    title:string
  }

export default function ListItem(props: any) {
    const lists = useSelector((state:any)=>state.lists.lists);
    let titleID:string = "";
    lists.forEach((list:listProps) => {
      if(list.title === props.title){
        titleID = list.id
      }
    })
    return (
        <React.Fragment key={props.title}>
            <Link to={"/" + props.title}>
                <ListItemButton>
                    <ListItemText primary={props.title} />
                    {/* <Menu option={'task'} /> */}
                    <ListOptions id={titleID} />
                </ListItemButton>
            </Link>
        </React.Fragment>
    );
}