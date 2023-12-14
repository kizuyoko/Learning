import TextInput from "./TextInput";

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    type: {
      options: ['text', 'password', 'email', 'date'],
      control: {type: 'select'}
    }
  }
}

const Template = (args) => <TextInput {...args} />

export const Default = Template.bind({});
Default.args = {
  name: 'Firstname',
  label: 'First name',
  placeholder: 'Your first name here'  
}

export const Password = Template.bind({});
Password.args = {
  name: 'password',
  label: 'Password',
  type: 'password'
};


