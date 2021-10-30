import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { StarterProject } from '../src/StarterProject.js';
import '../src/starter-project.js';

describe('StarterProject', () => {
  let element: StarterProject;
  beforeEach(async () => {
    element = await fixture(html`<starter-project></starter-project>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
