import {useState, useEffect} from 'react'

import * as C from './App.styles'
import * as Photos from './services/photos'
import {Photo} from './types/Photo'

export function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(()=>{
    const getPhotos = async () =>{
      setLoading(true);
      let photos = await Photos.getAll();
    }
    getPhotos();
  }, []);
  
  return (
    <C.Container>
      <C.Area>
        <C.Header> Galeria de Fotos</C.Header>
        

        
      </C.Area>
    </C.Container>
  )
}


