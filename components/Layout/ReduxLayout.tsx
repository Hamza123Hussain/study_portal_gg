'use client'
import React from 'react'
import { Provider } from 'react-redux'
import ConditionalLayout from './ConditionalLayout'
import Store from '@/utils/Redux/Store'

const ReduxLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={Store}>
      <ConditionalLayout>{children}</ConditionalLayout>
    </Provider>
  )
}
export default ReduxLayout
