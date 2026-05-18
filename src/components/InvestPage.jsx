const investOptions = [
  {
    title: 'Mutual Fund',
    text: 'Explore long-term market linked investment plans.',
    link: 'https://investmentlife.policybazaar.com/prequote-ulip?offerid=37&amount=9000&utm_source=google&utm_medium=cpc&utm_campaign=Investment_Domestic_PMax_South_India00ULIP&gad_source=1&gad_campaignid=23458665035&gbraid=0AAAAAD2hd25xgWDEwglA0F3GwQHYZTkCZ&gclid=Cj0KCQjwzqXQBhD2ARIsAKrIeU8CZCY3-kavf0W5q6TOXvT8bXDtReL3aWfuVCsHMScvGYpFfIVcZmgaAiUUEALw_wcB',
  },
  {
    title: 'Gold',
    text: 'Plan digital gold or physical gold savings.',
    link: 'https://www.sundarammutual.com/sundaram-multi-asset-allocation-fund?SMAAF&utm_source=google&utm_medium=cpc&utm_campaign=SB_11_1_SMF_SC_LG_GE_T1&T2_Apr26&gad_source=1&gad_campaignid=23755781679&gbraid=0AAAAADiR9aVW94RNh3bZHDiK9dqGA4V1j&gclid=Cj0KCQjwzqXQBhD2ARIsAKrIeU8K4drLIudZl1cUYCXACFlTUrMGs8JoPpsb9CqUVhFZRqHXDg11K4YaAgEREALw_wcB',
  },
  {
    title: 'FD',
    text: 'Compare fixed deposit style safe returns.',
    link: 'https://investmentlife.policybazaar.com/prequote-trad?offerid=2004&utm_content=home_v5&utm_source=google&utm_medium=cpc&utm_campaign=Guaranteed_Plan_Exact_Desktop00FD&utm_term=fixed%20deposit&gad_source=1&gad_campaignid=11580977907&gbraid=0AAAAAD2hd24DUkdKQDdYOlfr-ZTrLonDS&gclid=Cj0KCQjwzqXQBhD2ARIsAKrIeU_DpqmjKqBH_DLLqSSQvVgf9g_Ge7GIpnFAi-3X2h8Hk-f5HgB2x1UaAszTEALw_wcB',
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
