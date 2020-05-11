import { Link } from "gatsby"
import React, { ChangeEvent, FC, FormEvent, useState } from "react"
import styled, { css } from "styled-components"

import { Button } from "./buttons"
import { puAlt } from "../images"
import { useSiteMetadata } from "../hooks"

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.base};
  color: ${({ theme }) => theme.colors.baseinvert};
  padding: ${({ theme }) => theme.boxes.padding.section.small};

  @media screen and (min-width: ${({ theme }) => theme.sizes.width.medium}) {
    display: flex;
    padding: ${({ theme }) => theme.boxes.padding.section.medium};
  }
`

const Col = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 25%;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.sizes.width.medium}) {
    align-items: flex-start;
    margin-bottom: 1.25em;
  }
`

const Logo = styled.img.attrs(() => ({ src: puAlt, alt: "Project Unicorn" }))`
  align-self: flex-start;
  margin: 0;
  margin-bottom: 2em;
  width: 8em;

  @media screen and (max-width: ${({ theme }) => theme.sizes.width.small}) {
    min-width: 8em;
    width: 70%;
  }
`

const Text = styled.p`
  margin-bottom: 0.9375em;
  width: 100%;
`

const List = styled.ul`
  margin: 0;
`

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.9375em;
`

const anchorStyles = css`
  background: none;
  color: ${({ theme }) => theme.colors.baseinvert};
  transition: 0.15s;

  &:visited {
    color: ${({ theme }) => theme.colors.baseinvert};
  }

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.highlightLight};
    }
  }
`

const StyledLink = styled(Link)`
  ${anchorStyles};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.sizes.width.medium}) {
    width: 100%;
  }
`

const FormLabel = styled.label``
const FormInput = styled.input`
  margin-bottom: 1rem;
`

/** Footer displays information about the web site. */
const Footer: FC = () => {
  const siteMetadata = useSiteMetadata()
  const [email, setEmail] = useState("")

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    alert(`Thanks ${email}! You've just saved one Axolotl 👏`)
  }

  return (
    <Wrapper>
      <Col>
        <Logo />
        <Text>{siteMetadata.description}</Text>
      </Col>

      <Col />

      <Col>
        <List>
          <ListItem>
            <StyledLink to="/blog" title={`${siteMetadata.title} blog`}>
              Blog
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink
              to="/achievements"
              title={`${siteMetadata.title} achievements page`}
            >
              Achievements
            </StyledLink>
          </ListItem>
        </List>
      </Col>
      <Col>
        <Form onSubmit={handleSubmit}>
          <FormLabel htmlFor="email-mailing-list">
            Subscribe to save one Axolotl right now!
          </FormLabel>
          <FormInput
            id="email-mailing-list"
            type="text"
            onChange={handleInputChange}
            value={email}
          />
          <Button>Save</Button>
        </Form>
      </Col>
    </Wrapper>
  )
}

export default Footer
