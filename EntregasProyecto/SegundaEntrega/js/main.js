import hamburgerMenu from "./DOM/hamburger_menu.js";
import productCard from "./DOM/product_card.js";

const products = [
    {
        id: 1,
        title: 'HSK Fingertip Gaming Mouse - Red',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/19414_1.jpg?m=1630653050',
        price: '$79.90'
    },
    {
        id: 2,
        title: 'HSK Fingertip Gaming Mouse - Transparent Blue',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/19412_1.jpg?m=1630653224',
        price: '$79.90'
    },
    {
        id: 3,
        title: 'HSK Fingertip Gaming Mouse - Transparent Green',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/19413_1.jpg?m=1630653025',
        price: '$79.90'
    },
    {
        id: 4,
        title: 'HSK Fingertip Gaming Mouse - Transparent Purple',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/19415_1.jpg?m=1630653205',
        price: '$79.90'
    },
    {
        id: 5,
        title: 'HSK Plus Fingertip Wireless Gaming Mouse - Pink',
        category: 'mouse',
        type: 'wireless',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/22089_1.jpg?m=1657807325',
        price: '$109'
    },
    {
        id: 6,
        title: 'HSK Plus Fingertip Wireless Gaming Mouse - Transparent',
        category: 'mouse',
        type: 'wireless',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/21576_1.jpg?m=1652280015',
        price: '$109'
    },
    {
        id: 7,
        title: 'HSK Plus Fingertip Wireless Gaming Mouse - Transparent Blue',
        category: 'mouse',
        type: 'wireless',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/22088_1.jpg?m=1657807352',
        price: '$109'
    },
    {
        id: 8,
        title: 'HSK Plus Fingertip Wireless Gaming Mouse - Pink',
        category: 'mouse',
        type: 'wireless',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/22089_1.jpg?m=1657807325',
        price: '$109'
    },
    {
        id: 9,
        title: 'HSK Plus Fingertip Wireless Gaming Mouse - White',
        category: 'mouse',
        type: 'wireless',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/21575_1.jpg?m=1652279999',
        price: '$109'
    },
    {
        id: 10,
        title: 'Hati ACE Wireless Gaming Mouse - Transparent Blue',
        category: 'mouse',
        type: 'wireless',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/21573_1.jpg?m=1652273443',
        price: '$99'
    },
    {
        id: 11,
        title: 'Hati Gaming Mouse Black/Grey Matte',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/15250_1.jpg?m=1588925061',
        price: '$69.90'
    },
    {
        id: 12,
        title: 'Hati Gaming Mouse Grey/Green Matte',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/15688_1.jpg?m=1588925347',
        price: '$59.89'
    },
    {
        id: 13,
        title: 'Hati Gaming Mouse Limited Edition Stardust',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/15787_1.jpg?m=1588925420',
        price: '$67.89'
    },
    {
        id: 14,
        title: 'Hati Gaming Mouse Limited Edition Stardust Purple',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/16245_1.jpg?m=1588925655',
        price: '$79.90'
    },
    {
        id: 15,
        title: 'Hati Gaming Mouse White/Grey Matte',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/15251_1.jpg?m=1588925062',
        price: '$69.90'
    },
    {
        id: 16,
        title: 'Hati Gaming Mouse Red/Black Matte',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/15685_1.jpg?m=1588925344',
        price: '$69.90'
    },
    {
        id: 17,
        title: 'Hati S ACE Stardust Gaming Mouse Red/Black',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/19063_1.jpg?m=1623418074',
        price: '$78.89'
    },
    {
        id: 18,
        title: 'Hati S Gaming Mouse - Pink',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/19416_1.jpg?m=1630657368',
        price: '$69.90'
    },
    {
        id: 19,
        title: 'Hati S Gaming Mouse Red/Black',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/17099_1.jpg?m=1600261186',
        price: '$69.90'
    },
    {
        id: 20,
        title: 'Hati S Stardust Gaming Mouse',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/100036_1.jpg?m=1597151138',
        price: '$67.89'
    },
    {
        id: 21,
        title: 'Hati S Wireless Gaming Mouse - ACE Edition Stardust',
        category: 'mouse',
        type: 'wireless',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/22158_1.jpg?m=1659432944',
        price: '$119'
    },
    {
        id: 22,
        title: 'Hati S Wireless Gaming Mouse - Stardust Blue',
        category: 'mouse',
        type: 'wireless',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/21398_4.jpg?m=1649682340',
        price: '$119'
    },
    {
        id: 23,
        title: 'Hati S Wireless Gaming Mouse - Stardust Red',
        category: 'mouse',
        type: 'wireless',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/22087_1.jpg?m=1657805246',
        price: '$119'
    },
    {
        id: 24,
        title: 'Hati S Wireless Gaming Mouse - Transparent Blue',
        category: 'mouse',
        type: 'wireless',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/18478_1.jpg?m=1638192585',
        price: '$119'
    },
    {
        id: 25,
        title: 'Hati S Wireless Gaming Mouse - White',
        category: 'mouse',
        type: 'wireless',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/18478_1.jpg?m=1638192585',
        price: '$119'
    },
    {
        id: 26,
        title: 'Skoll Mini Gaming Mouse',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/16246_1.jpg?m=1591112740',
        price: '$64.90'
    },
    {
        id: 27,
        title: 'Skoll Mini Gaming Mouse - White',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/100045_1.jpg?m=1597153078',
        price: '$51.89'
    },
    {
        id: 28,
        title: 'Skoll RGB Gaming Mouse Black',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/15068_1.jpg?m=1588924957',
        price: '$59.90'
    },
    {
        id: 29,
        title: 'Skoll RGB Gaming Mouse Red',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/15681_1.jpg?m=1588925341',
        price: '$59.90'
    },
    {
        id: 30,
        title: 'Skoll RGB Gaming Mouse White',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/15069_1.jpg?m=1588924958',
        price: '$59.90'
    },
    {
        id: 31,
        title: 'Sköll Mini Gaming Mouse - Black',
        category: 'mouse',
        type: 'wired',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/19419_1.jpg?m=1630657388',
        price: '$64.90'
    },
    {
        id: 32,
        title: 'Soft Grips for G-Wolves Hati S Mini - Black',
        category: 'grip',
        type: 'soft',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/22134_1.jpg?m=1658238406',
        price: '$7.12'
    },
    {
        id: 33,
        title: 'Soft Grips for G-Wolves Hati S Mini - Blue',
        category: 'grip',
        type: 'soft',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/22137_1.jpg?m=1658238422',
        price: '$7.12'
    },
    {
        id: 34,
        title: 'Soft Grips for G-Wolves Hati S Mini - Orange',
        category: 'grip',
        type: 'soft',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/22136_1.jpg?m=1658238416',
        price: '$7.12'
    },
    {
        id: 35,
        title: 'Soft Grips for G-Wolves Hati S Mini - Red',
        category: 'grip',
        type: 'soft',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/22138_1.jpg?m=1658238428',
        price: '$7.12'
    },
    {
        id: 36,
        title: 'Soft Grips for G-Wolves Hati S Mini - White',
        category: 'grip',
        type: 'soft',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/22135_1.jpg?m=1658238411',
        price: '$7.12'
    },
    {
        id: 37,
        title: 'YHG Grips G-Wolves Hati HT-M - White',
        category: 'grip',
        type: 'yhg',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/19673_1.jpg?m=1636111617',
        price: '$10.29'
    },
    {
        id: 38,
        title: 'YHG Grips G-Wolves Hati HT-M - Pink',
        category: 'grip',
        type: 'yhg',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/19603_1.jpg?m=1632485403',
        price: '$10.29'
    },
    {
        id: 39,
        title: ' Mousepad G-Wolves - Black',
        category: 'grip',
        type: 'mousepad',
        src: 'https://us.maxgaming.com/bilder/artiklar/zoom/100046_1.jpg?m=1600238345',
        price: '$15.09'
    },
]


const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    productCard("")
});