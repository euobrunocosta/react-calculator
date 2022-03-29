import React, { useState } from 'react'

import { Segment, Grid, Button, Input } from 'semantic-ui-react'
import { Flex, Container } from './Components'

const Calculator = () => {

  const [ inputValue, setInputValue ] = useState('0')

  const concatNumber = (e: React.MouseEvent): void => {
    const value: string = e.currentTarget.innerHTML
    if (inputValue === '0' && value === '0') { return }
    setInputValue((inputValue === '0' ? '' : inputValue) + value)
  }

  const reset = (): void => {
    setInputValue('0')
  }

  const calculate = (firstNumber: number, secondNumber: number, operation: string): number => {
    switch(operation) {
      case '+': return firstNumber + secondNumber
    }
    return 1
  }

  return (
    <Flex justify={'center'}>
      <Container width={400}>
        <Segment>
          <Grid centered>
            <Grid.Row>
              <Grid.Column width={4}>
                <Button fluid color='red' onClick={reset} data-testid='c-button'>C</Button>
              </Grid.Column>
              <Grid.Column width={12}>
                <Input
                  fluid
                  readOnly
                  value={inputValue}
                  data-testid='input'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>
                <Button fluid onClick={e => concatNumber(e)} data-testid='7-button'>
                  7
                </Button>
              </Grid.Column>
              <Grid.Column width={4}>
                <Button fluid onClick={e => concatNumber(e)} data-testid='8-button'>
                  8
                </Button>
              </Grid.Column>
              <Grid.Column width={4}>
                <Button fluid onClick={e => concatNumber(e)} data-testid='9-button'>
                  9
                </Button>
              </Grid.Column>
              <Grid.Column width={4}>
                <Button fluid color={'yellow'} data-testid='divided-button'>/</Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>
                <Button fluid onClick={e => concatNumber(e)} data-testid='4-button'>
                  4
                </Button>
              </Grid.Column>
              <Grid.Column width={4}>
                <Button fluid onClick={e => concatNumber(e)} data-testid='5-button'>
                  5
                </Button>
              </Grid.Column>
              <Grid.Column width={4}>
                <Button fluid onClick={e => concatNumber(e)} data-testid='6-button'>
                  6
                </Button>
              </Grid.Column>
              <Grid.Column width={4}>
                <Button fluid color={'yellow'} data-testid='times-button'>*</Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>
                <Button fluid onClick={e => concatNumber(e)} data-testid='1-button'>
                  1
                </Button>
              </Grid.Column>
              <Grid.Column width={4}>
                <Button fluid onClick={e => concatNumber(e)} data-testid='2-button'>
                  2
                </Button>
              </Grid.Column>
              <Grid.Column width={4}>
                <Button fluid onClick={e => concatNumber(e)} data-testid='3-button'>
                  3
                </Button>
              </Grid.Column>
              <Grid.Column width={4}>
                <Button fluid color={'yellow'} data-testid='minus-button'>-</Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>
                <Button fluid onClick={e => concatNumber(e)} data-testid='0-button'>
                  0
                </Button>
              </Grid.Column>
              <Grid.Column width={4}>
                <Button fluid onClick={e => concatNumber(e)} data-testid='dot-button'>
                  .
                </Button>
              </Grid.Column>
              <Grid.Column width={4}>
                <Button fluid color={'green'} data-testid='equal-button'>
                  =
                </Button>
              </Grid.Column>
              <Grid.Column width={4}>
                <Button fluid color={'yellow'} data-testid='plus-button'>
                  +
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </Flex>
  )

}

export default Calculator
