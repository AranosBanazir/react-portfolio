import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError()
  console.log(error)

  const styles = {
    text:{
      color: '#E5D0CC',
      fontSize: '55px',
      fontWeight: 'bold'
    },
    container:{
      height: '100vh',
      width: '100vw'
    }
  }


  return (
    <>
    <div className="d-flex justify-content-center align-items-center flex-col flex-wrap text-center" style={styles.container}>
      <div  className="word-wrap">
        <p style={styles.text}>{error.data || error.statusText || error.message }</p>
      </div>
    </div>
    </>
  )
}