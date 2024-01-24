import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import imgCrypto from './assets/crypto-logo.jpg'
import Spinner from './components/Spinner'
import Form from './components/Form'
import ResultQuote from './components/ResultQuote'

function App() {
  const [moneys,SetMoneys] = useState({})
  const [quoteCrypto,SetQuoteCrypto] = useState({})
  const [loading,SetLoading] = useState(false)

  useEffect(() => {
    if(Object.keys(moneys).length > 0) {
      const quoteCrypto = async () => {
        SetLoading(true)
        SetQuoteCrypto({})

        const {money,crypto} = moneys
        const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${money}`
        const response = await fetch(url)
        const data = await response.json()
        SetQuoteCrypto(data.DISPLAY[crypto][money])

        SetLoading(false)
      }
      quoteCrypto()
    }
  }, [moneys])

  return (
    <Container>
      <Image src={imgCrypto} alt="Crypto logo" />
      <div>
        <Heading>Cotiza Criptomonedas Rápido y Sencillo</Heading>
        <Form SetMoneys={SetMoneys} />
        {loading && <div><LoadingText>Obteniendo Informacíon...</LoadingText><Spinner/></div>}
        {quoteCrypto.PRICE && <ResultQuote quoteCrypto={quoteCrypto} />}
      </div>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    margin-top: 4rem;
  }
`

const Image = styled.img`
  max-width: 350px;
  width: 85%;
  display: block;
  margin: 20px auto 0 0;
  filter: grayscale(1);
  @media (max-width: 767px) {
    display: none;
  }
`

const Heading = styled.h1`
  text-align: center;
  text-wrap: balance;
  margin: 20px 0 40px 0;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background: linear-gradient(90deg, #5f5f5f, #9b9b9b);
    display: block;
    margin:  10px auto 0 auto;
  }
`
const LoadingText = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  color: #a6a6a6;
`
export default App
