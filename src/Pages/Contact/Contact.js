import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j2muzo9', 'template_5t85kjg', form.current, 'E3pMZ0BmCHSfZYuVG')
            .then((result) => {
                console.log(result.text);
                alert("SUCCESS!");
            }, (error) => {
                console.log(error.text);
                alert("FAILED...", error);
            });
    };
    return (
        <div className=' bg-base-200'>
            <h1 className="text-4xl font-bold uppercase text-center mt-5 py-5">Let's talk !</h1>
            <div className="hero mt-0">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left lg:ml-5">
                        <h1 className="text-xl font-bold uppercase py-3">Contact With Me</h1>
                        <p className="py-1 text-lg">Gaibandha, Rangpur, Bangladesh.</p>
                        <p className="py-1"><span className='text-lg font-bold'>Gmail :</span> monirujjamanmamun2357@gmail.com</p>
                        <p className="py-1 text-lg">Phone : (+088) 01763-052357</p>
                    </div>

                    <div className="card w-full max-w-sm flex-shrink-0 shadow-2xl bg-base-100">
                        <div className="card-body py-5">
                            <form className='form-control py-3' ref={form} onSubmit={sendEmail}>
                                <input type="text" placeholder="Name" className="input input-bordered mb-3" />
                                <input type="text" placeholder="E-mail" className="input input-bordered mb-5" />
                                <textarea className="textarea textarea-bordered mb-3" placeholder="Comments"></textarea>
                                <input type="submit" className="btn py-5" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;