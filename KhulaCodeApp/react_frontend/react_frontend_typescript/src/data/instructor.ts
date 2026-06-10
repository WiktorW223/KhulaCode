import courses1 from '../assets/img/courses-1.jpg'
import courses2 from '../assets/img/courses-2.jpg'
import courses3 from '../assets/img/courses-3.jpg'
import courses4 from '../assets/img/courses-4.jpg'
import courses5 from '../assets/img/courses-5.jpg'
import courses6 from '../assets/img/courses-6.jpg'
import courses7 from '../assets/img/courses-7.jpg'
import courses8 from '../assets/img/courses-8.jpg'

import avatar1 from '../assets/img/avatar-1.jpg'
import avatar2 from '../assets/img/avatar-2.jpg'
import avatar3 from '../assets/img/avatar-3.jpg'
import avatar4 from '../assets/img/avatar-4.jpg'
import avatar5 from '../assets/img/avatar-5.jpg'
import avatar6 from '../assets/img/avatar-6.jpg'

export const instructorAbout = [
    {
        icon:'bi bi-laptop text-green',
        value:'42',
        title:'Total Courses',
        theme:'green'
    },
    {
        icon:'fas fa-user-graduate text-red',
        value:'44k',
        title:'Total Students',
        theme:'red'
    },
    {
        icon:'bi bi-gem text-main',
        value:'17k',
        title:'Enrolled Students',
        theme:'main'
    },
]

export const recentSellingCourses = [
    {
        id:1,
        image:courses1,
        title:'Building Scalable APIs with GraphQL',
        selling:42,
        amount:'$18,432',
        time:'06 months'
    },
    {
        id:2,
        image:courses2,
        title:'Building Scalable APIs with GraphQL',
        selling:36,
        amount:'$20,560',
        time:'09 months'
    },
    {
        id:3,
        image:courses3,
        title:'Building Scalable APIs with GraphQL',
        selling:44,
        amount:'$45,550',
        time:'12 months'
    },
    {
        id:4,
        image:courses4,
        title:'Building Scalable APIs with GraphQL',
        selling:65,
        amount:'$22,568',
        time:'18 months'
    },
    {
        id:5,
        image:courses5,
        title:'Building Scalable APIs with GraphQL',
        selling:75,
        amount:'$36,980',
        time:'08 months'
    },
]

export const courseData = [
    {
        id:1,
        image:courses1,
        name:'SEO Crash Course: Ranking Your Website',
        lectures:18,
        completed:6,
        enrolled:625,
        status:'Live',
        price:249
    },
    {
        id:2,
        image:courses2,
        name:'JavaScript Interactive Web Development',
        lectures:27,
        completed:11,
        enrolled:0,
        status:'Rejected',
        price:149
    },
    {
        id:3,
        image:courses3,
        name:'WordPress for Beginners: Creating Your Own Blog',
        lectures:20,
        completed:12,
        enrolled:450,
        status:'Disable',
        price:159
    },
    {
        id:4,
        image:courses4,
        name:'HTML & CSS Basics: Building Your First Website',
        lectures:45,
        completed:22,
        enrolled:0,
        status:'Rejected',
        price:249
    },
    {
        id:5,
        image:courses5,
        name:`Web Design Essentials: A Beginner's Guide`,
        lectures:26,
        completed:10,
        enrolled:825,
        status:'Live',
        price:345
    },
    {
        id:6,
        image:courses6,
        name:`Web Design Essentials: A Beginner's Guide`,
        lectures:26,
        completed:10,
        enrolled:825,
        status:'Live',
        price:345
    },
    {
        id:7,
        image:courses7,
        name:'Responsive Web Design for Mobile Users',
        lectures:40,
        completed:22,
        enrolled:590,
        status:'Live',
        price:299
    },
    {
        id:8,
        image:courses8,
        name:'UI/UX Design Creating User-Friendly Interfaces',
        lectures:20,
        completed:7,
        enrolled:546,
        status:'Live',
        price:120
    },
]

export const earningAbout = [
    {
        icon:'bi bi-coin text-green',
        theme:'green',
        value:'$890',
        title:'Sales This Month'
    },
    {
        icon:'bi bi-wallet2 text-red',
        theme:'red',
        value:'$2,580',
        title:'Next Payout'
    },
    {
        icon:'bi bi-piggy-bank text-main',
        theme:'main',
        value:'$60,550',
        title:'Sales Overall'
    },
]

export const studentList = [
    {
        image:avatar1,
        name:'Jake Thompson',
        location:'Las Vegas',
        progress:'80%',
        course:12,
        date:'10 Jan 2025'
    },
    {
        image:avatar2,
        name:'Chris Walker',
        location:'San Diego',
        progress:'60%',
        course:16,
        date:'12 Feb 2025'
    },
    {
        image:avatar3,
        name:'Ryan Mitchell',
        location:'San Francisco',
        progress:'70%',
        course:21,
        date:'06 Mar 2025'
    },
    {
        image:avatar4,
        name:'Matt Cooper',
        location:'San Antonio',
        progress:'50%',
        course:17,
        date:'02 Apr 2025'
    },
    {
        image:avatar5,
        name:'Emily Parker',
        location:'Las Vegas',
        progress:'60%',
        course:22,
        date:'06 Apr 2025'
    },
    {
        image:avatar6,
        name:'Megan Turner',
        location:'New Orleans',
        progress:'90%',
        course:28,
        date:'02 May 2025'
    },
      {
        image:avatar2,
        name:'Chris Walker',
        location:'San Diego',
        progress:'60%',
        course:16,
        date:'12 Feb 2025'
    },
    {
        image:avatar1,
        name:'Jake Thompson',
        location:'Las Vegas',
        progress:'80%',
        course:12,
        date:'10 Jan 2025'
    },
]

export const orderData = [
    {
        title:`Web Design A Beginner's Guide`,
        id:'#LN12635',
        date:'10 Jan 2025',
        amount:'$156',
        payment:'PayPal'
    },
    {
        title:`HTML & CSS Basics for Beginners`,
        id:'#LN12636',
        date:'05 Jan 2025',
        amount:'$167',
        payment:'Debit Card'
    },
    {
        title:`WordPress for Beginners: Creating Your Blog`,
        id:'#LN12637',
        date:'10 Dec 2024',
        amount:'$189',
        payment:'Credit Card'
    },
    {
        title:`JavaScript Interactive Web Development`,
        id:'#LN12638',
        date:'18 Nov 2024',
        amount:'$362',
        payment:'PayPal'
    },
    {
        title:`SEO Crash Course: Ranking Your Website`,
        id:'#LN12639',
        date:'08 Nov 2024',
        amount:'$265',
        payment:'Credit Card'
    },
    {
        title:`E-Commerce Setting Up Your Online Store`,
        id:'#LN12640',
        date:'26 Oct 2024',
        amount:'$450',
        payment:'PayPal'
    },
    {
        title:`Responsive Web Design for Mobile Users`,
        id:'#LN12641',
        date:'06 Sep 2024',
        amount:'$136',
        payment:'Debit Card'
    },
    {
        title:`UI/UX Design User-Friendly Interfaces`,
        id:'#LN12642',
        date:'12 Sep 2024',
        amount:'$250',
        payment:'Credit Card'
    },
]

export const reviewData = [
    {
        image:avatar1,
        name:'Jake Thompson',
        time:'10 Jan 2024 at 10:10AM',
        title:'JavaScript DOM in 30 Minutes',
        desc:'The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread.',
        review:[
            'fas fa-star text-warning',
            'fas fa-star text-warning',
            'fas fa-star text-warning',
            'fas fa-star text-warning',
            'far fa-star text-warning',
        ]
    },
    {
        image:avatar2,
        name:'Lauren Hayes',
        time:'10 Jan 2024 at 10:10AM',
        title:'JavaScript DOM in 30 Minutes',
        desc:'The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread.',
        review:[
            'fas fa-star text-warning',
            'fas fa-star text-warning',
            'fas fa-star text-warning',
            'fas fa-star text-warning',
            'far fa-star text-warning',
        ]
    },
    {
        image:avatar3,
        name:'Alex Bennett',
        time:'10 Jan 2024 at 10:10AM',
        title:'JavaScript DOM in 30 Minutes',
        desc:'The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread.',
        review:[
            'fas fa-star text-warning',
            'fas fa-star text-warning',
            'fas fa-star text-warning',
            'fas fa-star text-warning',
            'far fa-star text-warning',
        ]
    },
    {
        image:avatar4,
        name:'Megan Turner',
        time:'10 Jan 2024 at 10:10AM',
        title:'JavaScript DOM in 30 Minutes',
        desc:'The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread.',
        review:[
            'fas fa-star text-warning',
            'fas fa-star text-warning',
            'fas fa-star text-warning',
            'fas fa-star text-warning',
            'far fa-star text-warning',
        ]
    },
    {
        image:avatar5,
        name:'Chris Walker',
        time:'10 Jan 2024 at 10:10AM',
        title:'JavaScript DOM in 30 Minutes',
        desc:'The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread.',
        review:[
            'fas fa-star text-warning',
            'fas fa-star text-warning',
            'fas fa-star text-warning',
            'fas fa-star text-warning',
            'far fa-star text-warning',
        ]
    },
]

export const payoutData = [
    {
        name:'Successful payout #LN2325',
        amount:'$2,785',
        status:'Paid',
        date:'10 Jan 2025'
    },
    {
        name:'Successful payout #LN2326',
        amount:'$8,756',
        status:'Cancelled',
        date:'15 Dec 2024'
    },
    {
        name:'Successful payout #LN2327',
        amount:'$4,589',
        status:'Paid',
        date:'08 Mar 2024'
    },
    {
        name:'Successful payout #LN2328',
        amount:'$3,750',
        status:'Cancelled',
        date:'05 Oct 2024'
    },
    {
        name:'Successful payout #LN2329',
        amount:'$3,857',
        status:'Paid',
        date:'10 Jan 2024'
    },
]