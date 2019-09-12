import { storySettings } from './storySettings';
import icons from '../../../stories/utils/icons-for-story';
import {
  tab,
  api,
  testkit,
  code as baseCode,
  description,
  playground,
  importExample,
} from 'wix-storybook-utils/Sections';

import { baseScope } from '../../../stories/utils/LiveCodeExample';
import FloatingNotification from '..';
import { NOTIFICATION_TYPES } from '../constants';
import examples from './examples';

const code = config => baseCode({ components: baseScope, ...config });

const trashLabel = { label: 'Trash' };
const linkProps = {
  as: 'a',
  href: 'https://www.wix.com',
  label: 'Wix.com',
};
const textButtonPropsExamples = [
  { label: 'Standard', value: trashLabel },
  { label: 'Link', value: linkProps },
];

const undoLabel = { label: 'Undo' };
const buttonPropsExamples = [
  { label: 'Stndard', value: undoLabel },
  { label: 'Link', value: linkProps },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: FloatingNotification,
  componentPath: '..',

  componentProps: {
    dataHook: storySettings.dataHook,
    type: NOTIFICATION_TYPES.STANDARD,
    text: 'Some content text',
    showCloseButton: true,
    textButtonProps: textButtonPropsExamples[0].value,
    buttonProps: buttonPropsExamples[0].value,
    prefixIcon: null,
  },

  exampleProps: {
    prefixIcon: icons,
    type: Object.values(NOTIFICATION_TYPES),
    textButtonProps: textButtonPropsExamples,
    buttonProps: buttonPropsExamples,
  },

  sections: [
    tab({
      title: 'Description',
      sections: [
        description(
          'Displays simple and temporary messages or destructive events',
        ),

        importExample({
          source:
            "import FloatingNotification from 'wix-style-react/FloatingNotification';",
        }),

        code({
          title: `Notification types`,
          source: examples.ExampleAllTypes,
        }),

        code({
          title: `All options`,
          source: examples.ExampleAllOptions,
        }),

        code({
          title: `Set buttons as anchors with href`,
          source: examples.ExampleHref,
        }),

        code({
          title: `Defining the width`,
          source: examples.ExampleFullWidth,
        }),
      ],
    }),

    ...[
      { title: 'Playground', sections: [playground()] },
      { title: 'API', sections: [api()] },
      { title: 'Testkit', sections: [testkit()] },
    ].map(tab),
  ],
};
