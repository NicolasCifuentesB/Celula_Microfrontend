import { DetailedHTMLProps, useState } from "react";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ui-card": DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
export default function Root(props) {
  return <section className="hero is-dark is-fullheight-with-navbar">
  <div className="container" style={{paddingTop: '50px'}}>

      <div className="is-vcentered">
      <h1 className="title">React </h1>
        <h1 className="title">Micro frontends </h1>
        <br/>
        <br/>
        <ui-card >
          <img
              slot="header" src="https://via.placeholder.com/320x180" alt="alt imagen"/>
          <h3 slot="header" style={{color: 'black', paddingLeft:'10px'}} >Prueba web components React</h3>
          <p slot="content" style={{color: 'black', paddingLeft:'10px'}} >Esta es una prueba de webcomponent en React</p>
          <a href="#" slot="footer">Read</a>   
        </ui-card> 
         </div>
  </div>
</section>;

}

