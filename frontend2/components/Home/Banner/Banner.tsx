import { Container, Grid, Title, Text, Button, Group } from '@mantine/core';
import Image from "next/image";

interface BannerProps {
    title: string;
    description: string;
    buttonText: string;
    groupText: string;
    titleImageSrc: string;
    titleImageAlt: string;
    titleFontSize?: number;
    titleMarginBottom?: number;
    titleFontWeight?: number;
    titleLineHeight?: number;
    groupColor?: string;
    groupMarginTop?: number;
    buttonPadding?: string;
    buttonBorderRadius?: number;
    buttonBackgroundColor?: string;
    buttonFontWeight?: number;
    buttonMargin?: string;
    buttonColor?: string;
    buttonHoverBackgroundColor?: string;
    imageContainerDisplay?: string;
    imageContainerFlexDirection?: string;
    imageContainerAlignItems?: string;
    imageContainerJustifyContent?: string;
    imageWidth?: string;
    imageHeight?: string;
    imageMarginBottom?: string;
}

export function Banner({
    title,
    description,
    buttonText,
    groupText,
    titleImageSrc,
    titleImageAlt,
    titleFontSize = 60,
    titleMarginBottom = 15,
    titleFontWeight = 700,
    titleLineHeight = 1.1,
    groupColor = '#DD995B',
    groupMarginTop = 15,
    buttonPadding = '8px 16px',
    buttonBorderRadius = 45,
    buttonBackgroundColor = '#DD995B',
    buttonFontWeight = 600,
    buttonMargin = '15px 0',
    buttonColor = '#FBF5F0',
    buttonHoverBackgroundColor = '#87562A',
    imageContainerDisplay = 'flex',
    imageContainerAlignItems = 'center',
    imageContainerJustifyContent = 'center',
    imageWidth = '100%',
    imageHeight = 'auto',
    imageMarginBottom = '1rem'
}: BannerProps) {
  return (
    <Container>
      <Grid gutter="xl">
        <Grid.Col span={6}>
          <Title 
            order={1} 
            style={{
              fontSize: titleFontSize,
              marginBottom: titleMarginBottom,
              fontWeight: titleFontWeight,
              lineHeight: titleLineHeight,
              overflow: 'hidden'
            }}
          >
            {title}
          </Title>
          <Text>
            {description}
          </Text>
          <Group 
            align="center" 
            style={{
              color: groupColor,
              marginTop: groupMarginTop
            }}
          >
            <Button 
              style={{
                padding: buttonPadding,
                borderRadius: buttonBorderRadius,
                backgroundColor: buttonBackgroundColor,
                fontWeight: buttonFontWeight,
                margin: buttonMargin,
                color: buttonColor
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = buttonHoverBackgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = buttonBackgroundColor}
            >
                {buttonText}
            </Button>
            <Text>{groupText}</Text> 
          </Group>
        </Grid.Col>
        <Grid.Col 
          span={6} 
          style={{
            display: imageContainerDisplay,
            alignItems: imageContainerAlignItems,
            justifyContent: imageContainerJustifyContent
          }}
        >
          <Image 
            src={titleImageSrc} 
            alt={titleImageAlt} 
            width={0} 
            height={0} 
            style={{
              width: imageWidth,
              height: imageHeight,
              marginBottom: imageMarginBottom
            }} 
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}