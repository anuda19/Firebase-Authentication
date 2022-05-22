import {FaHome, FaUserFriends, FaFolderOpen, FaLinkedin, FaCalendarAlt, FaInstagram, FaFacebook, FaTwitter, FaUserAlt} from 'react-icons/fa'
export const  links = [
    {
        id: 1,
        url: '/home',
        text: 'home',
        icon: <FaHome/>
    },
    {
        id: 2,
        url: '/team',
        text: 'team',
        icon: <FaUserFriends/>
    },
    {
        id: 3,
        url: '/calender',
        text: 'calender',
        icon: <FaCalendarAlt/>
    },
    {
        id: 4,
        url: '/Documnets',
        text: 'Documnets',
        icon: <FaFolderOpen/>
    }
]

export const social = [
    {
        id: 1,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />
    },
    {
        id: 2,
        url: 'https://www.facebook.com',
        icon: <FaFacebook />
    },
    {
        id: 3,
        url: 'https://www.linkedin.com',
        icon: <FaLinkedin />
    },
    {
        id: 4,
        url: 'https://www.instagram.com',
        icon: <FaInstagram />
    }
]

export const modalData = [
    {
        sno: 1,
        text: "If you want to proceed further you must have to do login here ",
        icon: <FaUserAlt />
    },
    {
        sno: 2,
        text: "After that you will be eligible to take benefits from our site",
        icon: <FaUserAlt />
    },
    {
        sno: 3,
        text: "Login",
        inp: <input type="text" />,
        icon: <FaUserAlt />
    }
]