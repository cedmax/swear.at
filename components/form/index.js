import connectStyles from 'styletron-connect';
import BaseForm from './base';

const Form = (props) => {
  return (
    <BaseForm {...props} />
  );
};

export default connectStyles(Form, {
  form: {
    backgroundColor: 'lightblue',
    fontSize: '12px'
  }
})