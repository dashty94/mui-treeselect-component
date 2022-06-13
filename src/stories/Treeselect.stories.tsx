import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Treeselect } from '../components/Treeselect/index';
import { TreeSelectProps } from '../types';

const meta: Meta = {
    title: 'Treeselect',
    component: Treeselect,
    argTypes: {
        children: {
            control: {
                type: 'text'
            }
        }
    },
    parameters: {
        controls: { expanded: true }
    }
};

export default meta;

const Template: Story<TreeSelectProps> = (args) => {
    return <Treeselect {...args} />;
};

export const TextField = Template.bind({});

TextField.args = {
    data: [
        {
            id: 1,
            name: 'Item 1',
            children: [
                { id: 2, name: 'Item 2' },
                {
                    id: 3,
                    name: 'Item 3',
                    children: [
                        {
                            id: 4,
                            name: 'Item 4',
                            children: [
                                {
                                    id: 5,
                                    name: 'Item 6',
                                    children: [
                                        {
                                            id: 7,
                                            name: 'Item 7'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    label: 'Treeselect'
};
