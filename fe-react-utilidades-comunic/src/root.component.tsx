import { DetailedHTMLProps, useState } from "react";
// import './fe-wc-wk/src/fe-wc-wk.js';
// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       "ui-card": DetailedHTMLProps<
//         React.HTMLAttributes<HTMLElement>,
//         HTMLElement
//       >;
//     }
//   }
// }
export default function Root(props) {
  const [texto, setTexto] = useState<string>('');

  return <section className="hero is-dark is-fullheight-with-navbar">
  <div className="container" style={{paddingTop: '20px'}}>

      <div className="columns is-vcentered ">
         <div className="column is-8">
            <figure className="image is-128x128">
                       <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"></img>
                    </figure>
                    <div className="content is-medium">
                       <br></br>
                       <p className="title">React Micro Frontend</p>
                       <button onClick={() => funcionUtilitario(props)}>Obtener Valor Librería</button>
                       <h1 className="title">{texto}</h1>
                       <button onClick={() => funcionPubSub(props)}>Evento hacia Angular</button>
                    </div>
         </div>
         {/* <ui-card >
          <img
              slot="header" src="https://via.placeholder.com/320x180" alt="alt imagen"/>
          <h3 slot="header" >Prueba web components</h3>
          <p slot="content" >Esta es una prueba de webcomponent en Angular</p>
          <a href="#" slot="footer">Read</a>   
        </ui-card> */}
         </div>
  </div>
</section>;

  function funcionUtilitario(props) {
    setTexto(props.funcionUtilitario());
  }

  function funcionPubSub(props) {
    setTexto(props.publishLib("funcionPubSub", 'Enviado desde React'));
  }
}

