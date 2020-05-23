import styled from 'styled-components'

type TProps = {
  justify?: 'center' | 'space-around' | 'space-between' | 'space-evenly' | 'stretch' | 'flex-start'
  align?: 'baseline' | 'center' | 'stretch' | 'flex-start' | 'flex-end'
  wrap?: 'wrap' | 'nowrap'
  direction?: 'row' | 'column'
  height?: string
  width?: string | number
  css?: string
}

const Flex = styled.div<TProps>`
  display: flex;
  flex-wrap: ${p => p.wrap};
  justify-content: ${p => p.justify};
  align-items: ${p => p.align};
  flex-direction: ${p => p.direction};
  height: ${p => p.height};
  width: ${p => p.width};
`
export default Flex