import React, { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer className='page__footer'>
                <div className="footer-copyright">
                    <div className="container">
                        <h3 className='text-center'>&copy; {new Date().getFullYear()} Copyrioght Reserved</h3>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;