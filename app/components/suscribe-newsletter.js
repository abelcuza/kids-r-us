import Box from "@mui/material/Box";
import {Button, InputBase, TextField} from "@mui/material";

export default function SuscribeNewsletter(){
    const boxStyle = {
        display: "flex",
        flexDirection: "column",
        background: "rgb(241, 117, 92)",
        alignItems: "center",
        color: "white",
        padding: "10px 20px"
    }
    const buttomStyle = {
        background: "white",
        borderRadius: "0%"
    }
    const insideBoxStyle = {
        color: "rgb(241, 117, 92)",
        border: "2px dashed",
        width: "100%"
    }
    const textFieldStyle = {
        margin: "10px 0",
        color: "white",
        border: "2px dashed",
        padding: "4px 12px"
    }
    return (
        <Box sx={boxStyle}>
            <h4>Join Our <br/>Newsletter</h4>
            <InputBase size="small"  sx={textFieldStyle} placeholder="Your Email Address *" fullWidth/>
            <Button sx={buttomStyle} variant="contained" fullWidth>
                <Box sx={insideBoxStyle}>
                    Subscribe
                </Box>
            </Button>
        </Box>
    )
}