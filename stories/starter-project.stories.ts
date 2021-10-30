import { html, TemplateResult } from 'lit';
import '../src/starter-project.js';

export default {
  title: 'StarterProject',
  component: 'starter-project',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <starter-project style="--starter-project-background-color: ${backgroundColor}" .title=${title}></starter-project>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
