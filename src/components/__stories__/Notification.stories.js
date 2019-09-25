import React from 'react'
import { storiesOf } from '@storybook/react'
import DangerWithDisimiss from '../Notification/DangerWithDisimiss'

storiesOf('Notification', module).add('with dismiss', () => (
  <DangerWithDisimiss message={'hello'} />
))
