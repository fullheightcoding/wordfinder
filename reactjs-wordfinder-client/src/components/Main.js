import React from "react"
import wordsData from "./wordsData"

export default function () {
    //Reqs: get a list of letters from a user and return all the words that match those letters
    //eg. user types the letters 'kcbla', and the word 'black' is displayed on the page as it's in the list of words
    const [formData, setFormData] = React.useState({typedWord: "", jumbledWord: "backl"})
    const [allWords, setAllWords] = React.useState(wordsData)
    const [foundWord, setFoundWord] = React.useState(false)

    const allWordsArray = allWords.words
    const mappedAllWordsArray = allWordsArray.map((item) => {
        return(<span key={item.id}>{item.word}, </span>)
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target

        // console.log(formData.typedWord)
        if(allWordsArray.map(x => x.word.includes(formData.typedWord))) {
            console.log("word found")
            setFoundWord(item => !item)
        }

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <div>
            <form>
                <input type="textbox" placeholder="Type a word" onChange={handleChange} name="typedWord" value={formData.typedWord} maxLength="8"></input>
                <hr/>
            </form>
            <label htmlFor="typedWord">Typed word: </label>
            <span>{formData.typedWord}</span>
            <hr/>
            <div className={foundWord ? "word-found" : "word-notfound"}>
                <label>Match Found?</label>
            </div>
            <span>Words list: {mappedAllWordsArray}</span>
        </div>
    )
}