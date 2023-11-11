const Gameover = props => {
  const {score, gameRestart} = props

  const onClickButton = () => {
    gameRestart()
  }

  return (
    <div className="game-over">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p>YOUR SCORE</p>
      <p>{score}</p>
      <button type="button" onClick={onClickButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <p>PLAY AGAIN</p>
      </button>
    </div>
  )
}
export default Gameover
