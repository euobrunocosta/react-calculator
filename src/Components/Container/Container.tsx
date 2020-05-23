import styled from 'styled-components'

type TProps = {
  width?: number
}

const Container = styled.div<TProps>`
  width: ${p => p.width}px;
`

export default Container