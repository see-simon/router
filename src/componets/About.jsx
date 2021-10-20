import React from 'react'
<script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js"
    data-auto-a11y="true"></script>


const About =()=>{
    return(
        <div>
             <div className="Education">
                            <h3>
                                <i class="fas fa-layer-group fa-1x"></i>
                            short courses currently doing</h3>
                            <ul>

                                <li>java</li>
                                <li>java Script</li>
                                <li>HTML</li>
                                
                            </ul>

                       </div>
             <div className="Social">
                       <h2>Social</h2>
                       <i className="fab fa-facebook-square fa-2x"></i> <h4>Facebook</h4>
                      <p>King See Thobejane</p>
                      <i className="fab fa-twitter fa-1x"></i>
                      
                      <h4>Twitter</h4>
                      <p>@King_See</p>

                </div>
        </div>
    )

}
export default  About
