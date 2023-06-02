import Image from "next/image";
import {Box} from "@mui/material";

export default function Category({url, name, width, height}){
    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Image src={url} alt={name} width={width} height={height} />
            <h3>{name}</h3>
        </Box>
    )
}