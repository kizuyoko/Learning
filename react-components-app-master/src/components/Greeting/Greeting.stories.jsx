import Greeting from "./Greeting";

export default {
  title: 'Example/Greeting',
  component: Greeting,
  argTypes: {
      fontFamily: { control: 'fontFamily'}
  }
}

const Template = (args) => <Greeting {...args} />

export const Default = Template.bind({})