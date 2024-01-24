import styled from '@emotion/styled'

const ResultQuote = ({quoteCrypto}) => {
  const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} = quoteCrypto

  return (
    <Card>
      <Container>
        <Image src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="Crypto logo" />
       <div>
          <Price>Precio: <Value>{PRICE}</Value></Price>
          <Text>Precio más alto del día: <Max>{HIGHDAY}</Max></Text>
          <Text>Precio más bajo del día: <Min>{LOWDAY}</Min></Text>
          <Text>Variación últimas 24 horas: <Val>{CHANGEPCT24HOUR}%</Val></Text>
          <Text>Última actualización: <Val>{LASTUPDATE}</Val></Text>
       </div>
      </Container>
    </Card>
  )
}

const Card = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border: 2px solid #e1e1e1;
  border-radius: 0.3rem;
  margin: 1.5rem 0;
`
const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
const Image = styled.img`
  display: block;
  width: 5rem;
  height: 5rem;
  @media (max-width: 767px) {
    margin: 0 auto .8rem auto;
  }
`

const Price=styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.6rem;`

const Text=styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  text-wrap:pretty;`

const Value=styled.span`
font-weight: 500;
color: #6e19c6;
border-bottom: 1px solid #6e19c6;`

const Max=styled.span`
  font-weight: 500;
  color: #00a701;`

const Min=styled.span`
font-weight: 500;
color: #e22c1b;`

const Val=styled.span`
font-weight: 500;`

export default ResultQuote