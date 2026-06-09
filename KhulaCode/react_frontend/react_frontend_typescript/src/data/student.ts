import courses1 from '../assets/img/courses-3.jpg'
import courses2 from '../assets/img/courses-4.jpg'
import courses3 from '../assets/img/courses-5.jpg'
import courses4 from '../assets/img/courses-6.jpg'
import courses5 from '../assets/img/courses-7.jpg'
import courses6 from '../assets/img/courses-8.jpg'
import card1 from '../assets/img/card-1.png'
import card2 from '../assets/img/card-2.png'
import card3 from '../assets/img/card-3.png'
import card4 from '../assets/img/card-4.png'

export const aboutData = [
    {
        icon:'bi bi-laptop text-green',
        value:'42',
        title:'Total Courses',
        theme:'green'
    },
    {
        icon:'fas fa-user-graduate text-red',
        value:'38',
        title:'Complete Lesson',
        theme:'red'
    },
    {
        icon:'bi bi-shield-lock text-main',
        value:'04',
        title:'Achieved Certificates',
        theme:'main'
    },
]

export const coursesData = [
    {
        image:courses1,
        time:'10h 50m',
        name:`UX/UI Design Essentials: Designing User-Centered Interfaces`,
        lesson:'12 of 12 lessons complete',
        progress:'100%'
    },
    {
        image:courses2,
        time:'20h 10m',
        name:`Backend Development with Node.js: Building Scalable Web Apps`,
        lesson:'7 of 18 lessons complete',
        progress:'40%'
    },
    {
        image:courses3,
        time:'12h 40m',
        name:`Web Development Bootcamp: Learn to Build Modern Websites`,
        lesson:'17 of 17 lessons complete',
        progress:'100%'
    },
    {
        image:courses4,
        time:'17h 15m',
        name:`The Complete AI Guide: Learn ChatGPT, Generative AI & More..`,
        lesson:'6 of 10 lessons complete',
        progress:'60%'
    },
    {
        image:courses5,
        time:'14h 20m',
        name:`Advanced WordPress Techniques: Dive Deep into Styling and Layout`,
        lesson:'32 of 32 lessons complete',
        progress:'100%'
    },
    {
        image:courses6,
        time:'22h 10m',
        name:`Backend Development with Node.js: Building Scalable Web Apps`,
        lesson:'15 of 22 lessons complete',
        progress:'70%'
    },
]

export const cartData = [
    {
        image:card1,
        title:'Master Card ending in 1644',
        time:'Expires in 30/2032'
    },
    {
        image:card2,
        title:'Via Card ending in 7654',
        time:'Expires in 10/2035'
    },
    {
        image:card3,
        title:'American Expressd ending in 7892',
        time:'Expires in 25/2028'
    },
    {
        image:card4,
        title:'Crowd Pay Card ending in 6593',
        time:'Expires in 10/2044'
    },
]

export const paymentData = [
    {
        date:'10 May 2023',
        name:'WordPress Tutorial for Beginners',
        image:card1,
        cardNo: '****5695',
        status:'Paid',
        value:'$465.99'
    },
    {
        date:'05 Apr 2023',
        name:'Figma To HTML Tutorials',
        image:card2,
        cardNo: '****6935',
        status:'Paid',
        value:'$392'
    },
    {
        date:'02 Mar 2023',
        name:'The Complete Web Development in PHP',
        image:card3,
        cardNo: '****9863',
        status:'Pending',
        value:'$549.20'
    },
    {
        date:'16 Feb 2023',
        name:'Learning Laravel with JavaScript',
        image:card4,
        cardNo: '****6942',
        status:'Cancel',
        value:'$425'
    },
]