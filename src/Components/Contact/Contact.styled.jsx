import styled from "styled-components";

const TitleContacts = styled.h2`
  padding-left: 12px;
  font-size: 1.5rem;
  font-weight: 500;
`;

const ContactItem = styled.li`
  margin-top: 4px;
  font-size: 1.2rem;
  font-weight: 400;
`;

const BtnDelete = styled.button`
  margin-left: 8px;
  border-radius: 5px;

  cursor: pointer;
`;

export { TitleContacts, ContactItem, BtnDelete };
