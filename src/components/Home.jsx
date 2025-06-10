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
                    <span className="star"><ion-icon name="star-outline"></ion-icon></span>
                    <span className="arrow"><ion-icon name="arrow-forward-outline"></ion-icon></span>
                    <span className="doc"><ion-icon name="document-text-outline"></ion-icon></span>
                    <span className="lines"><ion-icon name="library-outline"></ion-icon></span>
                    <span className="bar"><ion-icon name="bar-chart-outline"></ion-icon></span>
                </div>
                <div></div>
            </header>
        </div>
    )
}