import {Stack} from "@mui/material";
import Image from "next/image";

export default function InstagramPictures({items}){
    const style = {
        marginTop:"20px"
    }
    return(
        <Stack sx={style} direction={"row"} spacing={1}>
            {items.map(url => (
                <Image key={url} src={url} alt="Instagram Picture" height={150} width={150}/>
            ))}
        </Stack>
    )
}