import PropTypes from "prop-types";

import { LabelFilter, InputFilter } from "./Filter.styled";

export default function Filter({ filter, onChange }) {
  return (
    <>
      <LabelFilter>Find contacts by Name</LabelFilter>
      <InputFilter type="text" value={filter} onChange={onChange} />
    </>
  );
}

Filter.prototype = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
