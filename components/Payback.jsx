import React from 'react'

const Payback = () => {
    return (
        <section className="payback-section">
            <div>
                <div className='business-need'>
                    <h1>Any Business Need ?</h1>
                    <div>
                        <button class="btn my-2 my-sm-0 card-btn btn2" type="submit">Apply Now</button>
                    </div>
                </div>
            </div>
            <div className='simple'>
                <h1>Payback Is <span>Simple.</span></h1>
                <p className="para1">Your finance is repaid using an agreed percentage of your daily credit and debit card sales. We recognize that some days you're busy and some days you're not.</p>
                <p className="para2">With FinTech, you only pay us back when your customer pay you.</p>
            </div>
        </section>
    )
}

export default Payback
