import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import {Button} from "@mui/material";
import Box from "@mui/material/Box";

export default function SearchBar() {
    const boxStyle= {
        display:"flex"
    }

    return (
        <Box sx={boxStyle}>
            <InputBase
                placeholder="Search products…"
                inputProps={{'aria-label': 'search'}}
                sx={{
                    border: "1px dashed",
                    borderRight: "0",
                    height: "50px",
                    borderColor:"gray",
                    padding: "0 12px",
                    width:"100%"
                }}
            />
            <Button variant="contained"
                    color="warning"
                    sx={{
                        borderRadius: "0%",
                        height: "50px",
                        width: "50px",
                        lineHeight: "0",
                        minWidth: "0",
                        padding: "0"
                    }}
            >
                <Box sx={{
                    border: "2px dashed",
                    borderColor: "white",
                    width: "75%",
                    height: "75%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                >
                    <SearchIcon/>
                </Box>
            </Button>
        </Box>

    )
}