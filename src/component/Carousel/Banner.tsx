import { memo } from 'react'
import Carousel from '.'
import cover from 'app/images/images/coverpage.png'
import { Row, Col, Card, CardText, Container } from 'reactstrap'
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'
type CarousalItem = {
  src: string
  altText: string
  caption: React.ReactNode
  key: number
}

const coverContent = () => {
  return (
    <Row>
      <Col md={8} sm={12}>
        <Card className="covertitle-mid">
          <Card className="covertitle-inner">
            <CardText className="cardtext">
              Dr. Manoj Soni, Hon'ble Chairman, Union Public Service Commission
              administering the oath of office and secrecy to Dr. Dinesh Dasa on
              his appointment as an Hon'ble Member of the Commission on
              29.09.2023 (FN)
            </CardText>
          </Card>
        </Card>
      </Col>
      <Col md={4} sm={0} />
    </Row>
  )
}
const items: CarousalItem[] = [
  {
    src: `${cover}`,
    altText: 'Slide 1',
    caption: coverContent(),
    key: 1,
  },
  {
    src: `${cover}`,
    altText: 'Slide 2',
    caption: coverContent(),
    key: 2,
  },
  {
    src: `${cover}`,
    altText: 'Slide 3',
    caption: coverContent(),
    key: 3,
  },
]

const cardData = [
  {
    detail: 'fiction fee combine Geo-Scientist (preliminary) Examination 2024',
    key: 1,
  },
  {
    detail:
      'Lateral Recruitments: 01 Post of Joint Secretary (Arbitration and Conciliation), Ministry of Law and Justice',
    key: 2,
  },
  {
    detail:
      'Fictitious Fee: Combined Geo-Scientist (Preliminary) Examination, 2024',
    key: 3,
  },
  {
    detail: 'Press Note: Indian Forest Service (Main) Examination, 2023',
    key: 4,
  },
  {
    detail: 'fiction fee combine Geo-Scientist (preliminary) Examination 2024',
    key: 5,
  },
  {
    detail: 'fiction fee combine Geo-Scientist (preliminary) Examination 2024',
    key: 6,
  },
  {
    detail: 'fiction fee combine Geo-Scientist (preliminary) Examination 2024',
    key: 7,
  },
  {
    detail: 'fiction fee combine Geo-Scientist (preliminary) Examination 2024',
    key: 8,
  },
  {
    detail: 'fiction fee combine Geo-Scientist (preliminary) Examination 2024',
    key: 9,
  },
]
const Notification = () => {
  return (
    <div className="notification-section">
      <div className="inner-notification">
        <div className="inner-notification">
          <div>
            <p className="newsTitle">What's New</p>
          </div>
          <div className="marquee">
            <div className="_card_content marquee-content">
              {cardData.map((item, index) => (
                <Card key={index} className="_card_row">
                  <CardText className="cardtext">{item.detail}</CardText>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <span className="view_all">View All</span>
            
          </div>
        </div>
      </div>
    </div>
  )
}
const Banner = memo(() => {
  return (
    <>
      <div>jhjjhjhhhghghghghghghgghghghghg
        <Carousel items={items} />
        
        <BannerTop>
          <Container>
            <Row>
              <Col />
              <Col lg={4} md={12} sm={12} className="align-self-end">
                <Notification />
              </Col>
            </Row>
          </Container>
        </BannerTop>
      </div>
    </>
  )
})

export default Banner

const BannerTop = styled('div')`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  .notification-section {
    height: 480px;
    min-width: auto;
  }
  ._card_content {
    height: 390px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    color: #fff500;
    flex-wrap: wrap;
  }
  ._card_row {
    flex-wrap: wrap;
    overflow-x: hidden;
  }
  .view_all {
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: var(--Secondry--Link-color, #0083db);
    font-family: Roboto;
    font-size: 0875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-decoration-line: underline;
  }
  .carousal_items {
    & img {
      background-repeat: no-repeat;
    }
  }
  @media only screen and (max-width: 1030px) {
    .notification-section {
      height: 350px;
      min-width: auto;
    }
  }
  @media only screen and (max-width: 991px) {
    position: static;
    .notification-section {
      height: 390px;
      min-width: auto;
    }
  }
  @media only screen and (max-width: 763px) {
    position: static;
    .notification-section {
      height: 350px;
      min-width: auto;
    }
  }

  .marquee {
    height: 400px;
    overflow: hidden;
    position: relative;
    width: 380px;
  }

  .marquee-content {
    animation: marquee-up 10s linear infinite;
    position: absolute;
    top: 100%;
  }

  @keyframes marquee-up {
    0% {
      top: 100%;
    }
    100% {
      top: -100%;
    }
  }
`
