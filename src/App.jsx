import logo from './assets/logo.png'
import Image from './components/layout/Image';
import Flex from './components/layout/Flex';
import List from './components/layout/List';
import ListItem from './components/layout/ListItem';
function App() {
  return (
    <div>
      <nav>
        <div className="max-w-container bg-red-600 mx-auto">
          <Flex>
            <div className="w-3/12">
              <Image src={logo} alt='orebi' />
            </div>
            <div className="w-9/12">
              <List>
                <ListItem itemname="Home" /> 
                <ListItem itemname="Shop"/>
                <ListItem itemname="About"/>
                <ListItem itemname="Contacts"/>
                <ListItem itemname="Journal"/>
              </List>
            </div>
          </Flex>
        </div>
      </nav>
    </div>
  );
}

export default App;
