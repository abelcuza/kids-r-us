import Box from "@mui/material/Box";
import {List, ListItem} from "@mui/material";

export default function CategoriesMenu({categories}){
    const listStyle = {
        border: "1px dashed",
        borderColor: "lightBlue",
        padding: "24px 18px"
    }
    const listItemStyle = {
        display: "flex",
        justifyContent:"space-between",
        borderBottom:"1px solid",
        borderBottomColor: "lightBlue",
        padding: "0"
    }
    return(
        <List sx={listStyle}>
            {categories.map(({name, amount})=>(
                <ListItem key={name} sx={listItemStyle}>
                    <p>{name}</p>
                    <p>({amount})</p>
                </ListItem>
            ))}
        </List>
    )
}