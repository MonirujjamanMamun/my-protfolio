import React from 'react';
import mamun_pic2 from '../../Image/mamun-bg2.png';

const About = () => {
    return (<>
        <div className='w-11/12 mx-auto bg-base-200 rounded-lg mb-4'>
            <h1 className='text-center text-3xl mt-5 p-5 font-bold'>About Me</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='sm:w-5/12 lg:ml-20' src={mamun_pic2} />
                    <div>
                        <p className="py-6 text-justify text-xl">Hello, I'm Moniruzzaman.I'm a programmer with a good level of expertise in Front-End Web Development. I'm a tech lover. I have good knowledge of MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack web development.</p>
                        <p className='py-6 text-justify text-xl'>I am a hardworking, confident, enthusiastic Web developer and I want to utilize my knowledge and personal skills in Web Development. Also eagerly wants to serve a professional organization to the best of my knowledge with true dedication, hard work, and commitment. I am also honest, confident, fun-loving, and caring.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-11/12 mx-auto bg-base-200 rounded-lg p-5'>
            <h1 className='text-center text-3xl my-3 p-5 font-bold'>Skills</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-4'>
                <div className='card my-2'>
                    <h1 className='text-2xl font-bold'> Expertise</h1>
                    <label className='label'>HTML</label>
                    <progress className="progress progress-primary w-56 my-1" value="90" max="100"></progress>
                    <label>CSS</label>
                    <progress className="progress progress-primary w-56 my-1" value="80" max="100"></progress>
                    <label>Bootstarp</label>
                    <progress className="progress progress-primary w-56 my-1" value="80" max="100"></progress>
                    <label>Tailwind</label>
                    <progress className="progress progress-primary w-56 my-1" value="85" max="100"></progress>
                    <label>DaisyUI</label>
                    <progress className="progress progress-primary w-56 my-1" value="85" max="100"></progress>
                    <label>Tailwind-Elements</label>
                    <progress className="progress progress-primary w-56 my-1" value="80" max="100"></progress>
                    <label>JavaScript</label>
                    <progress className="progress progress-primary w-56 my-1" value="60" max="100"></progress>
                    <label>ReactJS</label>
                    <progress className="progress progress-primary w-56 my-1" value="80" max="100"></progress>

                </div>
                <div className='card'>
                    <h1 className='text-2xl font-bold'> Comfortable</h1>
                    <label className='label'>Node.js</label>
                    <progress className="progress progress-primary w-56 my-1" value="60" max="100"></progress>
                    <label>ExpressJS</label>
                    <progress className="progress progress-primary w-56 my-1" value="65" max="100"></progress>
                    <label>Firebase</label>
                    <progress className="progress progress-primary w-56 my-1" value="70" max="100"></progress>
                    <label>Firebase-Hooks</label>
                    <progress className="progress progress-primary w-56 my-1" value="80" max="100"></progress>
                    <label>Firebase-Hooks-Form</label>
                    <progress className="progress progress-primary w-56 my-1" value="75" max="100"></progress>

                </div>
                <div className='card'>
                    <h1 className='text-2xl font-bold'> Familiar</h1>
                    <label className='label'>React Native</label>
                    <progress className="progress progress-primary w-56 my-1" value="30" max="100"></progress>
                    <label>Typescript</label>
                    <progress className="progress progress-primary w-56 my-1" value="40" max="100"></progress>
                    <label>Web Pack</label>
                    <progress className="progress progress-primary w-56 my-1" value="60" max="100"></progress>
                    <label>Next.js</label>
                    <progress className="progress progress-primary w-56 my-1" value="50" max="100"></progress>
                </div>

                <div className='card'>
                    <h1 className='text-2xl font-bold'> Tools</h1>
                    <label className='label'>Vs.Code</label>
                    <progress className="progress progress-primary w-56 my-1" value="65" max="100"></progress>
                    <label>Npm</label>
                    <progress className="progress progress-primary w-56 my-1" value="55" max="100"></progress>
                    <label>Netlify</label>
                    <progress className="progress progress-primary w-56 my-1" value="60" max="100"></progress>
                    <label>Heroku</label>
                    <progress className="progress progress-primary w-56 my-1" value="60" max="100"></progress>
                    <label>Chrome Dev.Tool</label>
                    <progress className="progress progress-primary w-56 my-1" value="65" max="100"></progress>
                    <label>Git</label>
                    <progress className="progress progress-primary w-56 my-1" value="50" max="100"></progress>
                </div>

            </div>

        </div>
    </>);
};

export default About;