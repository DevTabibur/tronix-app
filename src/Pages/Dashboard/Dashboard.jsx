import React from 'react';
import './Dashboard.css';
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'


const Dashboard = () => {
  const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

  const menu = [
    <>
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </>
  ]
  return (
    <>
      <div className='container mx-auto px-4'>
      <button onClick={toggleDrawer}>Show</button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
                <div>Hello World</div>
            </Drawer>
      </div>
    </>
  )
}

export default Dashboard