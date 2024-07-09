import { useContext, useEffect } from "react"
import { QuizContext } from "./context/quiz"
import { Welcome } from "./components/Welcome"
import { Questions } from "./components/Questions"
import { GameOver } from "./components/GameOver"

export function App() {
    const [quizState, dispatch] = useContext(QuizContext)
    useEffect(() => {
        dispatch({type: "REODER_QUESTIONS"})
    }, [])

    return (
        <div className="App">
            <h1>Quiz de programação</h1>
            {quizState.gameStage == "START" && <Welcome />}
            {quizState.gameStage == "PLAYING" && <Questions />}
            {quizState.gameStage == "END" && <GameOver />}
        </div>
    )
}