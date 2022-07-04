import React from "react";

export default function Main() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemes, setAllMemes] = React.useState([]);

    function handleClick() {
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: allMemes[Math.floor(Math.random() * allMemes.length)].url,
        }));
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }));
    }

    React.useEffect(() => {
        async function getMemes() {
          const res =   await fetch("https://api.imgflip.com/get_memes");
          const data = await res.json();
          setAllMemes(data.data.memes)
        }
        getMemes();
    },[])

    return (
        <main className="main">
            <div className="inputs-container">
                <input
                    type="text"
                    className="input"
                    placeholder="Shut up"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input
                    type="text"
                    className="input"
                    placeholder="and take my money"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
            </div>
            <button className="button" onClick={handleClick}>
                Get a new meme image 🖼
            </button>
            <div className="meme-container">
                <img src={meme.randomImage} alt="meme image" className="img" />
                <h2 className="meme-text-top meme-text">{meme.topText}</h2>
                <h2 className="meme-text-bottom meme-text">
                    {meme.bottomText}
                </h2>
            </div>
        </main>
    );
}
