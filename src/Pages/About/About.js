import React from 'react';
import mamun_pic2 from '../../Image/mamun-bg2.png';

const About = () => {
    return (<>
        <div className=' min-h-screen bg-base-200'>
            <h1 className='text-center text-3xl mt-5 p-5 font-bold'>About Me</h1>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">
                    <img className='sm:w-5/12 lg:ml-20' src={mamun_pic2} />
                    <div>
                        <p class="py-6 text-justify text-xl">Hello, I'm Moniruzzaman.I'm a programmer with a good level of expertise in Front-End Web Development. I'm a tech lover. I have good knowledge of MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack web development.</p>
                        <p className='py-6 text-justify text-xl'>I am a hardworking, confident, enthusiastic Web developer and I want to utilize my knowledge and personal skills in Web Development. Also eagerly wants to serve a professional organization to the best of my knowledge with true dedication, hard work, and commitment. I am also honest, confident, fun-loving, and caring.</p>
                    </div>
                </div>
            </div>
        </div>
        <div>

        </div>
    </>);
};

export default About;