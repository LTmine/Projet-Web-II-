import React from 'react';



export default function navbar() {
    
  return (
    <div className='bar'>
          <nav className='icon'>
              <i class="fa-solid fa-store"></i>
          </nav>

          <nav className='link'>
<ul className='nav-ul'>
<li className='nav-li'>
    <a href="#home">Home</a>
</li>
<li className='nav-li'>
    <a href="#homme">Homme</a>
</li>
<li className='nav-li'>
    <a href="#femme">Femme</a>
</li>
<li className='nav-li'>
    <a href="#bijoux">Bijoux</a>
</li>
</ul>
              

  </nav>

    <nav className='cart-button'>
    <i class="fa-solid fa-bag-shopping"></i>
    
        
    </nav>
    <div className='modal'></div>
    </div>
  );
  }

