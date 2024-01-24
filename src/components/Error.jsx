import styled from '@emotion/styled'

const ContText = styled.div`
    border-left-style: solid;
    border-color: #e22c1b;
    border-radius: .3rem;
    border-width: 5px;
    padding: 0.8rem 0.6rem;
    background: #ffeaec;
    margin-bottom: 1.5rem;
`

const Text = styled.p`
    font-size: 1.15rem;
    font-weight: 500;
    color: #e22c1b;
`

const Error = ({children}) => {
  return (
    <ContText>
        <Text>{children}</Text>
    </ContText>
  )
}

export default Error