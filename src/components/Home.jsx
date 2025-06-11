import { NavLink } from "react-router-dom"

export default function HomePage() {
    return (
        <div className="home-page">
            <header className="hero">
                <div className="hero-intro">
                    <h1>The Future of Manufacturing <br /> with <span>Latest Technology</span></h1>
                    <p>Expert tech to elevate your manufacturing. Let's take your business further</p>
                    <div className="hero-btns">
                        <button>Get Started</button> <button>try demo</button>
                    </div>
                    <span className="special star"><ion-icon name="star-outline"></ion-icon></span>
                    <span className="special-bd arrow"><ion-icon name="arrow-forward-outline"></ion-icon></span>
                    <span className="special doc"><ion-icon name="document-text-outline"></ion-icon></span>
                    <span className="special-bd lines"><ion-icon name="library-outline"></ion-icon></span>
                    <span className="special bar"><ion-icon name="bar-chart-outline"></ion-icon></span>
                </div>
                <div className="hero-stats">
                    <div className="hero-item h-item-1"></div>
                    <div className="hero-item h-item-2">
                        <h2>100+</h2>
                        <p>our esteemed <br /> clients and <br /> partners</p>
                    </div>
                    <div className="hero-item h-item-3">
                        <p>Total projects</p>
                        <h2>1951+</h2>
                        <p>increase of 126 this month</p>
                    </div>
                    <div className="hero-item h-item-4">
                        <h2>6+</h2>
                        <p>years of <br /> dedicated <br /> service</p>
                    </div>
                    <div className="hero-item h-item-5">
                        <h3>achieve optimal <br /> efficiency and boost <br /> productivity</h3>
                    </div>
                </div>
            </header>
            <main className="home-main">
                <section className="our-services">
                    <h1>Efficient and Integrated <br /> Manufacturing Services</h1>
                    <p>Simplify operations with our efficient, quality-focused services.</p>

                    <div className="services">
                        <div className="service-item">
                            <span><ion-icon name="arrow-forward"></ion-icon></span>
                            <div className="service-txt">
                                <h2>production & assembly</h2>
                                <p>Details on production processes, assembly, capacity, and product types.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <span><ion-icon name="arrow-forward"></ion-icon></span>
                            <div className="service-txt">
                                <h2>Custom manufacturing</h2>
                                <p>Custom product creation with design and customization options.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <span><ion-icon name="arrow-forward"></ion-icon></span>
                            <div className="service-txt">
                                <h2>quality control</h2>
                                <p>Procedures and system in place to ensure high quality product.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <span><ion-icon name="arrow-forward"></ion-icon></span>
                            <div className="service-txt">
                                <h2>Technology and innovation</h2>
                                <p>Details on the latest manufacturing technologies and ongoing innovations.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <span><ion-icon name="arrow-forward"></ion-icon></span>
                            <div className="service-txt">
                                <h2>packaging and logistics</h2>
                                <p>packaging and logistics for shipping to customers and distributors.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <span><ion-icon name="arrow-forward"></ion-icon></span>
                            <div className="service-txt">
                                <h2>consulting market research</h2>
                                <p>Services to help company understand market needs and provide strategic advice.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="benefits">
                    <div className="benefits-bg"></div>
                    <div className="benefits-txt">
                        <h1>Key Benefits of Our System for Your Business Efficiency</h1>
                        <p>Our systems boost productivity, cut costs, and drive business growth.</p>
                        <ul>
                            <li className="b-bold"><span className="check"><ion-icon name="checkmark-circle"></ion-icon></span> Boosting Quality with Tech</li>
                            <li>With advanced technology, we help you achieve top product quality. Discover how we can enhance your standards.</li>
                        </ul>
                        <ul>
                            <li className="b-bold"><span className="check"><ion-icon name="checkmark-circle"></ion-icon></span> Optimization Production Process</li>
                            <li>Boost factory efficiency and productivity with our innovative solutions. See how the latest technology can maximize your output.</li>
                        </ul>
                        <ul>
                            <li className="b-bold"><span className="check"><ion-icon name="checkmark-circle"></ion-icon></span> AI-Driven Production</li>
                            <li>Leverage the power of AI to transform your manufacturing processes, achieving faster and more effective results.</li>
                        </ul>
                    </div>
                </section>
                <section className="plans">
                    <h1>Tailored Plans for Your <br /> Manufacturing Scale</h1>
                    <p>Flexible pricing for any business size.</p>
                    <div className="pricing">
                        <div className="plan">
                            <h2>Starter</h2>
                            <p>This package offers the basic features you need to get started.</p>
                            <h3>$39 <span>/ month</span></h3>
                            <button>Get started</button>
                            <p className="feat"><span></span> Features <span></span></p>
                            <ul className="features">
                                <li><span><ion-icon name="checkmark-circle"></ion-icon></span> Production up to 10,000 units per month</li>
                                <li><span><ion-icon name="checkmark-circle"></ion-icon></span> 24/7 technical support</li>
                                <li><span><ion-icon name="checkmark-circle"></ion-icon></span> Access the production dashboard</li>
                                <li><span><ion-icon name="checkmark-circle"></ion-icon></span> Initial setup guide</li>
                            </ul>
                        </div>
                        <div className="plan">
                            <h2>Enterprise</h2>
                            <p>This package provides full access to all premium features.</p>
                            <h3>$99 <span>/ month</span></h3>
                            <button>Get started</button>
                            <p className="feat"><span></span> Features <span></span></p>
                            <ul className="features">
                                <li><span><ion-icon name="checkmark-circle"></ion-icon></span> Unlimited production units</li>
                                <li><span><ion-icon name="checkmark-circle"></ion-icon></span> Dedicated account manager</li>
                                <li><span><ion-icon name="checkmark-circle"></ion-icon></span> Tailored manufacturing solutions</li>
                                <li><span><ion-icon name="checkmark-circle"></ion-icon></span> Predictive production optimization</li>
                            </ul>
                        </div>
                        <div className="plan professional">
                            <h2>Professional</h2>
                            <p>Designed for greater flexibility, this solution offers advanced <br /> tools for custom tailoring to your needs.</p>
                            <button>Get Started</button>
                        </div>
                    </div>
                </section>
                <section className="companies">
                    <div className="partners-txt">
                        <h1>Empowering Top Companies <br /> with Seamless Integrations</h1>
                        <p>
                            Experience seamless connections with our innovative solutions, designed <br /> to effortlesly integrate with your existing systems, enhance productivity, <br /> and drive your business towards grater success.
                        </p>
                        <button>Work With Us</button>
                    </div>
                    <div className="partners-bg"></div>
                </section>
                <section className="idea">
                    <h1>From Idea to Production in Days</h1>
                    <p>Accelerate your production with our technology. Reduce <br /> downtime and optimize costs. Get a special offer now!</p>
                    <button>work with us</button>
                </section>
            </main>
            <footer>
                <section className="footer-main">
                    <div className="footer-intro">
                        <h1 className="logo">Prodmast</h1>
                        <p>Our solutions make production <br /> faster and cheaper. Contact us for <br /> more information.</p>
                    </div>
                    <div className="links">
                        <ul>
                            <li className="l-bold">Company</li>
                            <li>about us</li>
                            <li>customers</li>
                            <li>newsroom</li>
                            <li>events</li>
                        </ul>
                        <ul>
                            <li className="l-bold">Industries</li>
                            <li>precision metalform</li>
                            <li>industrial manufacturing</li>
                            <li>high tects & electronics</li>
                            <li>aerospace</li>
                        </ul>
                        <ul>
                            <li className="l-bold">products</li>
                            <li>manufacturing execution system</li>
                            <li>Enterprise resource planning</li>
                            <li>quality management system</li>
                            <li>supply chain planning</li>
                        </ul>
                        <ul>
                            <li className="l-bold">get in touch</li>
                            <li> <a href="#">hello@prodmast.com</a> </li>
                            <sub className="socials">
                                <span><ion-icon name="logo-linkedin"></ion-icon></span>
                                <span><ion-icon name="logo-instagram"></ion-icon></span>
                                <span><ion-icon name="logo-facebook"></ion-icon></span>
                            </sub>
                        </ul>
                    </div>
                </section>
                <section className="last">
                    <p>&copy; 2025 Prodmast, All Rights Reserved</p>
                    <ul>
                        <li>Terms & Condition</li>
                        <li>Privacy Policy</li>
                    </ul>
                </section>
            </footer>
        </div>
    )
}