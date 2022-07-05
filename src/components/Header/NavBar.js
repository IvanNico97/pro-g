import React, { useContext } from 'react'
import { Flex, Box, Image } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {CartContext} from '../../context/CartContext'
import { LOGO6 } from '../Imagenes/index'
import User from '../Login/User'
import CartMenu from './CartMenu'


const NavBar = () => {
  /* const [ categories, setCategories ] = useState() */

  const { getQuantity } = useContext(CartContext)
  const quantity = getQuantity()
  
  
  /* async function getCategories(db) {
  const categorias = collection(db, 'categories');
  const cat = await getDocs(categorias);
  const cityList = cat.docs.map(doc => doc.data());
  return cityList;
} */

 /*  useEffect(() => {
    getCategories()
    .then(response => {
      setCategories(response)
    })
  }, []) */

  return (
    <>
      <Flex
        w='auto'
        h='130px'
        direction='row'
        align='center'
        justify='space-between'
        color='white'
        bg='#14171A'
        fontSize= '30px'
        fontFamily='Roboto, sans-serif'
      >
      <Box pl='4' ml='4'>
        <Link to='/'>
          <Image src={LOGO6} borderRadius='full' boxSize='130px' alt='logo'></Image>
        </Link>
      </Box>
        { 
          /* categories.map(categorias => {
          <NavLink key={categorias.id} to={`/category/${categorias.id}`}>{categorias.name}</NavLink>
          }) */
        }
        
      
        <Flex align='center' justify='center'>
          <Box mr='2' pr='2'>
            <CartMenu />
          </Box>
          <Box mr='4' pr='4'>
            { quantity > 0 &&
              <Link to='/cart'>
                <CartWidget bg='#14171A' icon={<BsFillCartFill/>}/>
              </Link>
            }
          </Box>
          <Box mr='6' pr='6' pt='3'>
            <User/>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default NavBar