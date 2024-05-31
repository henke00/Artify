"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_CATEGORIES = void 0;
exports.PRODUCT_CATEGORIES = [
    {
        label: 'Images',
        value: 'images',
        featured: [
            {
                name: 'Our Top Picks',
                href: "/products?category=images",
                imageSrc: '/nav/Images/stock1.webp',
            },
            {
                name: 'New Arrivals',
                href: '/products?category=images&sort=desc',
                imageSrc: '/nav/Images/stock2.webp',
            },
            {
                name: 'Bestsellers',
                href: '/products?category=images',
                imageSrc: '/nav/Images/stock3.jpg',
            },
        ],
    },
    {
        label: 'Videos',
        value: 'videos',
        featured: [
            {
                name: 'Our Top Picks',
                href: "/products?category=videos",
                imageSrc: '/nav/Videos/Vstock1.jpg',
            },
            {
                name: 'New Arrivals',
                href: '/products?category=videos&sort=desc',
                imageSrc: '/nav/Videos/Vstock2.webp',
            },
            {
                name: 'Bestsellers',
                href: '/products?category=videos',
                imageSrc: '/nav/Videos/Vstock3.webp',
            },
        ],
    },
];
