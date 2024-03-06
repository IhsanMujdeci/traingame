import React from 'react'

type FeatureFlags = {
  isApplePlayEnabled: boolean,
  isGooglePlayEnabled: boolean
}

const DEFAULT_FLAGS: FeatureFlags = {
  isApplePlayEnabled: false,
  isGooglePlayEnabled: false
}

export const FeatureFlags = React.createContext(DEFAULT_FLAGS);

export function FeatureFlagsProvider({ children }: {children: React.ReactNode}){

  const features = {
    isApplePlayEnabled: false,
    isGooglePlayEnabled: true
  }

  features.isApplePlayEnabled = true

  return (
    <FeatureFlags.Provider value={features}>
      {children}
    </FeatureFlags.Provider>
  );
};