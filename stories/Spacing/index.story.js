import React from 'react';
import { description } from 'wix-storybook-utils/Sections';
import { storySettings } from './storySettings';
import { Container, Row, Col } from '../../src/Grid';
import Text from '../../src/Text';
import Box from '../../src/Box';
import { spacingTokens } from '../../src/spacing';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    description({
      title: 'Wix Style design system spacing presets',
    }),

    <div>
      <Text secondary>
        In order to ease up the layout process, wix-style-react provides spacing
        presets. All preset values are a multiplication of 6px.
      </Text>
      <Box width="120px" marginTop="SP9">
        <Container fluid>
          {Object.entries(spacingTokens).map(([name, value]) => (
            <Row>
              <Col span={5}>
                <Text size="medium">{name}</Text>
              </Col>
              <Col span={3}>
                <Text>=</Text>
              </Col>
              <Col span={4}>
                <Text secondary>{value}</Text>
              </Col>
            </Row>
          ))}
        </Container>
      </Box>
    </div>,
  ],
};
