import { Meta, StoryObj } from '@storybook/react';
import { TextInputComponent, TextInputRootProps } from './TextInput';
import { Envelope } from 'phosphor-react';

export default { 
  title: 'Components/TextInput',
  component: TextInputComponent.Root,
  args: {
    children: [
      <TextInputComponent.Icon>
        <Envelope />
      </TextInputComponent.Icon>,
      <TextInputComponent.Input placeholder="Type your email address"/>
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children:     
    <TextInputComponent.Input placeholder="Type your email address"/>
  }
};