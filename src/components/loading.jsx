import { LoadingScreen } from '@telefonica/mistica'
import { useEffect, useState } from 'react'
import { subscribeLoading } from '../utils/loading'

export default function Loading() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const unsubscribe = subscribeLoading(setLoading)
    return unsubscribe
  }, [])

  if (!loading) return null

  return (
    <LoadingScreen
      title="Carregando"
      description="Aguarde enquanto os dados carregam..."
    />
  )
}
