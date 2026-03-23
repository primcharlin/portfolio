"use client";

import Gravity, { MatterBody } from "@/components/fancy/physics/gravity";

export default function Hero() {
    return (
        <section
            className='section hero-primcharlin pt-20'
            id='home'>
            <div className='hero-gravity'>
                <Gravity className='hero-gravity__canvas'>
                    <MatterBody
                        x='26%'
                        y='10%'
                        angle={-8}>
                        <div className='hero-gravity__tag hero-gravity__tag--wide'>
                            YVR / BKK
                            <span className='hero-gravity__dot' />
                        </div>
                    </MatterBody>
                    <MatterBody
                        x='10%'
                        y='50%'
                        angle={-14}>
                        <div className='hero-gravity__tag'>HI THERE!</div>
                    </MatterBody>
                    <MatterBody
                        x='8%'
                        y='72%'
                        angle={-10}>
                        <div className='hero-gravity__tag hero-gravity__tag--wide'>
                            UX/UI DESIGNER
                        </div>
                    </MatterBody>
                    <MatterBody
                        x='62%'
                        y='30%'
                        angle={-8}>
                        <div className='hero-gravity__tag hero-gravity__tag--wide'>
                            BRAND &amp; VISUAL DESIGNER
                        </div>
                    </MatterBody>
                    <MatterBody
                        x='60%'
                        y='72%'
                        bodyType='circle'>
                        <div className='hero-gravity__icon hero-gravity__icon--arrow'>
                            ↓
                        </div>
                    </MatterBody>
                    <MatterBody
                        x='68%'
                        y='72%'
                        bodyType='circle'>
                        <div className='hero-gravity__icon hero-gravity__icon--star'>
                            *
                        </div>
                    </MatterBody>
                </Gravity>
            </div>
            <h1 className='hero-primcharlin__title mt-10 text-5xl font-semibold leading-tight'>
                Primcharlin
            </h1>
            <div className='mt-6 grid gap-10 md:grid-cols-[1.1fr_0.9fr]'>
                <div>
                    <h2 className='hero-primcharlin__subtitle mt-4 text-2xl font-light tracking-wide'>
                        Hi there! I&apos;m Primcharlin, a designer bridging
                        branding, UI/UX, and front-end development to create
                        accessible, user-centered digital products.
                    </h2>
                    <div className='resume-button'>
                        <a
                            href='/resume.pdf'
                            className='hero-primcharlin__link hero-primcharlin__link--resume rounded-full border px-5 py-2 transition'>
                            View resume
                        </a>
                        <a
                            href='#contact'
                            className='hero-primcharlin__link hero-primcharlin__link--primary rounded-full border px-5 py-2 transition'>
                            Start a project
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
