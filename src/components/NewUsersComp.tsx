import React from "react";
import { Divider, Paper, Button } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import '../App.css';


export default function NewUsersComp() {

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const newUsers = [
        {
            id: 1,
            name: "John Doe",
            email: "john.lol@gmail.com",
            status: "pending",
        },
        {
            id: 2,
            name: "Jane Doe",
            email: "jane.lol@gmail.com",
            status: "pending",
        },
        {
            id: 3,
            name: "Joe Doe",
            email: "joe.lol@gmail.com",
            status: "pending",
        },
    ];

    return (
        <div className="App">
            <h1>New Users</h1>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {newUsers.map((value) => {
                    const labelId = `checkbox-list-label-${value.id}`;

                    return (
                        <div>
                            <ListItem
                                key={value.id}
                                disablePadding
                            >
                                <ListItemButton role={undefined} onClick={handleToggle(value.id)} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(value.id) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText style={{ color: 'black' }} id={labelId} primary={value.name} secondary={value.email} />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </div>
                    );
                })}

            </List>
            <Button style={{ marginTop: 30 }} variant="outlined" color="success">Approve</Button>
        </div>
    );
}
