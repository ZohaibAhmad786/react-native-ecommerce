import styled from 'styled-components'

import { Title as TitleStyle } from '../../styles/typography'

export const Title = styled.Text`
  ${TitleStyle};
  padding-top: ${props => props.theme.metrics.spacing()};
  padding-bottom: ${props => props.theme.metrics.spacing(2)};
  text-align: center;
`

export const OrderItem = styled.View`
  margin-bottom: ${props => props.theme.metrics.spacing(2)};
`

export const OrderProduct = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const OrderImage = styled.Image`
  margin-bottom: ${props => props.theme.metrics.spacing(2)};
  width: 54px;
  height: 66px;
`

export const OrderList = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 10,
  },
})``
