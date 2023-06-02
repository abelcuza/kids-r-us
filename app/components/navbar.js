"use client";
import Link from "next/link";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {francoisOne} from "@/app/fonts";
import {useState} from "react";
import Badge from '@mui/material/Badge';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Divider, Stack} from "@mui/material";
import {Search} from "@mui/icons-material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Navbar({urls}) {

    const StyledBadge = styled(Badge)(({theme}) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 5,
            border: `2px solid ${"rgb(241, 117, 92)"}`,
            padding: '0 4px',
            background:"rgb(241, 117, 92)"
        },
    }));
    const linkStyle = {
        color: "black"
    }
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <nav className="navbar">
            <Box sx={{width: '100%', display: "flex"}}>
                <Tabs
                    onChange={handleChange}
                    value={value}
                    aria-label="Tabs where selection follows focus"
                    selectionFollowsFocus
                >

                    {urls.map(({url, name}) => (
                        <Link style={linkStyle} key={name} href={url}>
                            <Tab label={name} className={francoisOne.className}/>
                        </Link>
                    ))}
                </Tabs>
                <Stack direction={"row"}>
                    <IconButton aria-label="like">
                        <FavoriteBorderIcon/>
                    </IconButton>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={3} color="secondary">
                            <ShoppingCartIcon/>
                        </StyledBadge>
                    </IconButton>
                    <IconButton aria-label="searh">
                        <Search/>
                    </IconButton>
                </Stack>

            </Box>
        </nav>
    )
}



