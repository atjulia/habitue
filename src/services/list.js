import axios from 'axios';

import { http } from './config'

const list = async () => {
  const endpoint = "https://countries.trevorblades.com/graphql";
  const headers = {
    "content-type": "application/json"
  };
  
  const graphqlQuery = {
    "operationName": "list",
    "query": `query list { continents { code name countries { code name capital languages { name } } } }`,
    "variables": {}
  };
  
  
  const options = {
    "method": "POST",
    "headers": headers,
    "body": JSON.stringify(graphqlQuery)
  };
  
  const response = await fetch(endpoint, options);
  const data = await response.json();
  // console.log(data)
  return data
}

export default list