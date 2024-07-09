import { useContext } from "react"
import { QuizContext } from "../context/quiz"
import WellDone from "../assets/img/welldone.svg"

export function GameOver() {
    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div id="gameover">
            <h2>Fim de jogo!</h2>
            <p>Pontuação: { quizState.score }</p>
            <p>Você acertou { quizState.score } de { quizState.questions.length } perguntas.</p>
            <img src={ WellDone } alt="Fim do Quiz" />
            <button onClick={ () => dispatch({type: "RESTART_GAME"})}>Reiniciar</button>
        </div>
    )
}