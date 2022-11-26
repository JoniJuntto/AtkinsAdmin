import { Button } from "@mui/material";
import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

export default function Newsletters() {

    const navigate = useNavigate();

    const newsletters = [
        {
            id: 1,
            title: "Newsletter 1",
            date: "2021-10-10",
        },
        {
            id: 2,
            title: "Newsletter 2",
            date: "2021-10-10",
        },
        {
            id: 3,
            title: "Newsletter 3",
            date: "2021-10-10",
        },
    ];

    return (
        <div>
            <h1>NewsLetters</h1>
            <Button variant="contained" color="primary" onClick={()=>navigate('newletter')}>
                Create Newsletter   
            </Button>
            
            <div>
                {newsletters.map((newsletter) => (
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <h5>{newsletter.title}</h5>
                        <h5>{newsletter.date}</h5>
                        <EditIcon />
                    </div>
                ))}
            </div>
        </div>
    );
}
