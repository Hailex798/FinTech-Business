import React from 'react'

const HowItWorks = () => {
    return (
        <section className="how-it-works">
            <div className='heading-div'>
                <h1>
                    How It Works
                </h1>
            </div>

            <div className="box-3">
                <div className="boxes3 application-box">
                    <img src="/images/application.png" alt="" className="app" />
                    <h2>1. Easy Application</h2>
                    <p>The application only takes a few clicks and there are no long forms to fill out decisions can be as fast as minutes</p>
                </div>
                <div className="boxes3">
                    <img src="/images/funding.png" alt="" className="funding" />
                    <h2>2. Fast Funding</h2>
                    <p>On approval , we deposit funds as soon as the next business day. <br /><br /> Once you've have paid back 60% of your balance you may qualify for an automatic top-up.</p>
                </div>
                <div className="boxes3 payback-box">
                    <img src="/images/payback.png" alt="" className="payback" />
                    <h2>3. Easy Payback</h2>
                    <p>Pay off your funding with convenient automatic deductions from your debit and credit card sales. <br /><br />Take a funding holiday when you need it.</p>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
