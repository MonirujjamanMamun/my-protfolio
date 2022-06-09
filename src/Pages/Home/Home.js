import React from 'react';
import mamun_pic from '../../Image/mamun-bg1.png';
import mamun_resumi from '../../Image/Monirujjaman final Resume-02 .pdf';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='sm:w-5/12 lg:ml-20' src={mamun_pic} />
                    <div className='sm:inline-block align-middle'>
                        <h1 className="text-5xl font-bold">Hi</h1>
                        <p className="pt-3 text-3xl">I'M</p>
                        <p className="pb-3 text-3xl">Monirujjaman</p>
                        <p className="pb-3 text-3xl">I'm a MERN Stak Developer.</p>
                        <button className="btn mr-3">HIRE ME</button>
                        <button className="btn ml-4 mr-9"><a target='_blank' href={mamun_resumi}>RESUME</a></button>
                    </div>
                </div>
            </div>
            <About />
            <Projects />
            <Contact />
        </>);
};

export default Home;