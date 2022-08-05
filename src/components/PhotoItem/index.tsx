import * as C from './styles'

type Props = {
    url: string;
    name:string;
    onHandleDelete: (url:string)=> void;
}
export function PhotoItem({url, name, onHandleDelete}: Props){
    function excluir(){
        onHandleDelete(name);
    
    }
    return(
        <C.Container>
            <img src={url} alt={name} />
            <button onClick={excluir}>apagar </button>
        </C.Container>
    )
}