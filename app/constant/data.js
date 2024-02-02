// icon
import { FaRegUser , FaRegHeart  } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";


export const nabList = [
    {name: "HOME", path: '/'},
    {name: "STORE", path: '/store'},
    {name: "ACCESSORIES", path: '/accessories'},
    {name: "BRAND", path: '/brand'},
    {name: "PAGES", path: '/pages'},
    {name: "ABOUT US", path: '/about-us'},
    {name: "NEWS", path: '/'},
    {name: "CONTACT US ", path: '/contact-us'},
];

export const nabIcon = [
    {icon:<IoSearchOutline/>, path: "/"},
    {icon:<FaRegUser />, path: "/"},
    {icon:<BsCart3/>, path: "/"},
    {icon:<FaRegHeart />, path: "/"},
];