import React ,{useContext} from 'react'
import { UserContext,PhoneContext } from '../App'
import ComponentF from './ComponentF'
function ComponentE() {
    const name=useContext(UserContext)
    const phone=useContext(PhoneContext)
    return (
        <div>
            <ComponentF></ComponentF>
            <h1>{name} {phone}</h1>
        </div>
    )
}

export default ComponentE
