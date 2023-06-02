import ImageList from '@mui/material/ImageList';
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";

export default function NewArrivals({items}) {
    const productBoxStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    return (
        <Grid container spacing={3} sx={{marginTop: "0"}}>
            {items.map(({id, name, category, price, pictures})=>(
                <Grid xs={4} key={id}>
                    <Box sx={productBoxStyle}>
                        <Image src={pictures[0]} alt={name} width={232} height={348}/>

                    <span>{category}</span>
                    <p>{name}</p>
                    <p>${price.toFixed(2)}</p>
                    </Box>
                </Grid>
            ))}

        </Grid>
    );
}
