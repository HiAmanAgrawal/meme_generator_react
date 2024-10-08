import { useState, useEffect } from "react";
function MemeGenerator() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg");
  const [allMemeImgs, setAllMemeImgs] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemeImgs(data.data.memes));
  }, []);

  return (
    <div className="meme-generator">
      <div className="meme-inputs">
        <input
          type="text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          placeholder="Top Text"
        />
        <input
          type="text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          placeholder="Bottom Text"
        />
      </div>
      <button
        onClick={() =>
          setRandomImg(
            allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)].url
          )
        }
      >
        Random Meme
      </button>
      <div style={{ position: "relative" }}>
        <h2 className="top-text">{topText}</h2>
        <img src={randomImg} alt="meme" />
        <h2 className="bottom-text">{bottomText}</h2>
      </div>
      <p>Powered by imgflip.com</p>
    </div>
  );
}

export default MemeGenerator;
