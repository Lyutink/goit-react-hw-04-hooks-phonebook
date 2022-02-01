import styled from "styled-components";

const TitleForm = styled.h1`
  padding-bottom: 24px;
  padding-left: 12px;
  font-size: 1.5rem;
  font-weight: 700;
`;

const ContainerForm = styled.div`
  margin-left: 12px;
  max-width: 320px;
  padding: 8px;
  border: solid;
`;

const LabelForm = styled.label`
  display: block;
  margin-top: 12px;

  font-size: 1.2rem;
  font-weight: 500;
`;

const BtnForm = styled.button`
  display: block;
  margin-top: 12px;
  border-radius: 5px;

  cursor: pointer;
`;

export { TitleForm, ContainerForm, LabelForm, BtnForm };
