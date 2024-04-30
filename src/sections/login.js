import './login.css';
import {useState, useEffect} from "react";

import { Button, Card, CardBody, CardHeader, Chip, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import logo from './ortex.jpg';

function Login() {

    const [isVisible, setIsVisible] = useState(false);
   
    const toggleVisibility = () => setIsVisible(!isVisible);
    const {isOpen, onOpen, onClose} = useDisclosure();

    const handleOpen = () => {
      onOpen();
    }
    
    
      const [ws, setWs] = useState(null); // WebSocket instance
      const [latestPrice, setLatestPrice] = useState(null);
      const [latestTimestamp, setLatestTimestamp] = useState(null);
    
      const connectWebSocket = () => {
        const wsUrl = 'wss://stream.tradingeconomics.com/?client=guest:guest';
        const socket = new WebSocket(wsUrl);
    
        socket.onopen = () => {
          console.log('WebSocket connected.');
          const subscriptionRequest = { topic: 'subscribe', to: 'EURUSD:CUR' };
          socket.send(JSON.stringify(subscriptionRequest));
        };
    
        socket.onmessage = (event) => {
          const data = JSON.parse(event.data);
          if (data.topic === 'EURUSD:CUR') {
            const price = data.price;
            const timestamp = new Date(data.dt);
            setLatestPrice(price);
            setLatestTimestamp(timestamp.toLocaleString()); // Convert to local time
          }
        };
    
        socket.onerror = (err) => {
          console.error('WebSocket error:', err);
        };
    
        socket.onclose = () => {
          console.log('WebSocket connection closed.');
          reconnectWebSocket(); // Implement reconnection logic
        };
    
        setWs(socket);
      };
    
      const reconnectWebSocket = () => {
        setTimeout(() => {
          connectWebSocket();
        }, 5000); // Reconnect after 5 seconds
      };
    
      useEffect(() => {
        connectWebSocket(); // Connect to WebSocket on mount
    
        return () => {
          if (ws) {
            ws.close(); // Close WebSocket on unmount
          }
        };
      }, []);

    return (
        <>
       {latestPrice ? <>  <div className="flex justify-center items-center mt-10"> {/* Center content vertically and horizontally */}
      <div className="flex flex-col gap-4 w-3/4">
      
      
      <Card className="py-5 bg-gray-900 ">
        <CardHeader className="font-bold leading-9 tracking-tight" >
        EUR/USD exchange rate 
        </CardHeader>
        <CardBody>
          <div >
          <Chip color="primary" variant="dot">Price</Chip> {latestPrice}
          </div>
          <div className='pt-2'>
          <Chip color="warning" variant="dot">Time</Chip>  {latestTimestamp}
          </div>
       
        </CardBody>
        </Card>
      </div>
      </div> </> :<> </>}
      


       <div className="flex justify-center items-center mt-10 mb-5"> {/* Center content vertically and horizontally */}
      <div className="flex flex-col gap-4 w-3/4"> {/* Parent container with centered content and defined width */}
        <Card className="py-5 bg-white "> 
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-800">
            Sign in to your account
          </h2>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex justify-content">
     

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6"  action="/login" method="post">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                <Button  
           
            variant="flat" 
            color="primary" 
            onPress={() => handleOpen()}
            className="block text-sm font-medium leading-6 text-gray-900"
          >
         Reset password?
          </Button>
                  
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-700">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-900">
             Sign Up
            </a>
          </p>
        </div>
     
      </CardBody>
    </Card>
       
       
        </div>
        </div>
        <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Reset Password</ModalHeader>
              <ModalBody>
              <form className="space-y-6">
            <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">
                New Password
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300">
                  Confirm new password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            
          </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
       </>
    );
}
export default Login;
