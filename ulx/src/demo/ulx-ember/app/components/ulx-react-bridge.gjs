// app/components/ulx-react-bridge.gjs
import Component from '@glimmer/component';
import { modifier } from 'ember-modifier';
import { createRoot } from 'react-dom/client';
import React from 'react';

export default class UlxReactBridge extends Component {
  root = null;

  mount = modifier((element) => {
    if (!this.args.component) return;

    this.root = createRoot(element);

    this.root.render(
      React.createElement(this.args.component, this.args.props ?? {})
    );

    return () => {
      this.root?.unmount();
      this.root = null;
    };
  });

  <template>
    <!-- IMPORTANT: React mounts into THIS div -->
    <div {{this.mount}}></div>
  </template>
}
