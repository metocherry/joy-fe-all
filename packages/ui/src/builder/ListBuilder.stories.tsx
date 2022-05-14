import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBuilder } from './ListBuilder';

export default {
  title: 'Builder / ListBuilder',
  component: ListBuilder,
} as ComponentMeta<typeof ListBuilder>;

const Template: ComponentStory<typeof ListBuilder> = () => {
  return (
    <ListBuilder
      getId={(value) => value}
      data={[1, 2, 3, 4, 5]}
    />
  );
};

export const Main = Template.bind({});
