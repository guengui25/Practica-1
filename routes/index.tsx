import Axios from "npm:axios";

import Quote from "../components/Quote.tsx";

export default async function Home() {

  try{

    const response = await Axios.get("https://filmquotes.deno.dev/");

    const quote = await response.data;

    return (
      <Quote quote={quote}/>
    );

  }
  catch (error) {
    return <div>{error.message}</div>;
  }
}
