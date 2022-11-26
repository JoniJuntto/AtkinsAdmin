import { TextField } from "@mui/material";
import React from "react";
import EditIcon from '@mui/icons-material/Edit';

export default function EditUsersComp() {
    const [userSearchValue, setUserSearchValue] = React.useState("");
    const [userSearchResults, setUserSearchResults] = React.useState([
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
    ]);


    return (
        <div>
            <h1>Edit Users</h1>
            <div>
                <TextField id="standard-basic" label="Käyttäjä ID" variant="standard" />
            </div>
            <div>
                {userSearchResults?.map((user) => (
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <h5>{user.email}</h5>
                        </div>
                        <EditIcon />
                    </div>
                ))}
            </div>
        </div>
    );
}
