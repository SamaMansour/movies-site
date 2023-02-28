
import React from 'react';

import ItemCard from './ItemCard';

export default {
  component: ItemCard,
  title: 'Card',
};

const Template = args => <ItemCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    id: '1',
    img:'', 
    overview: 'desc',
    title: 'title'
    
  },
};

export const Primary = Template.bind({});
Primary.args = {
  iem: {
    ...Default.args.item,
    state: 'ITEM_PRIMARY',
  },
};

