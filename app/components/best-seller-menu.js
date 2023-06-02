import {Avatar, List, ListItem, Rating} from "@mui/material";
import Box from "@mui/material/Box";
import {products} from "@/app/data";

export default function BestSellerMenu({items}) {
    const bestSellerContainerStyle = {
        border: "1px dashed",
        borderColor: "lightBlue",
        padding: "24px 18px"
    }
    const listItemStyle = {
        display: "flex",
    }
    return (
        <List sx={bestSellerContainerStyle}>
            {items.map(id => {
                const product = products.filter((product => product.id === id))[0]
                return product ? (
                        <ListItem key={product.id} sx={listItemStyle}>
                            <Box sx={{paddingRight: "15px"}}>
                            <Avatar sx={{width: "80px", height: "80px"}} src={product.pictures[0]}/>
                            </Box>
                            <Box sx={{}}>
                                <p>{product.name}</p>
                                <Rating defaultValue={product.rating} precision={0.5} readOnly/>
                                <p>${product.price.toFixed(2)}</p>
                            </Box>
                        </ListItem>
                    )
                    :
                    (
                        <ListItem>

                        </ListItem>
                    )
            })}
        </List>
    )
}