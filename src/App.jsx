//JSX, é javascript + xml. esses são os componentes do react 
//de certa forma, cada função é um componente

import styles from './App.module.css';
import './global.css';
import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    //author e content, são propriedades do react. Como em html podemos colocar varias imagens com diferentes src, aqui é a mesma lógica
    <div>
      <Header/>

       {/* vamos criar uma classe wrapper (terá um css modules para estilizar) para definir qual o espaço em tela que será ocupado pela sidebar e pelos posts. */}
        <div className={styles.wrapper}>
          <Sidebar
          />
          <main>
            <Post 
            author='Eliza Salles' 
            content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus excepturi omnis officia explicabo ipsa nesciunt amet voluptas reiciendis, cumque modi natus illo est eaque doloremque unde, totam hic pariatur deleniti.' 
            />
            <Post
            author='Filipe Boldo'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, minima enim quibusdam sit accusantium eligendi ad nesciunt aspernatur praesentium animi vel perferendis alias delectus exercitationem aliquam voluptatum debitis tempora numquam!'
            />  
          </main>

        </div>
      
      
    </div>
  )
}


