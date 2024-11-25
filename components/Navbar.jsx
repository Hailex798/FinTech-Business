import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg ">
                <a class="navbar-brand" href="#"><img src="/images/logo-no-background.png" alt="" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#features">Our Products <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#offer-finance">Offer Finance</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#resources">Resources</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#footer">Comapany</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <button class="btn btn-light my-2 my-sm-0 nav-btn" type="submit">Apply Now</button>
                        <a class="navbar-text" href="#">
                            My Finance
                        </a>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
