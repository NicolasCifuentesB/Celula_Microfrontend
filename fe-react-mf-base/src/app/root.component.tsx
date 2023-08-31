import { Component } from "./../components/component";
import logoBci from "./../assets/images/bci_logo.png";
import PACKAGE from '../../package.json'
//import { BCIFeParams } from '@bci/fe-params'
import Navbar from '../components/Navbar';

export default function Root(props) {
  const renderFeParams = () => {
    //const params = BCIFeParams[PACKAGE.name] || ''
    //return JSON.stringify(params, null, 2)
  }

  return (
      <Navbar/>
  );
}
