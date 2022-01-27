import '../../styles/globals.css'

import ErrorBoundary from '@components/ErrorBoundary'
import { providers } from 'ethers'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import { chain, Connector, Provider } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const infuraId = process.env.NEXT_PUBLIC_INFURA_ID as string

const supportedChains = [chain.rinkeby]
// Set up connectors
const connectors = () => {
  return [
    new InjectedConnector({ chains: supportedChains }),
    new WalletConnectConnector({
      options: {
        infuraId,
        qrcode: true
      }
    })
  ]
}

// Set up providers
type ProviderConfig = { chainId?: number; connector?: Connector }
const provider = ({ chainId }: ProviderConfig) =>
  new providers.InfuraProvider(chainId, infuraId)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Provider
        autoConnect
        connectorStorageKey="gog.wallet"
        connectors={connectors}
        provider={provider}
      >
        <Head>
          <title>Welcome to Gorilla Gang!</title>
        </Head>
        <Toaster />
        <Component {...pageProps} />
      </Provider>
    </ErrorBoundary>
  )
}

export default MyApp
