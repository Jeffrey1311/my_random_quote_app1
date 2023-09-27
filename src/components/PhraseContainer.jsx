import "./phraseContainer.css"

const PhraseContainer = ({phrase, handleChangePhrase}) => {

 
  return (
    <section className="phraseCard">

      <article className="phraseCard__container">
        <h1 className="phrase__title">FORTUNE COOKIES</h1>

        <button className="phraseCard__btn" onClick={handleChangePhrase}>Try my luck</button>

        <div className="container"> <p className="phraseCard__info">{phrase.phrase}</p>
        </div>

      </article>

      <footer className="phraseCard__footer"> Author: {phrase.author}
      </footer>
    </section>
  )
}

export default PhraseContainer