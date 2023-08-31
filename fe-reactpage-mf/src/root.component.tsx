import "./diseño/estilos.css"

export default function Root(props) {
   return <section className="hero is-dark is-fullheight-with-navbar">
      <div className="container">

         <div className="columns">
            <div className="column">
               <div className="box-padding">
                  <article className="media">
                     <div className="media-left">
                        <figure className="image is-128x128">
                           <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"></img>
                        </figure>
                     </div>
                     <div className="media-content">
                        <div className="content is-medium">
                           <br></br>
                           <h1 className="title">React</h1>


                        </div>
                     </div>

                  </article>
               </div>
            </div>
         </div>

         <div className="columns is-vcentered">

            <div className="column is-8">
               <div className="content is-medium">
                  <p>React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre.</p>
                  <p> La característica clave de React es la composición de componentes,  En React, los componentes describen cualquier comportamiento componible, y esto incluye el renderizado, el ciclo de vida y el estado.</p>
               </div>
            </div>
            <div className="column">

               <div className="column is-three-half is-offset-one-fifth">
                  <div className="content is-medium">
                     <h4 className="subtitle">Cli React</h4>
                     <div className="box">
                        npm install -g create-react-app
                     </div>
                  </div>
               </div>
            </div>


            </div>
         <div className="columns">
            <div className="column is-two-fifths">
               <div className="content is-medium">
                  <h4 className="title"> Desarrolle en todas las plataformas</h4>
                  <p className="text-body">
                     La amplitud de React permite crear aplicaciones para todos los formatos
                     web, web móvil, móvil nativo y escritorio nativo.
                  </p>

               </div>
            </div>
            <div className="column">
               <br></br>
               <br></br>
               <br></br>
               <div className="column is-one-two is-offset-one-fifth">
                  <a href="https://reactjs.org/" target="_blank"><button className=" button"><i className="fab fa-react fa-2x " style={{color:"#00ccff"}}></i>
                     <p> <b>GO TO REACT</b></p>
                  </button></a>
               </div>
            </div>
            <div className="column ">
               <figure className="image is-16by9">
                  <img src="https://code-care.com/wp-content/uploads/2021/06/Our-React-Native-services.png"></img>
               </figure>
            </div>
</div>

         </div>  

            </section>;
}
