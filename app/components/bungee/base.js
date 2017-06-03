import Fittext from 'react-fittext'

export default props => {
  const {
    styles,
    text
  } = props

  return (
    <div className={styles.wrapper}>
      {
        text.map((line, i) => (
          <Fittext key={i} compressor={line.length / 14} >
            <h2 className={styles.bungee} data-text={line}>{line}</h2>
          </Fittext>
        ))
      }
    </div>
  )
}
