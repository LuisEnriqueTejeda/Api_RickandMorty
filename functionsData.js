const url = 'https://rickandmortyapi.com/api/character';

export const functionGetData = async () => {
    try {
        const response = await fetch (`${url}`);
        const result = await response.json();
        //console.log (response);
        console.log (result);

    
        return result;
    }catch (error) {
        console.log ('Ocurrio un error:', error);
        alert (error);
    }
    //return result;
}

//functionGetData ();

export const getOneCharacter= async(id)=>{
    try {
      const response = await fetch(`${url}/${id}`);
      console.log ("prueba response", response);
      const result = await response.json();
      
      return result
    } catch (error) {
      console.log(error);
      return error
    }
  }
