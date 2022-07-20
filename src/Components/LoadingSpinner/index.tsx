import React from 'react'
import { Oval } from  'react-loader-spinner'

export const LoadingSpinner: React.FC = ()  => {
    return (
        <Oval
            height="30"
            width="30"
            color='grey'
            ariaLabel='loading'
        />
    )
}
