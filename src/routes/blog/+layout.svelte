<script lang="ts">
    import { MeterChart } from '@carbon/charts-svelte';
    import { Statuses, ChartTheme } from '@carbon/charts';
    import '@carbon/charts-svelte/styles.css';
    export let data;
</script>

<aside>
    <section id="header">
        <img src="/eye-of-ra.png" alt="">
        <h3>Kamil Śmigielski</h3>
        <p>Software Developer</p>
        <p>Electronics Engineer</p>
    </section>
    <section id="personal">
        <p>Residence: <span>Wrocław, Poland</span></p>
        <p>Age: <span>25</span></p>
    </section>
    <section id="languages">aa</section>
    <section id="goals">
    <MeterChart 
            data={[
                {group: "HTML", value: "90"},
            ]}
            options={{
                meter: {
                    peak: 60,
                    status: {
                        ranges: [{
                            range: [
                                0,
                                60
                            ], status: Statuses.DANGER
                            },
                            {
                            range: [
                                60,
                                80
                            ], status: Statuses.SUCCESS
                            },
                            {
                            range: [
                                80,
                                100
                            ], status: Statuses.DANGER
                            }
                        ]
                    }
                },
                toolbar: {
                    enabled: false
                },
                theme: ChartTheme.G100,
                height: "50px"
            }}/>
    <MeterChart 
        data={[
            {group: "CSS", value: "70"},
        ]}
        options={{
            meter: {
                peak: 60,
                status: {
                    ranges: [{
                            range: [
                                0,
                                60
                            ], status: Statuses.WARNING
                            },
                            {
                            range: [
                                60,
                                80
                            ], status: Statuses.SUCCESS
                            },
                            {
                            range: [
                                80,
                                100
                            ], status: Statuses.DANGER
                            }
                    ]
                }
            },
            toolbar: {
                enabled: false
            },
            theme: ChartTheme.G100,
            height: "50px"
        }}/>
    <MeterChart 
        data={[
            {group: "TypeScript", value: "30"},
        ]}
        options={{
            meter: {
                peak: 60,
                status: {
                    ranges: [{
                            range: [
                                0,
                                60
                            ], status: Statuses.WARNING
                            },
                            {
                            range: [
                                60,
                                80
                            ], status: Statuses.SUCCESS
                            },
                            {
                            range: [
                                80,
                                100
                            ], status: Statuses.DANGER
                            }
                    ]
                }
            },
            toolbar: {
                enabled: false
            },
            theme: ChartTheme.G100,
            height: "50px"
        }}/>
    <MeterChart 
        data={[
            {group: "World Domination", value: "10"},
        ]}
        options={{
            meter: {
                peak: 60,
                status: {
                    ranges: [{
                            range: [
                                0,
                                80
                            ], status: Statuses.DANGER
                            },
                            {
                            range: [
                                60,
                                80
                            ], status: Statuses.DANGER
                            },
                            {
                            range: [
                                80,
                                100
                            ], status: Statuses.SUCCESS
                            }
                    ]
                }
            },
            toolbar: {
                enabled: false
            },
            theme: ChartTheme.G100,
            height: "50px"
        }}/>
    </section>
    <section id="skills">aa</section>
</aside>
<main>
    <slot/>
</main>
<input type="checkbox" id="nav-menu-checkbox" style="display:none;"/>
<label id='nav-button' for='nav-menu-checkbox'>
    <div id='burger'></div>
</label>
<nav>
    <!-- TODO: Make this content dynamic-->
    <ul class="sidebarMenuInner">
      <li>Kamil Śmigielski <br><span>IT Engineer</span></li>
      <li><a href="https://amun.pl">Company Home</a></li>
      <li><a href="https://amun.pl/blog">Blog Home</a></li>
      <li><a href="https://instagram.com/" target="_blank"><s>Instagram</s></a></li>
      <li><a href="https://twitter.com/" target="_blank"><s>Twitter</s></a></li>
      <li><a href="https://www.youtube.com/@DriftJunkie" target="_blank">YouTube</a></li>
      <li><a href="https://www.linkedin.com/in/kamil-smigielski" target="_blank">Linkedin</a></li>
    </ul>
</nav>

<style lang="less">
h1, h2, h3, h4, h5, h6, p {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
}

h1 > span, h2 > span, h3 > span, h4 > span, h5 > span, h6 > span, p > span { 
    flex-grow: 1;
    text-align: right;
}

aside {
    display: flex;
    flex-direction: column;
    text-align: center;
    min-width: 20ch;
    width: 30ch;
    height: -webkit-fill-available;
    background: var(--secondary-color);
    padding: 3.2rem 2rem;

    > section {
        width: 100%;
        justify-content: center;
    }

    section::after {
        display: block;
        content:"";
        background: #8c8c8e;
        width: 100%;
        height: 1px;
        opacity: .3;
        margin: 10px 0;
    }

    #header img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    p {
        font-size: 14px;
    }

    h3 {
        font-size: 18px;
        margin-top: 0;
    }

    a {
        display: inline-block;
        background-color: #333;
        color: #fff;
        text-decoration: none;
        padding: 1rem 2rem;
        border-radius: 4px;
    }
}

main {
    display: grid;
    grid-auto-rows: max-content;
    overflow: auto;
    width: 100%;
    min-width: 20rem;
    padding: 6rem 5rem;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

#goals div {
    width: 90%;
    margin: auto;
}

#nav-button {
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: absolute;
    z-index: 99;
    top: 2rem;
    right: 2rem;
    height: 3rem;
    width: 3rem;
    #burger, #burger::after, #burger::before {
            transition: all .25s;
            content: "";
            position: absolute;
            left: 0;
            height: 6px;
            width: 30px;
            border-radius: 15px;
            background-color: rgba(255, 255, 255, 0.95);
    }
    #burger {
        top: 1rem;
        right: 0;
        &::before {
            top: -8px;
        }
        &::after {
            top: 8px;
        }
    }
}
#nav-menu-checkbox:checked {
    & ~ nav {
        width: 250px;
        transition: 250ms ease-in-out;
        ul {
            opacity: 1;
            transform: translateX(0) translateY(-50%);
            transition: 450ms ease-in-out;
        }
    }
    & ~ #nav-button > #burger {
        &::before {
            top: 0;
            transform: rotate(45deg);
        }
        &::after {
            top: 0;
            transform: rotate(-45deg);
        }
        & {
            background-color: transparent;
        }
    }
}

nav {
    display: block;
    position: absolute;
    right: 0px;
    top: 0;
    width: 5rem;
    height: -webkit-fill-available;
    overflow: hidden;
    margin: 1rem;
    transition: 250ms ease-in-out;
    background: linear-gradient(180deg, var(--tertiary-color) 0%, var(--fourth-color) 100%);
    border-radius: 0 0 0 1rem;
    ul {
        margin: 0;
        padding: 0;
        position: relative;
        top: 50%;
        width: 250px;
        opacity: 0;
        transform: translateX(50px) translateY(-50%);
        transition: 450ms ease-out;
        li {
            list-style: none;
            color: #fff;
            text-transform: uppercase;
            font-weight: bold;
            padding: 1em;
            max-height: 3em;
            cursor: pointer;
            a {
                color: #fff;
                text-transform: uppercase;
                font-weight: bold;
                cursor: pointer;
                text-decoration: none;
            }
        }
    }
}

@media (max-aspect-ratio: 4/3) {
    aside {
        position:absolute;
        visibility: hidden;
    }
}

</style>

