"use client";
import Box from "@mui/material/Box";
import Image from "next/image";
import {Button} from "@mui/material";
import {bestSeller, categories, instagram_pictures, menuCategories, products} from "@/app/data";
import Category from "@/app/components/category";
import SearchBar from "@/app/components/search-bar";
import CategoriesMenu from "@/app/components/categories-menu";
import BestSellerMenu from "@/app/components/best-seller-menu";
import NewArrivals from "@/app/components/new-arrivals";
import InstagramPictures from "@/app/components/instagram-pictures";
import SuscribeNewsletter from "@/app/components/suscribe-newsletter";
import {francoisOne, gildaDisplay, quicksand} from "@/app/fonts";

export default function Home() {
    const categorySectionStyle = {
        display: "flex",
        justifyContent: "center",
        border: "1px dashed",
        borderColor: "lightblue",
        padding: "40px 80px"
    }
    return (
        <>
            <section>
                <Box sx={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                    <div style={{position: "relative"}}>
                        <Image src="/homepage/slider-1.jpg" width={768} height={518} alt="homepage-slider-1"/>
                        <div style={{position: "absolute", left: "5%", top: "60%", color: "white"}}>
                            <h1 className={francoisOne.className}>JUMPSUITS</h1>
                            <p>Confortable clothes for your little babbies</p>
                            <Button variant="contained">Discover</Button>
                        </div>
                    </div>
                    <div>
                        <Image src="/homepage/girls-power.jpg" alt="homepage-slider-2" width={340} height={418}/>
                        <Box sx={{textAlign: "center"}}>
                            <h2 className={francoisOne.className}>GIRLS POWER</h2>
                            <span className="text-muted">For a colorfull summer</span>
                        </Box>

                    </div>
                </Box>
            </section>
            <section style={categorySectionStyle}>
                <Box sx={{display: "flex", justifyContent: "space-between", width: "100%", margin: "0px 30px"}}>
                    {categories.map((category) => (
                        <Category key={category.name} {...category} />
                    ))}
                </Box>
            </section>
            <section style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h2 className={francoisOne.className}>NEW ARRIVALS</h2>
                <Image src="/hr.png" width={76} height={12}/>
                <Box sx={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                    {/*Left Side*/}
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "25%",
                        margin: "0 10px",
                        marginTop: "30px"
                    }}>
                        {/*Search Bar*/}
                        <SearchBar/>

                        {/*Category Menu*/}
                        <Box sx={{margin: "10px 0"}}>
                            <h3>CATEGORIES</h3>
                            <CategoriesMenu categories={menuCategories}/>
                        </Box>

                        {/*Best Seller*/}
                        <Box sx={{margin: "10px 0"}}>
                            <h3>BEST SELLERS</h3>
                            <BestSellerMenu items={bestSeller}/>
                        </Box>
                        <Box sx={{margin: "10px 0"}}>
                            <SuscribeNewsletter/>
                        </Box>
                    </Box>
                    {/*Right Side*/}
                    <Box sx={{width: "70%", marginTop: "30px"}}>
                        {/*New Arrivals*/}
                        <NewArrivals items={products.sort((a, b) => {
                            if (a.arrival_date.getTime() > b.arrival_date.getTime()) {
                                return -1;
                            } else if (a.arrival_date.getTime() < b.arrival_date.getTime()) {
                                return 1;
                            } else {
                                return 0;
                            }
                        }).slice(0, 9)}/>
                    </Box>
                </Box>
            </section>
            <section style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h2 className={francoisOne.className}>INSTAGRAM @KIDSRUS</h2>
                <Image src="/hr.png" width={76} height={12} alt={"hr"}/>
                <InstagramPictures items={instagram_pictures}/>
            </section>

        </>
    )
}
