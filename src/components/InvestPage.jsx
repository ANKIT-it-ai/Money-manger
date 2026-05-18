const investOptions = [
  {
    title: 'Mutual Fund',
    text: 'Explore long-term market linked investment plans.',
    link: 
      # required link
  },
  {
    title: 'Gold',
    text: 'Plan digital gold or physical gold savings.',
    link: 
    # required link
  },
  {
    title: 'FD',
    text: 'Compare fixed deposit style safe returns.',
    link:
    # required link    
  },
]

function InvestPage() {
  return (
    <section className="page">
      <div className="phdg">
        <p className="eye">Invest</p>
        <h1>Choose your investment option.</h1>
      </div>

      <div className="igrd">
        {investOptions.map((option) => (
          <article className="icrd" key={option.title}>
            <span>{option.title}</span>
            <p>{option.text}</p>
            <a href={option.link} target="_blank" rel="noreferrer">
              Open {option.title}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default InvestPage
