import React, { FC } from "react"
import styled from "styled-components"
import { useSiteMetadata } from "@hooks"

const Wrapper = styled.header`
  padding: ${({ theme }) => theme.boxes.padding.section.medium};

  @media screen and (max-width: ${({ theme }) => theme.sizes.width.small}) {
    padding: ${({ theme }) => theme.boxes.padding.section.small};
  }
`

const Heading = styled.h2`
  font-size: 2.3em;
  line-height: 1.3;

  @media screen and (max-width: ${({ theme }) => theme.sizes.width.small}) {
    font-size: 1.7em;
  }
`

const SubHeading = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  padding: 1.875em 0;
  text-align: start;
`

/** Hero contains the web site's tag line and a call-to-action button. */
const Hero: FC = () => {
  const siteMetadata = useSiteMetadata()

  return (
    <Wrapper>
      <Heading>Our big achievements!</Heading>
      <SubHeading>Discover them by clicking on the images</SubHeading>
    </Wrapper>
  )
}

export default Hero
