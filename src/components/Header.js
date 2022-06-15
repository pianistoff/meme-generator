import logo from "../img/logo.png";

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="troll face logo" className="logo" />
            <h1 className="meme-generator">Meme Generator</h1>
            <h1 className="react-course">React Course - Project 3</h1>
        </header>
    )
}