import {
  FreshConfig,
  FreshContext,
  Handlers,
  PageProps,
} from "$fresh/server.ts";

import Quote from "../components/Quote.tsx";

import Axios from "npm:axios";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, string>) => {
    try {
      const { id } = ctx.params;

      const response = await Axios.get(`https://filmquotes.deno.dev/${id}`,);

      if(response.status !== 200) {throw new Error("No hay respuesta de la API")}

      return ctx.render(response.data);
      
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  },
};

const Page = (props: PageProps) => {
  try {
    const quote:string = props.data;

    return (
    <Quote quote={quote}/>
    );

  } catch (e) {
    return <div>Ha ocurrido un error</div>;
  }
};

export default Page;