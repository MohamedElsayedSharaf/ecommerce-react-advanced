import React from 'react';

const Head = () => {
    return (
        <>
            <section className='head'>
                <div className="container d-flex">
                    <div className="left-row">
                        <i className="fa fa-phone"></i>
                        <label>+20 1285147876</label>
                        <i className="fa fa-envelope"></i>
                        <label>example@gmail.com</label>
                    </div>
                    <div className="right row RText">
                        <label>Theme FAQ's</label>
                        <label>Need Helps</label>
                        <span>🏳️</span>
                        <label>EN</label>
                        <span>🏳️</span>
                        <label>USD</label>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Head;
