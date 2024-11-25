import React from 'react'

const OfferFinance = () => {
    return (
        <section id="offer-finance" className='finance'>
            <div className="box">
                <h1>Finally, Business Finance You'll Love !</h1>
                <p>Fast business finance solutions for small limited companies</p>
                <div className="cards">
                    <div className="card1">
                        <div className="card-box">
                            <div>
                                <h2 className='find-finance'>Secure Finance</h2>
                                <button class="btn my-2 my-sm-0 card-btn" type="submit">Apply Now</button>
                                <div href="#" className='secure-text'>
                                    <a href="#">How It Works?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card2">
                        <div className="card-box">
                            <div>
                                <h2 className='find-finance'>Find Finance</h2>
                                <button class="btn my-2 my-sm-0 card-btn" type="submit">Offer Finance</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfferFinance
