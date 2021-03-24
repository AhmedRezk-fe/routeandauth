import firebase from './initial'

const getFirebaseToken = () => {
    const message = firebase.messaging()
    message.requestPermission().then(()=>{
        return message.getToken()
    }).then((token) => {
        console.log(token)
        return token
    }).catch(err => {
        console.log(err)
    })
} 

export default getFirebaseToken;