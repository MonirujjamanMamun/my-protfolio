import React from 'react';

const Contact = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className="text-4xl font-bold uppercase text-center my-5">Lets talk !</h1>
            <div className="hero mt-0">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-center">
                        <h1 className="text-xl font-bold uppercase py-3">Contact With Me</h1>
                        <p className="py-1 text-lg">Gaibandha, Rangpur, Bangladesh.</p>
                        <p className="py-1"><span className='text-lg font-bold'>Gmail :</span> monirujjamanmamun2357@gmail.com</p>
                        <p className="py-1 text-lg">Phone : (+088)01763-052357</p>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">

                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="E-mail" className="form-control" />

                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="Comment" className="form-control" />

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;