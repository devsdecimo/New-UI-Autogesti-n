import Accordion from './Accordion.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    titleColor: {
      control: { type: 'select' },
      options: ['bg-gray-200', 'bg-blue-500', 'bg-red-500', 'bg-green-500'],
      description: 'Background color for the title of the accordion',
    },
  },
} as Meta;

const Template: StoryFn = (args) => ({
  components: { Accordion },
  setup() {
    return { args };
  },
  template: `
    <Accordion v-bind="args">
      <template #title>
        Custom Title
      </template>
      <template #content>
        This is the custom content of the accordion. You can provide any content here.
      </template>
    </Accordion>
  `,
});

export const Default = Template.bind({});
Default.args = {
  titleColor: 'bg-gray-200', 
};

export const MultipleAccordions: StoryFn = () => ({
  components: { Accordion },
  template: `
    <div>
      <Accordion titleColor="bg-blue-500">
        <template #title>
          Blue Title Accordion
        </template>
        <template #content>
          This is the content of the accordion with a blue title.
        </template>
      </Accordion>

      <Accordion titleColor="bg-red-500">
        <template #title>
          Red Title Accordion
        </template>
        <template #content>
          This is the content of the accordion with a red title.
        </template>
      </Accordion>

      <Accordion titleColor="bg-green-500">
        <template #title>
          Green Title Accordion
        </template>
        <template #content>
          This is the content of the accordion with a green title.
        </template>
      </Accordion>
    </div>
  `,
});
