export const basicExample = `
    <MarketingPageLayout
      content={<div>Content</div>}
      image={<Image />}
      footer={<div>Footer</div>}
    />
`;

export const mediumSizeExample = `
  <MarketingPageLayout
    size='medium'
    content={<div>Medium Size Content</div>}
    image={<Image />}
    footer={<div>Footer</div>}
  />
`;

export const largeSizeExample = `
  <MarketingPageLayout
    content={<div>Large Size Content</div>}
    image={<Image />}
    footer={<div>Footer</div>}
  />
`;

export const featureListExample = `
    <MarketingPageLayout
      content={<div>content</div>}
      image={<Image />}
      // footer={<FeatureList
      //     features={[
      //       {
      //         id: '0001',
      //         image: <Image width={60} height={60} />,
      //         title: 'Remove Wix Ads',
      //         text: "Enjoy a website that's completely your own brand by removing Wix ads.",
      //       },
      //       {
      //         id: '0002',
      //         image: <Image width={60} height={60} />,
      //         title: 'Connect a Custom Domain',
      //         text: "Get your business found with a custom domain.",
      //       },
      //       {
      //         id: '0003',
      //         image: <Image width={60} height={60} />,
      //         title: 'Accept Online Payment',
      //         text: "Let your customers and clients pay you online at checkout.",
      //       },
      //     ]}
      //   />}
    />
`;

export const testimonialListExample = `
    <MarketingPageLayout
      content={<div>content</div>}
      image={<Image />}
      footer={<TestimonialList
          testimonials={[
            {
              id: '0001',
              avatar: <Avatar name="Guy in glasses" size="size60"/>,
              text: 'I love it! This product is exactly what I needed.',
              authorName: 'Guy in glasses'
            },
            {
              id: '0002',
              avatar: <Avatar name="Person with a hat" size="size60"/>,
              text: 'Amazing! It helped me to solve my problems.',
              authorName: 'Person with a hat'
            },
            {
              id: '0003',
              avatar: <Avatar name="Smiling lady" size="size60"/>,
              text: 'A perfect tool for my every day tasks.',
              authorName: 'Smiling lady'
            },
          ]}
        />}
    />
`;
