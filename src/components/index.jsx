import perfil from "../perfil.png"

function Index () {
  return (
    <div id="center">
        <div id="left-center">
        
                <img src={perfil}/>
                <p>Nombre: Victor Carmona</p>
                <p>Numero de control: UTM22030594</p>
                <p>Email: UTM220330594@utma.edu.mx</p>
                <p>Carrerra: TICS</p>
                <p>Cautrimestre: 6°</p>
            
        </div>
        <div id="right-center">
            <h2>Materias</h2>
            <table id="table" >

                <tr>
                    <td>Fosocu</td>
                </tr>
                <tr>
                    <td>
                        Databases for cloud computing
                    </td>
                </tr>

                <tr>
                    <td>Web Applications</td>
                </tr>
                
                
            </table>
        </div>
    </div>


  );
}
  
export default Index;
