 "use client"
import { memo } from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'

type CarousalItem = {
  src: string
  altText: string
  caption: React.ReactNode
  key: number
}

type Props = {
  items: CarousalItem[]
}

const CarouselNew = memo((Props: Props) => {
  return (
    <CarouselStyles>
      <Carousel style={{ width: '100%', left: 0, right: 0 }}>
        {Props.items.map((item: CarousalItem, index: number) => (
          <Carousel.Item
            className={'carousal_items'}
            interval={4000}
            key={index}
          >
            <img src={item.src} alt="slides" />
            <Carousel.Caption className={'caption'}>
              <div>{item.caption}</div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </CarouselStyles>
  )
})

export default CarouselNew

const CarouselStyles = styled.div`
  .carousel-caption {
    left: 3%;
    right: 3%;
    top: 10;
  }
`
