import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMoney from '../hooks/useSelectMoney'
import { monedas } from '../data/money'

const Formulario = ({SetMoneys}) => {
  const [cryptos,SetCryptos] = useState([])
  const [error,SetError] = useState(false)

  const [money,SelectMoney] = useSelectMoney('Elige una Moneda*', monedas)  
  const [crypto,SelectCrypto] = useSelectMoney('Elige una Criptomoneda**', cryptos)  

  useEffect(() => {
    const dataApi = async () => {
      const limit = 15;
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${limit}&tsym=USD`;

      const response = await fetch(url);
      const data = await response.json();

      const arrayCriptos = data.Data.map((cripto) => {
        const { FullName, Name } = cripto.CoinInfo;

        const obj = { codigo:Name, nombre:FullName };

        return obj;
      });
      SetCryptos(arrayCriptos);
    };
    dataApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if([money,crypto].includes('')) {
      SetError(true)
      return
    }
    SetError(false)
    SetMoneys({money,crypto})
  }

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error> }
      <form onSubmit={handleSubmit}>
        <SelectMoney />
        <InfoSelect>*Las monedas más populares</InfoSelect>
        <SelectCrypto />
        <InfoSelect>**Las 15 criptomonedas más usadas</InfoSelect>
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  )
}

const InputSubmit = styled.input`
  margin: 1rem 0;
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
  background-color: #6e19c6;
  border: none;
  border-radius: 2rem;
  padding: .8rem 2rem;
  width: 100%;
  color: #fff;
  transition: background-color .4s ease;
  &:hover {
    background-color: #862ad6;
    cursor: pointer;
  }
`

const InfoSelect = styled.p`
  font-size: .8rem;
  color: #b6b6b6;
  margin-top: -1.6rem;
  margin-bottom: .9rem;
  font-style: italic;
`

export default Formulario