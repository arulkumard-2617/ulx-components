import Route from '@ember/routing/route';

export default class FoundationTypographyRoute extends Route {
  model() {
    // Font Size Utilities (10-32)
    const fontSizeRows = Array.from({ length: 23 }, (_, index) => {
      const size = index + 10; // 10 → 32
      const lineHeight = size <= 12 ? '@line-height-tight' : '@line-height-normal';
      return {
        className: `.font-size${size}`,
        property: `font-size: @font-size${size}; line-height: ${lineHeight};`
      };
    });

    // Font Weight Utilities
    const fontWeightRows = [
      { className: '.font-light', property: 'font-family: @font-face-light; font-weight: 300;' },
      { className: '.font-regular', property: 'font-family: @font-face-regular; font-weight: 400;' },
      { className: '.font-medium', property: 'font-family: @font-face-medium; font-weight: 500;' },
      { className: '.font-semibold', property: 'font-family: @font-face-semibold; font-weight: 600;' },
      { className: '.font-bold', property: 'font-family: @font-face-bold; font-weight: 700;' }
    ];

    // Heading Styles
    const headingRows = [
      {
        className: 'h1, .h1',
        property: 'font-size: @h1-size; line-height: @line-height-h1; font-family: @font-family-heading; font-weight: @font-weight-semibold;'
      },
      {
        className: 'h2, .h2',
        property: 'font-size: @h2-size; line-height: @line-height-h2; font-family: @font-family-heading; font-weight: @font-weight-semibold;'
      },
      {
        className: 'h3, .h3',
        property: 'font-size: @h3-size; line-height: @line-height-h3; font-family: @font-family-heading; font-weight: @font-weight-semibold;'
      },
      {
        className: 'h4, .h4',
        property: 'font-size: @h4-size; line-height: @line-height-h4; font-family: @font-family-heading; font-weight: @font-weight-semibold;'
      },
      {
        className: 'h5, .h5',
        property: 'font-size: @h5-size; line-height: @line-height-h5; font-family: @font-family-heading; font-weight: @font-weight-semibold;'
      },
      {
        className: 'h6, .h6',
        property: 'font-size: @h6-size; line-height: @line-height-h6; font-family: @font-family-heading; font-weight: @font-weight-semibold;'
      },
      {
        className: '.h7',
        property: 'font-size: @h7-size; line-height: @line-height-h7; font-family: @font-family-heading; font-weight: @font-weight-semibold;'
      }
    ];

    return {
      fontSizeRows,
      fontWeightRows,
      headingRows
    };
  }
}
