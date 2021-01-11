# ChuckNorrisApi
 Api de chuckNorris que se consume para mostrar chistes aleatorios o por categoria en REACT
 
 Para el consumo de las apis tanto de chistes aleatorios como chistes por categoría se utilizo un llamado Asíncrono con fetch nativo de Javascript.
 Para la interfaz se utilizó principalmente StyledComponent se tomó de ejemplo el botón que proporciona el boilerPlate pero se modificó para que fuera más estético.
 Para el manejo de los State se utilizó el hook se useState y useEffect para cargar las categorias en el momento de iniciar la aplicación.
 *Es importante notar que la aplicación está hecha de manera que si no se selecciona ninguna categoria el botón consume el api que genera chistes aleatorios, de no ser así (se   selecciona una categoría) entonces el sistema consume el api que genera chistes por categoría, ya que me pareció más atractivo y práctico para el usuario que fuera de esta   manera*
 Se comentó todo el código relevante, además, se documentó con PropTypes. 
 
 También subí el proyecto a Netlify por lo que puede visualizarlo desde el siguiente link: https://inspiring-curie-ec2448.netlify.app/
