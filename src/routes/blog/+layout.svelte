<script lang="ts">
    import { MeterChart } from '@carbon/charts-svelte';
    import { Statuses, ChartTheme } from '@carbon/charts';
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

<style>
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
    height: 100%;
    background: var(--secondary-color);
    padding: 3.2rem 2rem;
}

aside > section {
    width: 100%;
    justify-content: center;
}

aside section::after {
    display: block;
    content:"";
    background: #8c8c8e;
    width: 100%;
    height: 1px;
    opacity: .3;
    margin: 10px 0;
}

aside #header img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

aside h3 {
    font-size: 18px;
    margin-top: 0;
}

aside p {
    font-size: 14px;
}

aside a {
    display: inline-block;
    background-color: #333;
    color: #fff;
    text-decoration: none;
    padding: 1rem 2rem;
    border-radius: 4px;
}

main {
    display: grid;
    height: 100%;
    width: 100%;
    min-width: 20rem;
    padding: 8rem 5rem;
}

#goals div {
    width: 90%;
    margin: auto;
}

@media (max-width: 40rem) {
    aside {
        position:absolute;
    }
}

</style>

