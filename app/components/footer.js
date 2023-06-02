"use client";
import Link from "next/link";
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Image from "next/image";
import {francoisOne, quicksand} from "@/app/fonts";
import {Button, Icon, Stack} from "@mui/material";


const socialMediaContainerStyle = {
    display: "flex",
    justifyContent: "center",
    width: '100%',
    marginTop: "20px",

}
const footerBoxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "end",
    marginBottom: "24px"
}

export default function Footer({urls, media}) {
    return (
        <footer className="box mask">
            <Box sx={footerBoxStyle}>
                <Image className="header-logo"
                       src="/logo_retina.png"
                       width={167.18}
                       height={57.81}
                       alt="Nav Logo"/>

                {/*Footer Nav*/}
                <nav className="footer-link">
                    <Box sx={{width: '100%'}}>
                        <Stack direction="row" spacing={0}>
                            {urls.map(({url, name}) => (
                                <Link key={name} href={url} style={{color: "white"}}>
                                    <Button variant="text" sx={{color: "white"}} className={francoisOne.className}>
                                        {name}
                                    </Button>
                                </Link>
                            ))}
                        </Stack>
                    </Box>
                </nav>

                {/*Social Media Bar*/}
                <Box sx={socialMediaContainerStyle}>
                    <Tabs>
                        {media.map(({url, name, icon}) => (
                            <Link key={name} href={url} style={{color: "white"}}>
                                <Icon fontSize={"large"}>{icon}</Icon>
                            </Link>
                        ))}
                    </Tabs>
                </Box>


                <p className={quicksand.className}>Privacy Policy <span className={`textmuted ${quicksand.className}`}>/ This is a sample website - cmasters @ 2022 / All Rights Reserved</span></p>
            </Box>
        </footer>
    )
}



