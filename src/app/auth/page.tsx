'use client';

import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('@/components/auth/company/signup'),
  { ssr: false }
)

const WrapperAuthPage = () => {
  return (
    <div>
      <DynamicComponentWithNoSSR />
    </div>
  )
}

export default WrapperAuthPage;
