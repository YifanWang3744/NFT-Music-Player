import { useState, useEffect, useRef } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card, Button, Carousel  } from 'react-bootstrap'
import { Link } from "react-router-dom"
import buy from './buy.png'
import list from './list.png'
import resale from './resale.png'
const toWei = (num) => ethers.utils.parseEther(num.toString())

export default function MyAccount({ contract, account }) {
  const [loading, setLoading] = useState(true)
  const [membership, setMembership] = useState(null)
  const loadMyAccount = async () => {
    const result = await contract.checkMembers()
    const membership = result
    setMembership(membership)
    setLoading(false)
  }
  const joinMembership = async () => {
    await (await contract.membership({value: toWei(1)})).wait()
    loadMyAccount()
  }

  useEffect(() => {
    !membership && loadMyAccount()
  })

  if (loading) return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Loading...</h2>
    </main>
  )
  return (
    <div className="flex justify-center">
      <div className="flex justify-center">
        {membership == false?
          <div className="px-5 py-3 container">
            <>
            <main style={{padding: "1rem 13rem"}}>
            {[
                    'Secondary'
                ].map((variant) => (
                    <>           
                   
                    <Card
                    bg={'light'}
                    key={variant}
                    text={'dark'}
                    style={{ width: '40rem' }}
                    className="mb-2 "
                  >
                    <Card.Body>
                      <Card.Title><h1>JOIN US NOW!</h1></Card.Title>
                      <Card.Text>
                        
                      </Card.Text>
                      <div>
                        <p>Come and recieve your <strong>10% discount</strong> ONLY FOR our members!</p>
                      </div>
                      <Button onClick={() => joinMembership()} variant="primary">
                        Join for 1 ETH
                      </Button>
                    </Card.Body>
                  </Card>
                    <h1 class="section-headline large-centered large-10 small-12 will-change">
                    <br/>
                    <p><em>Buy music with a 10% discount</em>.</p>
                    <p><em>Resale them at any price.</em></p>
                    <br/><br/>
                    </h1> 
                    <h1>
                      What you will get from us
                    </h1><br/>
                    <Card
                    bg={'light'}
                    key={variant}
                    text={'dark'}
                    style={{ width: '40rem' }}
                    className="mb-2 "
                  >
                    <Card.Body>
                      <Card.Title><br/>
                      <p>Buy your music at a lower price, enjoy a 10% off <br/>
                      after joining our membership.</p><br/></Card.Title>
                      <Card.Text>
                        
                      </Card.Text>
                      <div>
                      <p> </p> 
                      <img src={buy} width="400"></img>
                      </div>

                    </Card.Body>
                  </Card><br/>
                  <Card
                    bg={'light'}
                    text={'dark'}
                    style={{ width: '40rem'}}
                    className="mb-2 "
                  >
                    <Card.Body>
                      <Card.Title><br/>
                      <p>Sell your tokens if you don't want them anymore.<br/>
                      You can sell them at any price you want.</p><br/></Card.Title>
                      <Card.Text>
                        
                      </Card.Text>
                      <div>
                      <p> </p> 
                      <img src={resale} width="400"></img>
                      </div>

                    </Card.Body>
                  </Card><br/>
                  <Card
                    bg={'light'}
                    text={'dark'}
                    style={{ width: '40rem'}}
                    className="mb-2 "
                  >
                    <Card.Body>
                      <Card.Title><br/>
                      <p>See your items on sale in Myresales.</p><br/></Card.Title>
                      <Card.Text>
                        
                      </Card.Text>
                      <div>
                      <p> </p> 
                      <img src={list} width="600"></img>
                      </div>

                    </Card.Body>
                  </Card>
                  </>
                ))}
            </main>
            </>
          </div>
          : (
            <><><main style={{ padding: "1rem 17rem" }}>

              <h1 class="section-headline large-centered large-10 small-12 will-change" bg='#000000'>
                <br />
                <p><em>You're already our member!</em></p>
                <p><em>Enjoy your 10% discount and have some fun!</em></p>
              </h1>
            </main>
              <br />
              <Button as={Link} to="/" variant="primary">Back to home page</Button></>
              <br/><br/><br/>
              <h1>
                      Your membership rights
                    </h1>
                    <div style={{padding:"1rem 21.8rem"}}>
                    <Card
                    bg={'light'}
                    text={'dark'}
                    style={{ width: '40rem' }}
                    className="mb-2 "
                  >
                    <Card.Body>
                      <Card.Title><br/>
                      <p>Buy your music at a lower price, enjoy a 10% off <br/>
                      after joining our membership.</p><br/></Card.Title>
                      <Card.Text>
                        
                      </Card.Text>
                      <div>
                      <p> </p> 
                      <img src={buy} width="400"></img>
                      </div>

                    </Card.Body>
                  </Card><br/>
                  <Card
                    bg={'light'}
                    text={'dark'}
                    style={{ width: '40rem'}}
                    className="mb-2 "
                  >
                    <Card.Body>
                      <Card.Title><br/>
                      <p>Sell your tokens if you don't want them anymore.<br/>
                      You can sell them at any price you want.</p><br/></Card.Title>
                      <Card.Text>
                        
                      </Card.Text>
                      <div>
                      <p> </p> 
                      <img src={resale} width="400"></img>
                      </div>

                    </Card.Body>
                  </Card><br/>
                  <Card
                    bg={'light'}
                    text={'dark'}
                    style={{ width: '40rem'}}
                    className="mb-2 "
                  >
                    <Card.Body>
                      <Card.Title><br/>
                      <p>See your items on sale in Myresales.</p><br/></Card.Title>
                      <Card.Text>
                        
                      </Card.Text>
                      <div>
                      <p> </p> 
                      <img src={list} width="600"></img>
                      </div>

                    </Card.Body>
                  </Card>
                  </div>
              </>
          )}
      </div>
    </div>
  );
}

