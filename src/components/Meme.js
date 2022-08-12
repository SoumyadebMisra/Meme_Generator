import React from "react";
import memeSubmit from "../images/meme.svg";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    async function getM() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getM();
  }, []);

  function getMeme() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prev) => {
      return {
        ...prev,
        randomImage: url
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value
      };
    });
  }

  return (
    <div className="memeContainer">
      <div>
        <div className="form-input">
          <input
            className="form-input-top"
            name="topText"
            type="text"
            placeholder="Top text"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            className="form-input-bottom"
            name="bottomText"
            type="text"
            placeholder="Bottom text"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button id="form-submit" onClick={getMeme}>
          <img src={memeSubmit} alt="get a meme" />
        </button>
      </div>
      <div className="meme">
        <img className="memeImg" src={meme.randomImage} alt="meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
