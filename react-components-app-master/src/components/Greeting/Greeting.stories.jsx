import Greeting from "./Greeting";

export default {
  title: 'Example/Greeting',
  component: Greeting,
  argTypes: {
      fontFamily: { 
        control: 'select',
        options: ['Arial', 'Times', 'Helvetica', 'Courier', 'Comic Sans MS']
      }
  }
}

const Template = (args) => <Greeting {...args} />

export const Default = Template.bind({})

Greeting.args = {
  fontFamily: 'Arial'
}