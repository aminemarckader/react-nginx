import React,{Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
//import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab)


export default function Footer() {
    return (
        <Fragment>
        <footer className="bg-primary footer fixed-bottom text-center text-white footer-padding">
 
            <div className="container p-4">
   
                <section className="mb-2">
            
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FontAwesomeIcon icon={['fab','facebook']} />
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FontAwesomeIcon icon={['fab','twitter']} />
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FontAwesomeIcon icon={['fab','google']} />
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FontAwesomeIcon icon={['fab','instagram']} />
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FontAwesomeIcon icon={['fab','linkedin']} />
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FontAwesomeIcon icon={['fab','github']} />
                    </a>
                </section>
            </div>

  
            <div className="text-center p-2 mb-2">
                © 2020 - {new Date().getFullYear()} Copyright:&nbsp; Mohamed Lamine KADER - IT Department
            </div>

        </footer> 
        </Fragment>
    )
}
