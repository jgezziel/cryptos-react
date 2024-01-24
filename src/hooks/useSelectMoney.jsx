import { useState } from "react";
import styled from "@emotion/styled";

const useSelectMoney = (label, opciones) => {
  const [state, setState] = useState('');
  const SelectMoney = () => (
    <ContainerLabel>
      <Label>{label}</Label>
      <Select value={state} onChange={e=>setState(e.target.value)}>
        <option value="" hidden>--- Seleccione ---</option>
        {opciones.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            ({opcion.codigo}) - {opcion.nombre}
          </option>
        ))}
      </Select>
    </ContainerLabel>
  );

  return [state, SelectMoney];
};

const ContainerLabel = styled.div`
  margin-bottom: 1.8rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.6rem;
`;

const Select = styled.select`
  width: 100%;
  font-size: 1.2rem;
  border: 2px solid #e1e1e1;
  border-radius: 0.3rem;
  padding: 0.8rem 1.2rem;
  transition: all 0.3s ease;
  &:hover {
    border-color: #6e19c6;
  }
  &:focus {
    outline: none;
    border-color: #6e19c6;
    box-shadow: 0 0 7px rgb(110, 25, 198, 0.6);
  }
`;

export default useSelectMoney;
