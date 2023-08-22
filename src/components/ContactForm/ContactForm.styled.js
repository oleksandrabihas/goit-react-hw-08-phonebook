import { Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  margin-bottom: 20px;
  label {
    display: block;
    margin-bottom: 8px;
    font-size: 26px;
  }
  input {
    display: block;
    font-size: 20px;
    width: 300px;
    height: 30px;
    margin-bottom: 8px;
    border: 1px solid black;
    border-radius: 4px;
  }

`;