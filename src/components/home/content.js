import React from "react";

const Content = ({title, description}) => {

    return (
        <>
            <div className="container_content">
                <div className="content">

                    <div className="content_text">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
                
            </div>
            
        </>
    );
};

export { Content };