<script lang="ts">
    import { MeterChart } from '@carbon/charts-svelte';
    import { Statuses, ChartTheme } from '@carbon/charts';
    import Nav from '$lib/components/navigation/nav.svelte';
    //import YoutubeFeed from '$lib/components/youtube-feed/YoutubeFeed.svelte';
    import '@carbon/charts-svelte/styles.css';
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
    <!--
    <MeterChart 
            data={[
                {group: "IT Engineer", value: "100"},
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
                            ], status: Statuses.WARNING
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
    -->
    <!--
    <MeterChart 
        data={[
            {group: "Electronics Engineer", value: "80"},
        ]}
        options={{
            meter: {
                peak: 90,
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
                                90
                            ], status: Statuses.WARNING
                            },
                            {
                            range: [
                                90,
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
    -->
    <h2>Goals</h2>
    <MeterChart 
        data={[
            {group: "Sim & Pathing Thesis", value: "30"},
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
                            ], status: Statuses.WARNING
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
    <MeterChart 
        data={[
            {group: "SimRacing League", value: "10"},
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
                            ], status: Statuses.WARNING
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
    <MeterChart 
        data={[
            {group: "World Domination", value: "1"},
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
    <section id="feed">
    </section>
</aside>
<main>
    <slot/>
</main>
<Nav />

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
    min-width: 20rem;
    max-width: 25rem;
    z-index: 1;
    padding: 3.2rem 2rem;
    margin: 1rem;
    height: -webkit-fill-available;
    background: var(--secondary-color);

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
    padding: 6rem 2rem;
    margin-right: 2rem;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

#goals div {
    width: 90%;
    margin: auto;
}

@media (pointer: coarse) {
    main {
        padding: 6rem auto;
        margin: 0 auto;
    }
}

@media (orientation: portrait) {
    :global(#image-trim) {
        display: none;
    }
    aside {
        position:absolute;
        visibility: hidden;
    }
    main {
        padding: unset;
        margin: unset;
        width: 100%;
    }
    :global(.tag, .post) {
        padding: 1rem !important;
        margin: 1rem !important;
        min-width: 15rem !important; /* TODO: Give it rem units */
        flex: 1 1 15rem !important;
    }
}

</style>

