import { useEffect, useState } from "react";

const Promise = () => {

  const [data, setData] = useState()
  const url = 'https://randomuser.me/api/';

  const getData = () => {
    fetch( url ).then( (resp) => {
      resp.json().then( ({results}) => {
        setData( results[0] )
      })
    })
  };

useEffect( () => {
  getData()
},[])

  return (
    <>
      <h2>Promise</h2>
      <pre>
        { JSON.stringify( data, null, 2) }
      </pre>
    </>
  );
};

export default Promise;