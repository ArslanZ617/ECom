import { blogimages, contactImgs, feaimages, proimages } from './Images'

import image1 from '../Images/img/banner/b17.jpg'
import image2 from '../Images/img/banner/b10.jpg'
import image3 from '../Images/img/banner/b7.jpg'
import image4 from '../Images/img/banner/b4.jpg'
import image5 from '../Images/img/banner/b18.jpg'
import { useState } from 'react'


let empty = 0;
export const lists = [
    {
        title: 'Home',
        class: 'navItem',
        url: '/home'
    },

    {
        title: 'Shop',
        class: 'navItem',
        url: '/shop'
    },

    {
        title: 'Blog',
        class: 'navItem',
        url: '/blog'
    },

    {
        title: 'About',
        class: 'navItem',
        url: '/about'
    },

    {
        title: 'Contact',
        class: 'navItem',
        url: '/contact'
    },

    {
        title: <i className={"mdi mdi-" + (empty === 0 ? 'shopping-outline' : 'shopping')} />,
        class: 'navItem',
        url: '/cart'
    }
];


export const features = [
    {
        image: feaimages[0],
        title: 'Free Shipping',
        myStyle: {
            backgroundColor: '#fddde4'
        }

    },

    {

        image: feaimages[1],
        title: 'Online Order',
        myStyle: {
            backgroundColor: '#cdebbc'

        }
    },

    {
        image: feaimages[2],
        title: 'Save Money',
        myStyle: {
            backgroundColor: '#d1e8f2'
        }
    },

    {
        image: feaimages[3],
        title: 'Promotions',
        myStyle: {
            backgroundColor: '#cdd4f8'
        }
    },

    {
        image: feaimages[4],
        title: 'Happy Sell',
        myStyle: {
            backgroundColor: '#f6dbf6'
        }
    },

    {
        image: feaimages[5],
        title: 'F24/7 Support',
        myStyle: {
            backgroundColor: '#fff2e5'
        }
    },
];


export const productImages = [
    {
        image: proimages[0],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '$75',
        rating: '5'
    },

    {
        image: proimages[1],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '$75',
        rating: '5'
    },

    {
        image: proimages[2],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '$78',
        rating: '5'
    },

    {
        image: proimages[3],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '$78',
        rating: '5'
    },

    {
        image: proimages[4],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '$78',
        rating: '5'
    },

    {
        image: proimages[5],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '$78',
        rating: '5'
    },

    {
        image: proimages[6],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '$78',
        rating: '5'
    },

    {
        image: proimages[7],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '$78',
        rating: '5'
    },

    {
        image: proimages[8],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '$78',
        rating: '5'
    },

    {
        image: proimages[9],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '$78',
        rating: '5'
    },

    {
        image: proimages[10],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '$78',
        rating: '3'
    },

    {
        image: proimages[11],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '$78',
        rating: '5'
    },

    {
        image: proimages[12],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '$78',
        rating: '5'
    },

    {
        image: proimages[13],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '$78',
        rating: '4'
    },

    {
        image: proimages[14],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '$78',
        rating: '5'
    },

    {
        image: proimages[15],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '$78',
        rating: '3'
    }
];


export const arrivalImages = [
    {
        image: proimages[0],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '78',
        rating: '5'
    },

    {
        image: proimages[1],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '75',
        rating: '5'
    },

    {
        image: proimages[2],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '78',
        rating: '5'
    },

    {
        image: proimages[3],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '78',
        rating: '5'
    },

    {
        image: proimages[4],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '78',
        rating: '5'
    },

    {
        image: proimages[5],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '78',
        rating: '5'
    },

    {
        image: proimages[6],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '78',
        rating: '5'
    },

    {
        image: proimages[7],
        company: 'adidas',
        title: 'Cartoon Astronout T-Shirts',
        price: '78',
        rating: '5'
    }
];

export const callactions = [
    {
        tag: 'crazy deals',
        head: 'buy 1 get 1 free',
        desc: "The best classic dress is on sale at ZA's",
        cls: 'outlined',
        btn: 'Learn More',
        image: image1
    },

    {
        tag: 'spring/summer',
        head: 'upcomming season',
        desc: "The best classic dress is on sale at ZA's",
        cls: 'solid',
        btn: 'Collection',
        image: image2
    }
];



export const textactions = [
    {
        head: 'SEASONAL SALE',
        desc: "Winter Collection - 50% Off!",
        image: image3
    },
    {
        head: 'NEW FOOTWEAR COLLECTION',
        desc: "Spring / Summer 2022",
        image: image4
    },
    {
        head: 'T-SHIRTS',
        desc: "New Trendy Prints",
        image: image5
    }
];

export const footIcons = [
    "fa-facebook-f",
    "fa-twitter",
    "fa-instagram",
    "fa-pinterest-p",
    "fa-youtube"
];

export const footLinks = [
    {
        head: 'About',
        list: [
            'About Us', 'Delivery Information', 'Privacy Policy', 'Terms & Conditions', 'Contact Us'
        ],
    },

    {

        head: 'My Account',
        list: [
            'Sign In', 'View Cart', 'My Wishlist', 'Track My Order', 'Help'
        ]
    }
];


export const cartImgs = [proimages[0], proimages[1], proimages[2], proimages[3]];


export const blog = [
    {
        date: '13/01',
        image: blogimages[0],
        title: 'The Cotton-Jersey Zip-Up Hoodie',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sit minus, illum dolore explicabo, corporis sapiente saepe odio laboriosam laudantium id deserunt porro est eligendi.'
    },

    {
        date: '13/01',
        image: blogimages[1],
        title: 'The Cotton-Jersey Zip-Up Hoodie',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sit minus, illum dolore explicabo, corporis sapiente saepe odio laboriosam laudantium id deserunt porro est eligendi.'
    },

    {
        date: '13/01',
        image: blogimages[2],
        title: 'The Cotton-Jersey Zip-Up Hoodie',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sit minus, illum dolore explicabo, corporis sapiente saepe odio laboriosam laudantium id deserunt porro est eligendi.'
    },

    {
        date: '13/01',
        image: blogimages[3],
        title: 'The Cotton-Jersey Zip-Up Hoodie',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sit minus, illum dolore explicabo, corporis sapiente saepe odio laboriosam laudantium id deserunt porro est eligendi.'
    },

    {
        date: '13/01',
        image: blogimages[4],
        title: 'The Cotton-Jersey Zip-Up Hoodie',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sit minus, illum dolore explicabo, corporis sapiente saepe odio laboriosam laudantium id deserunt porro est eligendi.'
    },

    {
        date: '13/01',
        image: blogimages[5],
        title: 'The Cotton-Jersey Zip-Up Hoodie',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sit minus, illum dolore explicabo, corporis sapiente saepe odio laboriosam laudantium id deserunt porro est eligendi.'
    },

    {
        date: '13/01',
        image: blogimages[6],
        title: 'The Cotton-Jersey Zip-Up Hoodie',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sit minus, illum dolore explicabo, corporis sapiente saepe odio laboriosam laudantium id deserunt porro est eligendi.'
    }
];

export const contacts = [
    {
        icon: 'map-outline',
        text: '56 Glassford Street Glasgow GI IUL New York'
    },

    {
        icon: 'email-outline',
        text: 'abcd123@gmail.com'
    },

    {
        icon: 'phone',
        text: '+01 234 567 899'
    },

    {
        icon: 'clock-outline',
        text: 'Monday to Saturday: 9:00 A.M to 4:00 P.M'
    }


];

export const customerCare = [
    {
        image: contactImgs[0],
        name: 'John Doe',
        desig: 'Senior Marketing Manager',
        phone: '+ 000 123 000 77 88',
        email: 'johndoe@gmail.com'
    },

    {
        image: contactImgs[1],
        name: 'John William Smith',
        desig: 'Senior Quality Officer',
        phone: '+ 000 123 000 77 88',
        email: 'johnsmith121@gmail.com'
    },

    {
        image: contactImgs[2],
        name: 'Emma Stone',
        desig: 'Software Architect Manager',
        phone: '+ 000 123 000 77 88',
        email: 'emmastone@gmail.com'
    }
];