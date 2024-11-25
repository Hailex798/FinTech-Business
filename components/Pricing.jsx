import React from 'react'

const Pricing = () => {
    return (
        <section className="pricing" >
            <div className="phone2" >
                <img src="/images/phone2.png" alt="" />
            </div>
            <div className='promise'>
                <h1>Our <span>Pricing Promise</span></h1>
                <p className='promise-first'>You pay one flat fee for you financing. This fee never changes. You'll see how much you've have repaid and how much you have outstanding every day.</p>
                <p className="dark">
                    We show you clearly how much you'll repay and together we agree what percentage of your daily credit card sales we will deduct.
                </p>

                <div className="bullets">
                    <div className='points'>
                        <img src="/images/tick.png" alt="" className="tick" />
                        <span>Agreed Pricing, Upfront</span>
                    </div>
                    <div className='points'>
                        <img src="/images/tick.png" alt="" className="tick" />
                        <span>No fee for early repayment</span>
                    </div>
                    <div className='points'>
                        <img src="/images/tick.png" alt="" className="tick" />
                        <span>No late charges</span>
                    </div>
                    <div className='points'>
                        <img src="/images/tick.png" alt="" className="tick" />
                        <span>No hidden fees</span>
                    </div>
                    <div className='points'>
                        <img src="/images/tick.png" alt="" className="tick" />
                        <span>No Joke</span>
                    </div>
                </div>

                <p className='faq'>
                    Frequently Asked Questions <img src="/images/arrow.png" alt="" />
                </p>
            </div>
        </section>
    )
}

export default Pricing
