<template>
    <footer class="full-width">
        <section id="footerinfo">
            <div class="logo">
                <img src="@/assets/logo.png" alt="Amos Transportation Company Logo">
                <h2>Official Website for Amos Transportation company.</h2>
            </div>
            <div class="others">
                <nav>
                    <ul class="company" content="Company">
                        <li><router-link href="/about">About us</router-link></li>
                        <li><router-link href="/event">Events and Gallery</router-link></li>
                    </ul>
                </nav>
                <nav>
                    <ul class="services" content="Services">
                        <li><router-link href="/interstate">Interstate Travels</router-link></li>
                        <li><router-link href="/international">International Travels</router-link></li>
                        <li><router-link href="/contact">FAQ & Support</router-link></li>
                    </ul>
                </nav>
                <ul class="contact-info" content="Get in Touch">
                    <li><span>123, Jakande Street, Lagos, Nigeria</span></li>
                    <li><span><a href="mailto:amostransports@gmail.com">amostransports@gmail.com</a></span></li>
                    <li><span>08000000000</span></li>
                </ul>
            </div>
        </section>
        <hr>
        <div class="copyright">
            <p>Copyright ©2023. All right reserved | <a href="https://www.iamarvy.com.ng">íɑʍÄrvy</a></p>
        </div>
    </footer>
</template>
<style scoped>
    footer{
        background-color: var(--primary);
        color: white;
        padding-top: 3rem;
        margin-top: 1rem;
        min-height: 150px;
        /* padding-top:10%; */
        padding-bottom: 10px;
    }
    section{
        flex: 1;
        display: flex;
        flex-direction: row;
        /* justify-content: space-between; */
        gap: 1rem;
        margin: 1rem 0;
    }
    img{
        width: 100px;
    }
    h2{
        font-size: 16px;
    }
    .others{
        min-width: 70%;
        display: flex;
        flex-wrap: row;
        justify-content: center;
    }
    .others>*{
        flex: 1;
        min-width: fit-content;
    }
    ul::before{
        content: attr(content);
        font-size: 20px;
        font-weight: 600;
        height: 2rem;
        display: block;
    }
    li{
        list-style: none;
        font-size: 12px;
    }
    a{
        text-decoration: none;
        color: white;
    }
    .copyright{
        padding: 10px;
        text-align: center;
    }
    @media (max-width: 800px){
        .others{
            display: flex;
            min-width: unset;
            flex-direction: column;
            gap: 10px;
        }
        section{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 2rem;
        }
        .copyright{
            font-size: 12px;
        }
    }
    @media (max-width: 400px) {
        section{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            /* grid-template-columns: 1fr; */
        }
    }
</style>