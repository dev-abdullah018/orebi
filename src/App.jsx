import logo from './assets/logo.png'
import Image from './components/layout/Image';
import Flex from './components/layout/Flex';
import List from './components/layout/List';
import ListItem from './components/layout/ListItem';
function App() {
  return (
    <div>
      <nav>
        <div className="max-w-container mx-auto p-2.5">
          <Flex className='flex'>
            <div className="w-3/12">
              <Image src={logo} alt='orebi' />
            </div>
            <div className="w-9/12">
              <List className='flex justify-end gap-x-10'>
                <ListItem className='font-dm text-sm font-normal hover:font-bold' itemname="Home" /> 
                <ListItem className='font-dm text-sm font-normal hover:font-bold' itemname="Shop"/>
                <ListItem className='font-dm text-sm font-normal hover:font-bold' itemname="About"/>
                <ListItem className='font-dm text-sm font-normal hover:font-bold' itemname="Contacts"/>
                <ListItem className='font-dm text-sm font-normal hover:font-bold' itemname="Journal"/>
              </List>
            </div>
          </Flex>
        </div>
      </nav>
    </div>
  );
}

export default App;
