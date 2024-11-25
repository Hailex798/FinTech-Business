import React from 'react'

const GetStarted = () => {
    return (
        <section className='get-started'>
            <div>
                <img src="/images/logo-no-background.png" alt=""  className='logobottom'/>
            </div>
            <div>
                <h1>There's a <span className='span1'>better way</span> <br /> to fund your business </h1> 
            </div>
            <div>
                Accessing small business funding shouldn't be complicated or time-consuming , so
                <br /> FinTech developed a simple way for business to secure up to 💲300,000.
            </div>
            <div className='abovePhone'>
                <button class="btn my-2 my-sm-0 card-btn btn1" type="submit">Offer Finance</button>
                <a className='watchvideo'>
                    <img src="/images/play.png" alt="" className="play" />
                    <span>Watch Video</span>
                </a>
            </div>
            <div>
                <img src="/images/phone.png" alt="" className="phone" />
            </div>
        </section>
    )
}

export default GetStarted
