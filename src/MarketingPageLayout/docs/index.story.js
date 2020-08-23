import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

import MarketingPageLayout from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: MarketingPageLayout,
  componentPath: '..',

  componentProps: {},

  exampleProps: {
    content: [
      {
        label: 'With content',
        value: <div> Content </div>, // todo: change it
      },
      {
        label: 'Without content',
        value: '',
      },
    ],
    image: [
      {
        label: 'With image',
        value: <Image />,
      },
      {
        label: 'Without image',
        value: '',
      },
    ],
    footer: [
      {
        label: 'None',
        value: '',
      },
      // {
      //   label: 'Testimonials',
      //   value: (
      //     <TestimonialList
      //       testimonials={[
      //         {
      //           id: '0001',
      //           avatar: <Avatar name="Guy in glasses" size="size60" />,
      //           text: 'I love it! This product is exactly what I needed.',
      //           authorName: 'Guy in glasses',
      //         },
      //         {
      //           id: '0002',
      //           avatar: <Avatar name="Person with a hat" size="size60" />,
      //           text: 'Amazing! It helped me to solve my problems.',
      //           authorName: 'Person with a hat',
      //         },
      //         {
      //           id: '0003',
      //           avatar: <Avatar name="Smiling lady" size="size60" />,
      //           text: 'A perfect tool for my every day tasks.',
      //           authorName: 'Smiling lady',
      //         },
      //       ]}
      //     />
      //   ),
      // },
      // {
      //   label: 'Features',
      //   value: (
      //     <FeatureList
      //       features={[
      //         {
      //           id: '0001',
      //           image: <Image width={60} height={60} />,
      //           title: 'Remove Wix Ads',
      //           text:
      //             "Enjoy a website that's completely your own brand by removing Wix ads.",
      //         },
      //         {
      //           id: '0002',
      //           image: <Image width={60} height={60} />,
      //           title: 'Connect a Custom Domain',
      //           text: 'Get your business found with a custom domain.',
      //         },
      //         {
      //           id: '0003',
      //           image: <Image width={60} height={60} />,
      //           title: 'Accept Online Payment',
      //           text:
      //             'Let your customers and clients pay you online at checkout.',
      //         },
      //       ]}
      //     />
      //   ),
      // },
    ],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${MarketingPageLayout.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'This component helps you to organize all the data of a marketing page. The marketing page includes the following sections: a content, an image and a footer.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          description({
            title: 'Structure',
            text:
              'Component includes the following sections: a content, an image and a footer. ',
          }),

          code({
            compact: true,
            source: examples.basicExample,
          }),

          description({
            title: 'Sizes',
            text: 'There are 2 sizes: medium and large (default)',
          }),

          code({
            compact: true,
            source: examples.mediumSizeExample,
          }),

          code({
            compact: true,
            source: examples.largeSizeExample,
          }),

          description({
            title: 'FeatureList Footer',
            text:
              'There two footers components that can be used. This is an example of MarketingPageLayout with FeatureList footer.',
          }),

          code({
            compact: true,
            source: examples.featureListExample,
          }),

          description({
            title: 'TestimonialList Footer',
            text:
              'There two footers components that can be used. This is an example of MarketingPageLayout with TestimonialList footer.',
          }),

          code({
            compact: true,
            source: examples.testimonialListExample,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
