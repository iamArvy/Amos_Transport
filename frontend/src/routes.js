import LandingPage from "./components/Pages/LandingPage.vue";
import BookingsPage from "./components/Pages/BookingsPage.vue";
import Interstateroutes from '@/assets/interstateroutes.json';
import ContactPage from "./components/Pages/ContactPage.vue";
import AboutPage from "./components/Pages/AboutPage.vue";
// import ReceiptPage from "./components/ReceiptPage.vue";
// import TesterTwoVue from "./components/TesterTwo.vue";
const routes=[
    {
        name:'Home',
        path: "/",
        component: LandingPage,
        meta: {title: 'Home'}
    },
    {
        name:'Bookings',
        path: "/bookings",
        component: BookingsPage,
        meta: {title: 'Bookings'},
        props: {routes: Interstateroutes.data, title:'bookings', bgImg:'/images/naija.jpg'}
    },
    // {
    //     name:'International',
    //     path: "/international",
    //     component: InterstateTravels,
    //     meta: {title: 'International'},
    //     props: {routes: Internationalroutes.data, title:'international', bgImg:'/images/heroimgs/countriesAfrica.webp'}
    // },
    {
        name:'Contact',
        path: "/contact",
        component: ContactPage,
        meta: {title: 'Contact'}
    },
    {
        name: 'About Us',
        path: "/about",
        component: AboutPage,
        meta: {title: 'About'}
    }
    // {
    //     name: 'Receipt Page',
    //     path: "/receipt",
    //     component: ReceiptPage,
    //     meta: {title: 'Receipt Page'}
    // }
];


export default routes;
