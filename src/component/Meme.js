import React from "react"
//import memesData from '../memesData.js'
export default function Meme() {
    const [memeAbout, setMemeAbout] = React.useState({
        toptext: "",
        bottomtext: "",
        url: "https://i.imgflip.com/3lmzyx.jpg"
    });
    const [allMeme, setAllMeme] = React.useState();
    React.useEffect(function () {
        fetch("https://api.imgflip.com/get_memes")  
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
        console.log('running')
    },[])
    let  no;
    function handle() {
        
        no = Math.floor(Math.random() * allMeme.length);
        setMemeAbout(prev => {
            return {
                ...prev,
                url: [allMeme[no].url]
            }
        }
        );
        // console.log(no,allMeme[no].url);     just to check
    }

    function handlechange(event) {
        const { name, value } = event.target;
        setMemeAbout(prev => {
            return {
                ...prev,
                [name]:value
            }
        })
        console.log(memeAbout);
    }

    return (
        <div className="form">
            <input type="text" placeholder="top text" className="form--input" onChange={handlechange} value={memeAbout.toptext}  name="toptext"/>
            <input type="text" placeholder="bottom text" className="form--input" onChange={handlechange} value={memeAbout.bottomtext}name="bottomtext" />
            <button type="button" className="form--button" onClick={handle}>Get a new meme image  🖼</button>

            <div className="meme">
                <img src={memeAbout.url} className="meme--pic" alt='you' />
                <h2 className="meme--text top">{ memeAbout.toptext}</h2>
                <h2 className="meme--text bottom">{ memeAbout.bottomtext}</h2>
            </div>
        </div>
    
    )
}