import React from 'react'
import { PhoneContext, UserContext } from '../App'
function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user=>{
                        return(
                        <PhoneContext.Consumer>
                            {
                                phone =>{
                                    return <h1>{user} {phone}</h1>
                                }
                            }
                        </PhoneContext.Consumer>
                        )
                        
                    }
                }
            </UserContext.Consumer>
            Component F 
        </div>
    )
}

export default ComponentF
