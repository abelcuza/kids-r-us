"use client";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export const navLinks = [
    {
        name: "Home",
        url: '/'
    },
    {
        name: "Shop Features",
        url: '/shop'
    },
    {
        name: "Clothes",
        url: '/'
    },
    {
        name: "Pages",
        url: '/'
    },
    {
        name: "Shortcodes",
        url: '/'
    },
    {
        name: "Post Types",
        url: '/'
    },
]

export const footerLinks = [
    {
        name: "shop",
        url: "/"
    },
    {
        name: "sale",
        url: "/"
    },
    {
        name: "girls",
        url: "/"
    },
    {
        name: "boys",
        url: "/"
    },
    {
        name: "lookbook",
        url: "/"
    },
    {
        name: "contacts",
        url: "/"
    },
]

export const footerSocialMedia = [
    {
        name: "facebook",
        url: "/",
        icon: <FacebookIcon/>
    },
    {
        name: "instagram",
        url: "/",
        icon: <InstagramIcon/>
    },
    {
        name: "twitter",
        url: "/",
        icon: <TwitterIcon/>
    }
]

export const categories = [
    {
        name: "Baby & Toddler",
        url: "/homepage/baby.png",
        width: "150",
        height: "180",
    },
    {
        name: "For Girls",
        url: "/homepage/girl.png",
        width: "150",
        height: "180",
    },
    {
        name: "For Boys",
        url: "/homepage/boy.png",
        width: "150",
        height: "180",
    },
    {
        name: "Home & Toys",
        url: "/homepage/toys.png",
        width: "150",
        height: "180",
    },
]

export const menuCategories = [
    {
        name: "For Babies",
        amount: "11",
    },
    {
        name: "For Boys",
        amount: "19",
    },
    {
        name: "For Girls",
        amount: "20",
    },
    {
        name: "For Home",
        amount: "14",
    },
    {
        name: "For Play",
        amount: "8",
    },
]

export const products = [
    {
        id: "001",
        name: "Blue Dress",
        category: "For Girls",
        price: 13.00,
        pictures: [
            "/products/girls/blue_dress/girls-2-2-580x870.jpg",
            "/products/girls/blue_dress/girls-2-3-580x870.jpg"
        ],
        amount_stock: 3,
        tags: ["Dress", "Blue"],
        rating: 3.5,
        arrival_date: new Date("2023-05-29")
    },
    {
        id: "002",
        name: "Blue Flowers Dress",
        category: "For Girls",
        price: 15.99,
        pictures: [
            "/products/girls/blue_flowers_dress/girls-8-1-580x870.jpg",
            "/products/girls/blue_flowers_dress/girls-8-2-580x870.jpg"
        ],
        amount_stock: 5,
        tags: ["Blue", "Flowers", "Dress"],
        rating: 2,
        arrival_date: new Date("2023-05-13")
    },
    {
        id: "003",
        name: "Blue Pink Hood",
        category: "For Girls",
        price: 8.00,
        pictures: [
            "/products/girls/blue_pink_hood/girls-7-1-580x870.jpg",
            "/products/girls/blue_pink_hood/girls-7-2-580x870.jpg"
        ],
        amount_stock: 0,
        tags: ["Blue", "Pink", "Hood"],
        rating: 4.5,
        arrival_date: new Date("2023-04-05")
    },
    {
        id: "004",
        name: "Blue Stripped Dress",
        category: "For Girls",
        price: 13.25,
        pictures: [
            "/products/girls/blue_striped_dress/girls-4-1-580x870.jpg",
            "/products/girls/blue_striped_dress/girls-4-2-580x870.jpg"
        ],
        amount_stock: 0,
        tags: ["Blue", "Dress"],
        rating: 4.3,
        arrival_date: new Date("2023-05-28")
    },
    {
        id: "005",
        name: "Brown Pants",
        category: "For Girls",
        price: 16.20,
        pictures: [
            "/products/girls/brown_pants/girls-11-1-580x870.jpg",
            "/products/girls/brown_pants/girls-11-2-580x870.jpg"
        ],
        amount_stock: 0,
        tags: ["Brown", "Pants"],
        rating: 3.3,
        arrival_date: new Date("2023-03-18")
    },
    {
        id: "006",
        name: "Dark Blue T-Shirt",
        category: "For Girls",
        price: 12.00,
        pictures: [
            "/products/girls/dark_blue_t_shirt/girls-4-580x870.jpg"
        ],
        amount_stock: 0,
        tags: ["Dark Blue", "T-Shirt"],
        rating: 2.7,
        arrival_date: new Date("2023-04-01")
    },
    {
        id: "007",
        name: "Denim Jacket",
        category: "For Girls",
        price: 15.55,
        pictures: [
            "/products/girls/denim_jacket/girls-3-1-580x870.jpg",
            "/products/girls/denim_jacket/girls-3-2-580x870.jpg"
        ],
        amount_stock: 2,
        tags: ["Jacket"],
        rating: 4.8,
        arrival_date: new Date("2023-04-11")
    },
    {
        id: "008",
        name: "Fashion Sweatshirt",
        category: "For Girls",
        price: 13.35,
        pictures: [
            "/products/girls/fashion_sweatshirt/girls-2-580x870.jpg"
        ],
        amount_stock: 6,
        tags: ["Sweatshirt"],
        rating: 3.3,
        arrival_date: new Date("2023-05-25")
    },
    {
        id: "009",
        name: "Flower Dress",
        category: "For Girls",
        price: 11.60,
        pictures: [
            "/products/girls/flower_dress/girls-7-580x870.jpg"
        ],
        amount_stock: 11,
        tags: ["Flowers", "Dress"],
        rating: 3.7,
        arrival_date: new Date("2023-03-28")
    },
    {
        id: "010",
        name: "Flower Skirt",
        category: "For Girls",
        price: 11.50,
        pictures: [
            "/products/girls/flower_skirt/girls-3-580x870.jpg"
        ],
        amount_stock: 9,
        tags: ["Flowers", "Skirt"],
        rating: 1.2,
        arrival_date: new Date("2023-03-26")
    },
    {
        id: "011",
        name: "Olive Blouse",
        category: "For Girls",
        price: 14.00,
        pictures: [
            "/products/girls/olive_blouse/girls-10-1-580x870.jpg",
            "/products/girls/olive_blouse/girls-10-2-580x870.jpg"
        ],
        amount_stock: 0,
        tags: ["Olive", "Blouse"],
        rating: 3.2,
        arrival_date: new Date("2023-05-01")
    },
    {
        id: "012",
        name: "Pink Dress",
        category: "For Girls",
        price: 10.00,
        pictures: [
            "/products/girls/pink_dress/girls-6-1-580x870.jpg",
            "/products/girls/pink_dress/girls-6-2-580x870.jpg"
        ],
        amount_stock: 11,
        tags: ["Pink", "Dress"],
        rating: 4.1,
        arrival_date: new Date("2023-01-30")
    },
    {
        id: "013",
        name: "Printed Blouse",
        category: "For Girls",
        price: 10.55,
        pictures: [
            "/products/girls/printed_blouse/girls-10-580x870.jpg"
        ],
        amount_stock: 23,
        tags: ["Blouse"],
        rating: 3.0,
        arrival_date: new Date("2023-02-14")
    },
    {
        id: "014",
        name: "Rainbow Dress",
        category: "For Girls",
        price: 9.99,
        pictures: [
            "/products/girls/rainbow_dress/girls-1-1-580x870.jpg",
            "/products/girls/rainbow_dress/girls-1-2-580x870.jpg"
        ],
        amount_stock: 1,
        tags: ["Rainbow", "Dress"],
        rating: 3.4,
        arrival_date: new Date("2023-05-14")
    },
    {
        id: "015",
        name: "Rainbow Sweatshirt",
        category: "For Girls",
        price: 12.20,
        pictures: [
            "/products/girls/rainbow_sweatshirt/girls-9-580x870.jpg"
        ],
        amount_stock: 0,
        tags: ["Rainbow", "Sweatshirt"],
        rating: 4.4,
        arrival_date: new Date("2023-04-27")
    },
    {
        id: "016",
        name: "White Skirt",
        category: "For Girls",
        price: 13.75,
        pictures: [
            "/products/girls/white_skirt/girls-8-580x870.jpg"
        ],
        amount_stock: 5,
        tags: ["White", "Skirt"],
        rating: 5,
        arrival_date: new Date("2023-05-30")
    }
]

export const bestSeller = ["001", "011", "005", "007"]

export const instagram_pictures = [
    "/instagram/84981049_620107085435507_4260875787090681190_nlow.jpg",
    "/instagram/85051426_2060664737412512_8458893884651247910_nlow.jpg",
    "/instagram/85069033_185901059177965_6767010623440980864_nlow.jpg",
    "/instagram/87339849_530805007551424_292323017375800029_nlow.jpg",
    "/instagram/87413583_2660130777540405_5722961474466513534_nlow.jpg"
]