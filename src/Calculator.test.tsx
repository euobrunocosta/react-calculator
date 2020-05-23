import React from 'react'
import Calculator from './Calculator'
import { render, fireEvent, cleanup } from '@testing-library/react'

describe('Calculator component test', () => {

  afterEach(cleanup)

  it('should render all the digit buttons', () => {
    const { getByTestId } = render(<Calculator />)

    const zeroButton = getByTestId('0-button')
    const oneButton = getByTestId('1-button')
    const twoButton = getByTestId('2-button')
    const threeButton = getByTestId('3-button')
    const fourButton = getByTestId('4-button')
    const fiveButton = getByTestId('5-button')
    const sixButton = getByTestId('6-button')
    const sevenButton = getByTestId('7-button')
    const eightButton = getByTestId('8-button')
    const nineButton = getByTestId('9-button')

    expect(zeroButton).toBeInTheDocument()
    expect(oneButton).toBeInTheDocument()
    expect(twoButton).toBeInTheDocument()
    expect(threeButton).toBeInTheDocument()
    expect(fourButton).toBeInTheDocument()
    expect(fiveButton).toBeInTheDocument()
    expect(sixButton).toBeInTheDocument()
    expect(sevenButton).toBeInTheDocument()
    expect(eightButton).toBeInTheDocument()
    expect(nineButton).toBeInTheDocument()

  })

  it('should render the c, the . and the = buttons', () => {
    const { getByTestId } = render(<Calculator />)

    const cButton = getByTestId('c-button')
    const equalButton = getByTestId('equal-button')
    const dotButton = getByTestId('dot-button')

    expect(cButton).toBeInTheDocument()
    expect(equalButton).toBeInTheDocument()
    expect(dotButton).toBeInTheDocument()

  })

  it('should render the operation buttons', () => {
    const { getByTestId } = render(<Calculator />)

    const plusButton = getByTestId('plus-button')
    const minusButton = getByTestId('minus-button')
    const timesButton = getByTestId('times-button')
    const dividedButton = getByTestId('divided-button')

    expect(plusButton).toBeInTheDocument()
    expect(minusButton).toBeInTheDocument()
    expect(timesButton).toBeInTheDocument()
    expect(dividedButton).toBeInTheDocument()

  })

  it('should render the input and it should have an initial value of 0', () => {
    const { getByDisplayValue } = render(<Calculator />)
    expect(getByDisplayValue('0')).toBeInTheDocument()
  })

  it('should show its corresponding digit after pressing each digit button', () => {
    const { getByTestId } = render(<Calculator />)
    const input = getByTestId('input').firstChild
    for (let i = 0; i <= 9; i++) {
      fireEvent.click(getByTestId('c-button'))
      fireEvent.click(getByTestId(`${i}-button`))
      expect(input).toHaveValue(i.toString())
    }
  })

  it('should set the input value to 0 after pressing the c button', () => {
    const { getByTestId } = render(<Calculator />)
    const input = getByTestId('input').firstChild
    fireEvent.click(getByTestId('5-button'))
    expect(input).toHaveValue('5')
    fireEvent.click(getByTestId('c-button'))
    expect(input).toHaveValue('0')
  })

})