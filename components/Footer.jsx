import React from 'react'
import FaceBook from '/svg/facebook.svg'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer class="footer-area footer--light" id='footer'>
            <div class="footer-big">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2 col-sm-12">
                            <div class="footer-widget">
                                <div class="widget-about">
                                    <img src="/images/logo-no-background.png" alt="" class="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-4">
                            <div class="footer-widget">
                                <div class="footer-menu footer-menu--1">
                                    <h4 class="footer-h4 footer-widget-title">Products</h4>
                                    <ul className='ul'>
                                        <li>
                                            <a className='footer-a' href="#">How it works</a>
                                        </li>
                                        <li>
                                            <a className='footer-a' href="#">Get a quote</a>
                                        </li>
                                        <li>
                                            <a className='footer-a' href="#">FAQs</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-2 col-sm-4">
                            <div class="footer-widget">
                                <div class="footer-menu footer-menu--1">
                                    <h4 class="footer-h4 footer-widget-title">Company</h4>
                                    <ul className='ul'>
                                        <li>
                                            <a className='footer-a' href="#">About Us</a>
                                        </li>
                                        <li>
                                            <a className='footer-a' href="#">Careers</a>
                                        </li>
                                        <li>
                                            <a className='footer-a' href="#">Press</a>
                                        </li>
                                        <li>
                                            <a className='footer-a' href="#">Corporate Reponsibility</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-2 hidden">
                            <div class="footer-widget">
                                <div class="footer-menu ">
                                    <h4 class="footer-h4 footer-widget-title">Resources</h4>
                                    <ul className='ul'>
                                        <li>
                                            <a className='footer-a' href="#">Business Blog</a>
                                        </li>
                                        <li>
                                            <a className='footer-a' href="#">Business loan comparison</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-2 hidden">
                            <div class="footer-widget">
                                <div class="footer-menu footer-menu--1">
                                    <h4 class="footer-h4 footer-widget-title">Partner</h4>
                                    <ul className='ul'>
                                        <li>
                                            <a className='footer-a' href="#">Offer Finance</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-4">
                            <div class="footer-widget">
                                <div class="footer-menu footer-menu--1">
                                    <h4 class="footer-h4 footer-widget-title">Support</h4>
                                    <ul className='ul'>
                                        <li>
                                            <a className='footer-a' href="#">Contact Us</a>
                                        </li>
                                        <li>
                                            <a className='footer-a' href="mailto:support@aazztech.com">support<br />@aazztech.com</a>
                                        </li>
                                        <li>
                                            <a className='footer-a' href="tel:123-456-789">+91 123-456-789</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="mini-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
                            <div class="copyright-text">
                                <p className='footer-p'>Copyright @ FinTech {year}</p>
                                <p className="footer-p">All rights reserved.</p>
                            </div>

                            <div class="go_top">
                                <span class="icon-arrow-up"></span>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="copyright-text">
                                <p className='footer-p'> Terms and Conditions</p>
                                <p className='footer-p'> Privacy Policy</p>

                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <div class="copyright-text">
                                <p className='footer-p social'>
                                    <a href='http://facebook.com' target='_blank'><img src={FaceBook} alt="" /></a>
                                    <a href='http://instagram.com' target='_blank'><img src="/svg/instagram.svg" alt="" /></a>
                                    <a href='http://twitter.com' target='_blank'><img src="/svg/twitter.svg" alt="" /></a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="end-footer">
                <div class="col-md-12 credit">
                    <div class="copyright-text">
                        <p className='footer-p'>
                            Created By  <a href="#">Gautam Gupta</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
